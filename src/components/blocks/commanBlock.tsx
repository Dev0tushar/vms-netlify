// import { useEffect, useState } from "react";
// import axios from "axios";
// import FilterBox from "../filterBox/filterBox";
// import SideBarMenu from "../sideMenu/sideBar";
// import styles from "./commanBlock.module.css";
// import Live from "../../assets/liveIcon.svg";
// import fourStepIcon from "../../assets/FourStep-dashboardIcon-png.png";
// import sixStepIcon from "../../assets/sixStep-dashboardIcon-png.png";
// import VideocamOffTwoToneIcon from "@mui/icons-material/VideocamOffTwoTone";

// interface Camera {
//   camera_url: string | undefined;
//   name: string;
//   location_id: string;
//   // status: string;
// }

// function CommonBlock() {
//   const [columns, setColumns] = useState(2);
//   const [columnSize, setColumnSize] = useState("medium");
//   const [cameraData, setCameraData] = useState<Camera[]>([]);
//   const [filteredCameras, setFilteredCameras] = useState<Camera[]>([]);
//   const [selectedBlock, setSelectedBlock] = useState<number | null>(null);
//   const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
//   const [expandedBlockId, setExpandedBlockId] = useState<string | null>(null);

//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//   useEffect(() => {
//     const fetchCameraData = async () => {
//       try {
//         const response = await axios.get(`${API_BASE_URL}/config/cameras`);

//         setCameraData(response?.data);
//         setFilteredCameras(response?.data);
//       } catch (error) {
//         console.error("Error fetching camera data:", error.message);
//       }
//     };
//     fetchCameraData();
//   }, []);

//   const handleIconClick = (columnsCount: number, size: string) => {
//     setColumns(columnsCount);
//     setColumnSize(size);
//   };

//   const getColumnWidth = () => {
//     switch (columnSize) {
//       case "small":
//         return "100%";
//       case "medium":
//         return "100%";
//       case "large":
//         return "100%";
//       default:
//         return "50%";
//     }
//   };

//   const handleResize = () => {
//     if (window.innerWidth < 768) {
//       setColumns(1);
//       setColumnSize("large");
//     } else {
//       setColumns(2);
//       setColumnSize("medium");
//     }
//   };

//   useEffect(() => {
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleBlockClick = (index: number) => {
//     if (selectedBlock === index) {
//       setSelectedBlock(null);
//     } else {
//       setSelectedBlock(index);
//     }
//   };

//   const handleLocationSelect = (locationId: string) => {
//     setSelectedLocation(locationId);
//     if (locationId) {
//       setFilteredCameras(
//         cameraData.filter((cam) => cam.location_id === locationId)
//       );
//     } else {
//       setFilteredCameras(cameraData);
//     }
//   };

//   useEffect(() => {
//     const savedExpandedBlockId = sessionStorage.getItem("expandedBlockId");
//     if (savedExpandedBlockId) {
//       setExpandedBlockId(savedExpandedBlockId);
//     }
//   }, []);

//   const handleBlockDoubleClick = (blockId: string) => {
//     setExpandedBlockId(blockId);
//     sessionStorage.setItem("expandedBlockId", blockId);
//   };

//   const handleReturnClick = () => {
//     setExpandedBlockId(null);
//     sessionStorage.removeItem("expandedBlockId");
//   };

//   return (
//     <div className={`container-fluid ${styles.maincontainer}`}>
//       {expandedBlockId === null && <SideBarMenu />}
//       <div className={`row ${styles.flexRowContainer}`}>
//         {expandedBlockId === null && (
//           <div className={`col-12 col-md-4 ${styles.filterBoxContainer}`}>
//             <FilterBox
//               onLocationSelect={handleLocationSelect}
//             />
//           </div>
//         )}
//         <div className={styles.iconAndBlocksContainer}>
//           {expandedBlockId === null && (
//             <div
//               className={`d-flex justify-content-between ${styles.iconContainer}`}
//             >
//               <div className={styles.iconWrapper}>
//                 <img src={Live} alt="Live" className={styles.Liveicon} />
//                 <h1 style={{ marginTop: "10px" }}>Live</h1>
//               </div>
//               <div className={styles.iconGroup}>
//                 <img
//                   src={fourStepIcon}
//                   alt="Four Step"
//                   className={styles.icon}
//                   onClick={() => handleIconClick(2, "medium")}
//                 />
//                 <img
//                   src={sixStepIcon}
//                   alt="Six Step"
//                   className={styles.icon}
//                   onClick={() => handleIconClick(3, "small")}
//                 />
//               </div>
//             </div>
//           )}
//           {/* <div
//             className={`${styles.blocksContainer} ${
//               columns === 1 ? styles.singleBlockContainer : ""
//             }`}
//             style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
//           > */}
//           <div
//             className={`${styles.blocksContainer} ${
//               columns === 1 ? styles.singleBlockContainer : ""
//             }`}
//             style={{
//               gridTemplateColumns: expandedBlockId
//                 ? "1fr"
//                 : `repeat(${columns}, 1fr)`,
//             }}
//           >
//             {filteredCameras.map((cam, index) => (
//               <div
//                 key={index}
//                 className={`${styles.block} ${
//                   selectedBlock === index ? styles.enlargedBlock : ""
//                 }`}
//                 style={{
//                   width: selectedBlock === index ? "100%" : getColumnWidth(),
//                   height: selectedBlock === index ? "70vh" : "35vh",
//                   cursor: "pointer",
//                   display:
//                     selectedBlock === null || selectedBlock === index
//                       ? "block"
//                       : "none",
//                 }}
//                 onClick={() => handleBlockClick(index)}
//               >
//                 {cam.camera_url ? (
//                   <img
//                     className={styles.LiveData}
//                     style={{ width: "100%", maxWidth: "100%", height: "100%" }}
//                     src={cam.camera_url}
//                     alt={cam.name}
//                     onError={(e) => {
//                       console.log(e, "event");

//                       e.currentTarget.style.display = "none";
//                       e.currentTarget.nextSibling.style.display = "block";
//                     }}
//                   />
//                 ) : (
//                   <div className={styles.errorMessage}>No data available</div>
//                 )}

//                 <div
//                   className={styles.noDataMessage}
//                   style={{
//                     display: "none",
//                     marginTop: "20px",
//                     // marginLeft: "170px",
//                   }}
//                 >
//                   <div className={styles.networkissue}>
//                     <VideocamOffTwoToneIcon style={{ fontSize: 50 }} />
//                     <h2
//                       style={{
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center",
//                         fontFamily: "Poppins",
//                       }}
//                     >
//                       {" "}
//                       Network issue or unable to load feed
//                     </h2>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CommonBlock;

// import { useEffect, useState } from "react";
// import axios from "axios";
// import FilterBox from "../filterBox/filterBox";
// import SideBarMenu from "../sideMenu/sideBar";
// import styles from "./commanBlock.module.css";
// import Live from "../../assets/liveIcon.svg";
// import fourStepIcon from "../../assets/FourStep-dashboardIcon-png.png";
// import sixStepIcon from "../../assets/sixStep-dashboardIcon-png.png";
// import VideocamOffTwoToneIcon from "@mui/icons-material/VideocamOffTwoTone";
// import KeyboardDoubleArrowLeftSharpIcon from "@mui/icons-material/KeyboardDoubleArrowLeftSharp";
// interface Camera {
//   camera_url: string | undefined;
//   name: string;
//   location_id: string;
// }

// function CommonBlock() {
//   const [columns, setColumns] = useState(2);
//   const [columnSize, setColumnSize] = useState("medium");
//   const [cameraData, setCameraData] = useState<Camera[]>([]);
//   const [filteredCameras, setFilteredCameras] = useState<Camera[]>([]);
//   const [selectedBlock, setSelectedBlock] = useState<number | null>(null);
//   const [expandedBlockId, setExpandedBlockId] = useState<number | null>(null); // For full-screen mode
//   const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//   useEffect(() => {
//     const fetchCameraData = async () => {
//       try {
//         const response = await axios.get(`${API_BASE_URL}/config/cameras`);
//         setCameraData(response?.data);
//         setFilteredCameras(response?.data);
//       } catch (error) {
//         console.error("Error fetching camera data:", error.message);
//       }
//     };
//     fetchCameraData();
//   }, []);

//   const handleIconClick = (columnsCount: number, size: string) => {
//     setColumns(columnsCount);
//     setColumnSize(size);
//   };

//   const getColumnWidth = () => {
//     switch (columnSize) {
//       case "small":
//         return "100%";
//       case "medium":
//         return "100%";
//       case "large":
//         return "100%";
//       default:
//         return "100%";
//     }
//   };

//   const handleResize = () => {
//     if (window.innerWidth < 768) {
//       setColumns(1);
//       setColumnSize("large");
//     } else {
//       setColumns(2);
//       setColumnSize("medium");
//     }
//   };

//   useEffect(() => {
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleBlockClick = (index: number) => {
//     if (selectedBlock === index) {
//       setSelectedBlock(null); // De-select block if it's already selected
//     } else {
//       setSelectedBlock(index); // Set clicked block as selected
//     }
//   };

//   const handleBlockDoubleClick = (index: number) => {
//     if (expandedBlockId === index) {
//       setExpandedBlockId(null); // Exit full screen if the same block is double-clicked again
//     } else {
//       setExpandedBlockId(index); // Expand to full screen
//     }
//   };

//   const handleLocationSelect = (locationId: string) => {
//     setSelectedLocation(locationId);
//     if (locationId) {
//       setFilteredCameras(
//         cameraData.filter((cam) => cam.location_id === locationId)
//       );
//     } else {
//       setFilteredCameras(cameraData);
//     }
//   };

//   const handleReturnClick = () => {
//     setSelectedBlock(null); // Reset selected block
//     setExpandedBlockId(null); // Exit full screen on return click
//   };

//   return (
//     <div className={`container-fluid ${styles.maincontainer}`}>
//       {expandedBlockId === null && <SideBarMenu />}
//       <div className={`row ${styles.flexRowContainer}`}>
//         {expandedBlockId === null && (
//           <div className={`col-12 col-md-4 ${styles.filterBoxContainer}`}>
//             <FilterBox onLocationSelect={handleLocationSelect} />
//           </div>
//         )}
//         <div className={styles.iconAndBlocksContainer}>
//           {expandedBlockId === null && (
//             <div
//               className={`d-flex justify-content-between ${styles.iconContainer}`}
//             >
//               <div className={styles.iconWrapper}>
//                 <img src={Live} alt="Live" className={styles.Liveicon} />
//                 <h1 style={{ marginTop: "10px" }}>Live</h1>
//               </div>
//               <div className={styles.iconGroup}>
//                 <img
//                   src={fourStepIcon}
//                   alt="Four Step"
//                   className={styles.icon}
//                   onClick={() => handleIconClick(2, "medium")}
//                 />
//                 <img
//                   src={sixStepIcon}
//                   alt="Six Step"
//                   className={styles.icon}
//                   onClick={() => handleIconClick(3, "small")}
//                 />
//               </div>
//             </div>
//           )}

//           <div
//             className={`${styles.blocksContainer} ${
//               columns === 1 ? styles.singleBlockContainer : ""
//             }`}
//             style={{
//               gridTemplateColumns: expandedBlockId
//                 ? "1fr"
//                 : `repeat(${columns}, 1fr)`,
//             }}
//           >
//             {filteredCameras.map((cam, index) => (
//               <div
//                 key={index}
//                 className={`${styles.block} ${
//                   selectedBlock === index ? styles.enlargedBlock : ""
//                 } ${expandedBlockId === index ? styles.fullScreenBlock : ""}`} // Add full screen style
//                 style={{
//                   width: expandedBlockId === index ? "100%" : "auto",
//                   height: expandedBlockId === index ? "100vh" : "35vh",
//                   cursor: "pointer",
//                   position: expandedBlockId === index ? "fixed" : "relative",
//                   top: expandedBlockId === index ? 0 : "auto",
//                   left: expandedBlockId === index ? 0 : "auto",
//                   zIndex: expandedBlockId === index ? 9999 : "auto",
//                   display:
//                     (selectedBlock !== null && selectedBlock !== index) ||
//                     (expandedBlockId !== null && expandedBlockId !== index)
//                       ? "none"
//                       : "block",
//                 }}
//                 onClick={() => handleBlockClick(index)}
//                 onDoubleClick={() => handleBlockDoubleClick(index)}
//               >
//                 {expandedBlockId !== null && (
//                   <button
//                     className={styles.returnButton}
//                     onClick={handleReturnClick}
//                     style={{ position: "absolute", top: "10px", left: "10px" }}
//                   >
//                     <KeyboardDoubleArrowLeftSharpIcon
//                       style={{ marginTop: "-3px" }}
//                     />
//                     Back
//                   </button>
//                 )}
//                 {cam.camera_url ? (
//                   <img
//                     className={styles.LiveData}
//                     style={{ width: "100%", height: "100%" }}
//                     src={cam.camera_url}
//                     alt={cam.name}
//                     onError={(e) => {
//                       e.currentTarget.style.display = "none";
//                       e.currentTarget.nextSibling.style.display = "block";
//                     }}
//                   />
//                 ) : (
//                   <div className={styles.errorMessage}>No data available</div>
//                 )}

//                 <div
//                   className={styles.noDataMessage}
//                   style={{ display: "none" }}
//                 >
//                   <div className={styles.networkissue}>
//                     <VideocamOffTwoToneIcon style={{ fontSize: 50 }} />
//                     <h2>Network issue or unable to load feed</h2>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* {(selectedBlock !== null || expandedBlockId !== null) && (
//             <button className={styles.returnButton} onClick={handleReturnClick}>
//               Return to normal view
//             </button>
//           )} */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CommonBlock;

import { useEffect, useState } from "react";
import axios from "axios";
import FilterBox from "../filterBox/filterBox";
import SideBarMenu from "../sideMenu/sideBar";
import styles from "./commanBlock.module.css";
import Live from "../../assets/liveIcon.svg";
import fourStepIcon from "../../assets/FourStep-dashboardIcon-png.png";
import sixStepIcon from "../../assets/sixStep-dashboardIcon-png.png";
import VideocamOffTwoToneIcon from "@mui/icons-material/VideocamOffTwoTone";
import KeyboardDoubleArrowLeftSharpIcon from "@mui/icons-material/KeyboardDoubleArrowLeftSharp";

interface Camera {
  camera_url: string | undefined;
  name: string;
  location_id: string;
}

function CommonBlock() {
  const [columns, setColumns] = useState(2);
  const [columnSize, setColumnSize] = useState("medium");
  const [cameraData, setCameraData] = useState<Camera[]>([]);
  const [filteredCameras, setFilteredCameras] = useState<Camera[]>([]);
  const [selectedBlock, setSelectedBlock] = useState<number | null>(null);
  const [expandedBlockId, setExpandedBlockId] = useState<number | null>(null); // For full-screen mode
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchCameraData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/config/cameras`);
        setCameraData(response?.data);
        setFilteredCameras(response?.data);
      } catch (error) {
        console.error("Error fetching camera data:", error.message);
      }
    };
    fetchCameraData();
  }, []);

  const handleIconClick = (columnsCount: number, size: string) => {
    setColumns(columnsCount);
    setColumnSize(size);
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
        return "100%";
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
    // Prevent single-click from resizing if the block is in full screen
    if (expandedBlockId !== null) {
      // You can add any other single-click actions here (e.g., showing information)
      return;
    }

    if (selectedBlock === index) {
      setSelectedBlock(null); // De-select block if it's already selected
    } else {
      setSelectedBlock(index); // Set clicked block as selected
    }
  };

  const handleBlockDoubleClick = (index: number) => {
    if (expandedBlockId === index) {
      setExpandedBlockId(null); // Exit full screen if the same block is double-clicked again
    } else {
      setExpandedBlockId(index); // Expand to full screen
    }
  };

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

  const handleReturnClick = () => {
    setSelectedBlock(null); // Reset selected block
    setExpandedBlockId(null); // Exit full screen on return click
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
        <div className={styles.iconAndBlocksContainer}>
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
                  className={styles.icon}
                  onClick={() => handleIconClick(2, "medium")}
                />
                <img
                  src={sixStepIcon}
                  alt="Six Step"
                  className={styles.icon}
                  onClick={() => handleIconClick(3, "small")}
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
                } ${expandedBlockId === index ? styles.fullScreenBlock : ""}`} // Add full screen style
                style={{
                  width: expandedBlockId === index ? "100%" : "auto",
                  height: expandedBlockId === index ? "100vh" : "35vh",
                  cursor: "pointer",
                  position: expandedBlockId === index ? "fixed" : "relative",
                  top: expandedBlockId === index ? 0 : "auto",
                  left: expandedBlockId === index ? 0 : "auto",
                  zIndex: expandedBlockId === index ? 9999 : "auto",
                  display:
                    (selectedBlock !== null && selectedBlock !== index) ||
                    (expandedBlockId !== null && expandedBlockId !== index)
                      ? "none"
                      : "block",
                }}
                onClick={() => handleBlockClick(index)}
                onDoubleClick={() => handleBlockDoubleClick(index)}
              >
                {expandedBlockId !== null && (
                  <button
                    className={styles.returnButton}
                    onClick={handleReturnClick}
                    style={{ position: "absolute", top: "10px", left: "10px" }}
                  >
                    <KeyboardDoubleArrowLeftSharpIcon
                      style={{ marginTop: "-3px" }}
                    />
                    Back
                  </button>
                )}
                {cam.camera_url ? (
                  <img
                    className={styles.LiveData}
                    style={{ width: "100%", height: "100%" }}
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
                    <h2>Network issue or unable to load feed</h2>
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
