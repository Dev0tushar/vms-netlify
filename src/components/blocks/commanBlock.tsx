import { useEffect, useState } from "react";
import axios from "axios";
import FilterBox from "../filterBox/filterBox";
import SideBarMenu from "../sideMenu/sideBar";
import styles from "./commanBlock.module.css";
import Live from "../../assets/liveDashboard-icon-png.png";
import fourStepIcon from "../../assets/FourStep-dashboardIcon-png.png";
import sixStepIcon from "../../assets/sixStep-dashboardIcon-png.png";
import VideocamOffTwoToneIcon from "@mui/icons-material/VideocamOffTwoTone";
import KeyboardDoubleArrowLeftSharpIcon from "@mui/icons-material/KeyboardDoubleArrowLeftSharp";
import CloseIcon from "@mui/icons-material/Close";
import { useAuth } from "../../Hooks/useAuth";

interface Camera {
  camera_url: string | undefined;
  name: string;
  location_id: string;
  status: string;
}

function CommonBlock() {
  const [columns, setColumns] = useState(2);
  const [columnSize, setColumnSize] = useState("medium");
  const [cameraData, setCameraData] = useState<Camera[]>([]);
  const [filteredCameras, setFilteredCameras] = useState<Camera[]>([]);
  const [selectedBlock, setSelectedBlock] = useState<number | null>(null);
  const [expandedBlockId, setExpandedBlockId] = useState<number | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  // const [selectedImage, setSelectedImage] = useState<number | null>(null);
  // const [imageColors, setImageColors] = useState<string[]>(["", ""]);
  const [activeImage, setActiveImage] = useState<number | null>(null);

  const { setOnlineDeviceCount, setTotalDeviceCount } = useAuth();

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchCameraData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/config/cameras`);
        const cameraList = response?.data;
        setCameraData(cameraList);
        setFilteredCameras(cameraList);

        const totalDevices = cameraList.length;
        const onlineDevices = cameraList.filter(
          (cam: Camera) =>
            (cam.camera_url && cam.status === "online") ||
            cam.status === "Network issue or unable to load feed"
        );

        setOnlineDeviceCount(onlineDevices.length);
        setTotalDeviceCount(totalDevices);
      } catch (error) {
        console.error("Error fetching camera data:", error.message);
      }
    };
    fetchCameraData();
  }, [setOnlineDeviceCount, setTotalDeviceCount]);

  const handleIconClick = (
    index: number,
    columnsCount: number,
    size: string
  ) => {
    setColumns(columnsCount);
    setColumnSize(size);
    setActiveImage(activeImage === index ? null : index);
    // setSelectedImage(index);
    // setImageColors((prev) =>
    //   prev.map((color, i) => (i === index ? "#FF914D" : ""))
    // );
  };

  const getColumnWidth = () => {
    switch (columnSize) {
      case "small":
        return "100%";
      case "medium":
        return "100%";
      case "large":
        return "100%";
      default:
        // return "100%";
        return "50%";
    }
  };

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setColumns(1);
      setColumnSize("large");
    } else {
      setColumns(2);
      setColumnSize("medium");
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleBlockClick = (index: number) => {
    if (expandedBlockId === selectedBlock) {
      setSelectedBlock(index === selectedBlock ? null : index);
    }
  };

  const handleBlockDoubleClick = (index: number) => {
    if (expandedBlockId === index) {
      setExpandedBlockId(null);
    } else {
      setExpandedBlockId(index);
    }
    setSelectedBlock(null);
  };

  // const handleBlockDoubleClick = (index: number) => {
  //   setExpandedBlockId(expandedBlockId === index ? null : index);
  //   setSelectedBlock(null);
  // };
  const handleLocationSelect = (locationId: string) => {
    setSelectedLocation(locationId);
    if (locationId) {
      setFilteredCameras(
        cameraData.filter((cam) => cam.location_id === locationId)
      );
    } else {
      setFilteredCameras(cameraData);
    }
  };
  const handleCloseIconClick = () => {
    setSelectedBlock(null);
  };
  const handleBackButtonClick = () => {
    setExpandedBlockId(null);
  };

  return (
    <div className={`container-fluid ${styles.maincontainer}`}>
      {expandedBlockId === null && <SideBarMenu />}
      <div className={`row ${styles.flexRowContainer}`}>
        {expandedBlockId === null && (
          <div className={`col-12 col-md-4 ${styles.filterBoxContainer}`}>
            <FilterBox onLocationSelect={handleLocationSelect} />
          </div>
        )}
        <div
          className={`col-12 col-md-6 col-lg ${styles.iconAndBlocksContainer}`}
        >
          {expandedBlockId === null && (
            <div
              className={`d-flex justify-content-between ${styles.iconContainer}`}
            >
              <div className={styles.iconWrapper}>
                <img src={Live} alt="Live" className={styles.Liveicon} />
                <h1 style={{ marginTop: "10px" }}>Live</h1>
              </div>
              <div className={styles.iconGroup}>
                <img
                  src={fourStepIcon}
                  alt="Four Step"
                  className={`${styles.icon} ${
                    activeImage === 0 ? styles.active : ""
                  }`}
                  onClick={() => handleIconClick(0, 2, "medium")}
                  // style={{
                  //   filter: imageColors[0] ? "none" : "grayscale(100%)",
                  //   color: imageColors[0] || "transparent",
                  // }}
                />
                <img
                  src={sixStepIcon}
                  alt="Six Step"
                  className={`${styles.icon} ${
                    activeImage === 1 ? styles.active : ""
                  }`}
                  onClick={() => handleIconClick(1, 3, "small")}
                  // style={{
                  //   filter: imageColors[1] ? "none" : "grayscale(100%)",
                  //   backgroundColor: imageColors[1] || "transparent",
                  // }}
                />
              </div>
            </div>
          )}

          <div
            className={`${styles.blocksContainer} ${
              columns === 1 ? styles.singleBlockContainer : ""
            }`}
            style={{
              gridTemplateColumns: expandedBlockId
                ? "1fr"
                : `repeat(${columns}, 1fr)`,
            }}
          >
            {filteredCameras.map((cam, index) => (
              <div
                key={index}
                className={`${styles.block} ${
                  selectedBlock === index ? styles.enlargedBlock : ""
                } ${expandedBlockId === index ? styles.fullScreenBlock : ""}`}
                style={{
                  width:
                    expandedBlockId === index
                      ? "100%"
                      : selectedBlock === index
                      ? "100%"
                      : getColumnWidth(),
                  height:
                    expandedBlockId === index
                      ? "100vh"
                      : selectedBlock === index
                      ? "70vh"
                      : "35vh",
                  cursor: "pointer",
                  padding: "0",
                  position: expandedBlockId === index ? "fixed" : "relative",
                  top: expandedBlockId === index ? 0 : "auto",
                  left: expandedBlockId === index ? 0 : "auto",
                  zIndex: expandedBlockId === index ? 9999 : 1,
                  display:
                    (selectedBlock !== null && selectedBlock !== index) ||
                    (expandedBlockId !== null && expandedBlockId !== index)
                      ? "none"
                      : "block",
                }}
                onClick={() => handleBlockClick(index)}
                onDoubleClick={() => handleBlockDoubleClick(index)}
              >
                {selectedBlock === index && expandedBlockId === null && (
                  <button
                    className={styles.closeButton}
                    onClick={handleCloseIconClick}
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      zIndex: 10000,
                      background: "rgba(0, 0, 0, 0.6)",
                      backdropFilter: "blur(5px)",
                      border: "none",
                      cursor: "pointer",
                      borderRadius: "50%",
                      padding: "8px",
                    }}
                  >
                    <CloseIcon style={{ fontSize: "30px", color: "white" }} />
                  </button>
                )}
                {expandedBlockId === index && (
                  <button
                    className={styles.returnButton}
                    onClick={handleBackButtonClick}
                    style={{
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                      backgroundColor: "#ffffff61",
                      zIndex: 10000,
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <KeyboardDoubleArrowLeftSharpIcon
                      style={{ fontSize: "30px", color: "white" }}
                    />
                  </button>
                )}
                {cam.camera_url ? (
                  <img
                    className={styles.LiveData}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "4px",
                    }}
                    src={cam.camera_url}
                    alt={cam.name}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.nextSibling.style.display = "block";
                    }}
                  />
                ) : (
                  <div className={styles.errorMessage}>No data available</div>
                )}

                <div
                  className={styles.noDataMessage}
                  style={{ display: "none" }}
                >
                  <div className={styles.networkissue}>
                    <VideocamOffTwoToneIcon style={{ fontSize: 50 }} />
                    <span>Network issue or unable to load feed</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommonBlock;
