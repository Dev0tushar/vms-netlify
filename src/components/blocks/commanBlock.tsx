

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
// }

// function CommonBlock() {
//   const [columns, setColumns] = useState(2);
//   const [columnSize, setColumnSize] = useState("medium");
//   const [cameraData, setCameraData] = useState<Camera[]>([]);
//   const [selectedBlock, setSelectedBlock] = useState<number | null>(null);

//   useEffect(() => {
//     const fetchCameraData = async () => {
//       try {
//         const response = await axios.get(
//           "http://127.0.0.1:8000/config/cameras"
//         );
//         console.log("Full API response:", response?.data);
//         setCameraData(response?.data);
//       } catch (error) {
//         console.error("Error fetching camera data:", error.message);
//       }
//     };
//     fetchCameraData();
//   }, []);

//   // const nvr1Items = [
//   //   { name: "CAM 01", active: true },
//   //   { name: "CAM 02" },
//   //   { name: "CAM 03" },
//   //   { name: "CAM 04" },
//   // ];

//   // const nvr2Items = [
//   //   { name: "CH 01" },
//   //   { name: "CH 02" },
//   //   { name: "CH 03", subItems: ["GRP 1"] },
//   //   { name: "CH 04" },
//   // ];

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

//   return (
//     <div className={`container-fluid ${styles.maincontainer}`}>
//       <SideBarMenu />
//       <div className={`row ${styles.flexRowContainer}`}>
//         <div className={`col-12 col-md-4 ${styles.filterBoxContainer}`}>
//           <FilterBox
//           //  nvr1Items={nvr1Items} nvr2Items={nvr2Items} 
//            />
//         </div>
//         <div className={styles.iconAndBlocksContainer}>
//           <div
//             className={`d-flex justify-content-between ${styles.iconContainer}`}
//           >
//             <div className={styles.iconWrapper}>
//               <img src={Live} alt="Live" className={styles.Liveicon} />
//               <h1 style={{ marginTop: "10px" }}>Live</h1>
//             </div>
//             <div className={styles.iconGroup}>
//               <img
//                 src={fourStepIcon}
//                 alt="Four Step"
//                 className={styles.icon}
//                 onClick={() => handleIconClick(2, "medium")}
//               />
//               <img
//                 src={sixStepIcon}
//                 alt="Six Step"
//                 className={styles.icon}
//                 onClick={() => handleIconClick(3, "small")}
//               />
//             </div>
//           </div>

//           <div
//             className={`${styles.blocksContainer} ${
//               columns === 1 ? styles.singleBlockContainer : ""
//             }`}
//             style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
//           >
//             {cameraData.map((cam, index) => (
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
//                     marginTop: "60px",
//                     marginLeft: "170px",
//                   }}
//                 >
//                   <div className={styles.networkissue}>
//                     <VideocamOffTwoToneIcon style={{ fontSize: 50 }} />
//                     <h2> Network issue or unable to load feed</h2>
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



import { useEffect, useState } from "react";
import axios from "axios";
import FilterBox from "../filterBox/filterBox";
import SideBarMenu from "../sideMenu/sideBar";
import styles from "./commanBlock.module.css";
import Live from "../../assets/liveIcon.svg";
import fourStepIcon from "../../assets/FourStep-dashboardIcon-png.png";
import sixStepIcon from "../../assets/sixStep-dashboardIcon-png.png";
import VideocamOffTwoToneIcon from "@mui/icons-material/VideocamOffTwoTone";

interface Camera {
  camera_url: string | undefined;
  name: string;
  location_id: string;
  // name:string;
}

function CommonBlock() {
  const [columns, setColumns] = useState(2);
  const [columnSize, setColumnSize] = useState("medium");
  const [cameraData, setCameraData] = useState<Camera[]>([]);
  const [filteredCameras, setFilteredCameras] = useState<Camera[]>([]);
  const [selectedBlock, setSelectedBlock] = useState<number | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  useEffect(() => {
    const fetchCameraData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/config/cameras"
        );
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
    if (selectedBlock === index) {
      setSelectedBlock(null);
    } else {
      setSelectedBlock(index);
    }
  };

  
  const handleLocationSelect = (locationId: string) => {
    setSelectedLocation(locationId);
    if (locationId) {
      setFilteredCameras(cameraData.filter((cam) => cam.location_id === locationId));
    } else {
      setFilteredCameras(cameraData); 
    }
  };

  return (
    <div className={`container-fluid ${styles.maincontainer}`}>
      <SideBarMenu />
      <div className={`row ${styles.flexRowContainer}`}>
        <div className={`col-12 col-md-4 ${styles.filterBoxContainer}`}>
          <FilterBox
            onLocationSelect={handleLocationSelect} // Pass the handler to FilterBox
          />
        </div>
        <div className={styles.iconAndBlocksContainer}>
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

          <div
            className={`${styles.blocksContainer} ${
              columns === 1 ? styles.singleBlockContainer : ""
            }`}
            style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
          >
            {filteredCameras.map((cam, index) => (
              <div
                key={index}
                className={`${styles.block} ${
                  selectedBlock === index ? styles.enlargedBlock : ""
                }`}
                style={{
                  width: selectedBlock === index ? "100%" : getColumnWidth(),
                  height: selectedBlock === index ? "70vh" : "35vh",
                  cursor: "pointer",
                  display:
                    selectedBlock === null || selectedBlock === index
                      ? "block"
                      : "none",
                }}
                onClick={() => handleBlockClick(index)}
              >
                {cam.camera_url ? (
                  <img
                    className={styles.LiveData}
                    style={{ width: "100%", maxWidth: "100%", height: "100%" }}
                    src={cam.camera_url}
                    alt={cam.name}
                    onError={(e) => {
                      console.log(e, "event");

                      e.currentTarget.style.display = "none";
                      e.currentTarget.nextSibling.style.display = "block";
                    }}
                  />
                ) : (
                  <div className={styles.errorMessage}>No data available</div>
                )}

                <div
                  className={styles.noDataMessage}
                  style={{
                    display: "none",
                    marginTop: "20px",
                    // marginLeft: "170px",
                  }}
                >
                  <div className={styles.networkissue}>
                    <VideocamOffTwoToneIcon style={{ fontSize: 50 }} />
                    <h2 style={{display:"flex", justifyContent:"center", alignItems:"center", fontFamily:"Poppins"}}> Network issue or unable to load feed</h2>
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
