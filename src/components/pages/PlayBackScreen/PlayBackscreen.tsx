// import React, { useState, useEffect } from "react";
// import ReactPlayer from "react-player";
// import FilterBox from "../../filterBox/filterBox";
// import SideBarMenu from "../../sideMenu/sideBar";
// import styles from "./PlayBackScreen.module.css";
// import playback from "../../../assets/PlayBack-Icon.png";
// import fourStepIcon from "../../../assets/FourStep-dashboardIcon-png.png";
// import sixStepIcon from "../../../assets/sixStep-dashboardIcon-png.png";
// import twoStepIcon from "../../../assets/TwoStep-dashboardIcon-png.png";

// function Playback() {
//   const [columns, setColumns] = useState(2); // Default to 2 columns
//   const [columnSize, setColumnSize] = useState("medium"); // Default column size

//   const nvr1Items = [
//     { name: "CAM 01", active: true },
//     { name: "CAM 02" },
//     { name: "CAM 03" },
//     { name: "CAM 04" },
//   ];

//   const nvr2Items = [
//     { name: "CH 01" },
//     { name: "CH 02" },
//     { name: "CH 03", subItems: ["GRP 1"] },
//     { name: "CH 04" },
//   ];

//   const blocks = [
//     { id: "1", title: "CAM 01",
//       //  url: "http://181.57.169.89:8080/mjpg/video.mjpg"
//       },
//     { id: "2", title: "CAM 02",
//       // url: "http://181.57.169.89:8080/mjpg/video.mjpg"
//     },
//     { id: "3", title: "CAM 03",
//       // url: "http://64.77.205.67/mjpg/video.mjpg"
//     },
//     { id: "4", title: "CAM 04",
//       //  url: "http://66.76.193.12:8000/mjpg/video.mjpg"
//       },
//   ];

//   const handleIconClick = (columnsCount:any, size:any) => {
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

//   return (
//     <div className={`container-fluid ${styles.maincontainer}`}>
//       <SideBarMenu />
//       <div className={`row ${styles.flexRowContainer}`}>
//         <div className={`col-12 col-md-4 ${styles.filterBoxContainer}`}>
//           <FilterBox
//             filterOptions="These are additional filter options"
//             nvr1Items={nvr1Items}
//             nvr2Items={nvr2Items}
//             showCalendar={true}
//           />
//         </div>
//         <div className={`col-12  ${styles.iconAndBlocksContainer}`}>
//           <div
//             className={`d-flex justify-content-between ${styles.iconContainer}`}
//           >
//             <div className={styles.iconWrapper}>
//               <img
//                 src={playback}
//                 alt="Playback Icon"
//                 className={styles.Playicon}
//               />
//               <h1 style={{ marginTop: "10px" }}>Playback</h1>
//             </div>
//             <div className={styles.iconGroup}>
//               <img
//                 src={fourStepIcon}
//                 alt="4 Step Icon"
//                 className={styles.icon}
//                 onClick={() => handleIconClick(2, "medium")}
//               />
//               <img
//                 src={sixStepIcon}
//                 alt="6 Step Icon"
//                 className={styles.icon}
//                 onClick={() => handleIconClick(3, "small")}
//               />
//               <img
//                 src={twoStepIcon}
//                 alt="2 Step Icon"
//                 className={styles.icon}
//                 onClick={() => handleIconClick(2, "large")}
//               />
//             </div>
//           </div>
//           <div
//             className={`${styles.blocksContainer} ${
//               columns === 1 ? styles.singleBlockContainer : ""
//             }`}
//             style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
//           >
//             {blocks.map((block) => (
//               <div
//                 className={styles.block}
//                 style={{ width: getColumnWidth(), height: "35vh" }}
//                 key={block.id}
//               >
//                 <div className={styles.blockContent} style={{cursor:"pointer"}}>
//                   <ReactPlayer
//                     url={block.url}
//                     width="100%"
//                     height="100%"
//                     controls
//                   />
//                   <img src="http://181.57.169.89:8080/mjpg/video.mjpg" alt=""  style={{ width:"100%",
//                     height:"100%"}}/>
//                   <div className={styles.blockTitle}>{block.title}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Playback;




// import  { useState, useEffect } from "react";
// import ReactPlayer from "react-player";
// import FilterBox from "../../filterBox/filterBox";
// import SideBarMenu from "../../sideMenu/sideBar";
// import VideoFetcher from "../../filterBox/VideoFetcher";
// import styles from "./PlayBackScreen.module.css";
// import playback from "../../../assets/PlayBack-Icon.png";
// import fourStepIcon from "../../../assets/FourStep-dashboardIcon-png.png";
// import sixStepIcon from "../../../assets/sixStep-dashboardIcon-png.png";
// // import twoStepIcon from "../../../assets/TwoStep-dashboardIcon-png.png";

// const Playback = () => {
//   const [columns, setColumns] = useState(2);
//   const [columnSize, setColumnSize] = useState("medium");
//   const [videos, setVideos] = useState<any[]>([]);
//   const [filterLocation, setFilterLocation] = useState<string>("");
//   const [activeBlockId, setActiveBlockId] = useState<string | null>(null);

//   const nvr1Items = [
//     { name: "CAM 01", active: true },
//     { name: "CAM 02" },
//     { name: "CAM 03" },
//     { name: "CAM 04" },
//   ];

//   const nvr2Items = [
//     { name: "CH 01" },
//     { name: "CH 02" },
//     { name: "CH 03", subItems: ["GRP 1"] },
//     { name: "CH 04" },
//   ];

//   const blocks = [
//     { id: "1", title: "cam 1", url: "http://181.57.169.89:8080/mjpg/video.mjpg" },
//     { id: "2", title: "cam 2", url: "http://example.com/video2.mp4" },
//     { id: "3", title: "cam 3", url: "http://example.com/video3.mp4" },
//     { id: "4", title: "cam 4", url: "http://example.com/video4.mp4" },
//   ];

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

//   const handleFilterChange = (location: string) => {
//     setFilterLocation(location);
//   };

//   const handleBlockClick = (blockId: string) => {
//     setActiveBlockId(activeBlockId === blockId ? null : blockId);
//   };

//   useEffect(() => {
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div className={`container-fluid ${styles.maincontainer}`}>
//       <SideBarMenu />
//       <div className={`row ${styles.flexRowContainer}`}>
//         <div className={`col-12 col-md-4 ${styles.filterBoxContainer}`}>
//           <FilterBox
//             filterOptions="These are additional filter options"
//             nvr1Items={nvr1Items}
//             nvr2Items={nvr2Items}
//             showCalendar={true}
//             onFilterChange={handleFilterChange}
//           />
//         </div>
//         <div className={`col-12 ${styles.iconAndBlocksContainer}`}>
//           <div
//             className={`d-flex justify-content-between ${styles.iconContainer}`}
//           >
//             <div className={styles.iconWrapper}>
//               <img
//                 src={playback}
//                 alt="Playback Icon"
//                 className={styles.Playicon}
//               />
//               <h1 style={{ marginTop: "10px" }}>Playback</h1>
//             </div>
//             <div className={styles.iconGroup}>
//               <img
//                 src={fourStepIcon}
//                 alt="4 Step Icon"
//                 className={styles.icon}
//                 onClick={() => handleIconClick(2, "medium")}
//               />
//               <img
//                 src={sixStepIcon}
//                 alt="6 Step Icon"
//                 className={styles.icon}
//                 onClick={() => handleIconClick(3, "small")}
//               />
//               {/* <img src={twoStepIcon} alt="2 Step Icon" className={styles.icon} onClick={() => handleIconClick(2, "large")} /> */}
//             </div>
//           </div>
//           <div
//             className={`${styles.blocksContainer} ${
//               columns === 1 ? styles.singleBlockContainer : ""
//             }`}
//             style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
//           >
//             {blocks.map((block) => (
//               <div
//                 key={block.id}
//                 className={`${styles.block} ${
//                   activeBlockId === block.id ? styles.expandedBlock : ""
//                 }`}
//                 style={{
//                   width: activeBlockId === block.id ? "100%" : getColumnWidth(),
//                   height: activeBlockId === block.id ? "100%" : "35vh",
//                 }}
//                 onClick={() => handleBlockClick(block.id)}
//               >
//                 <div className={styles.blockContent}>
//                   <img
//                     src={block.url}
//                     width="100%"
//                     height="100%"
//                     controls
//                   />
//                   <div className={styles.blockTitle}>{block.title}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           {/* <VideoFetcher location={filterLocation} onVideosFetched={setVideos} /> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Playback;




import { useState, useEffect } from "react";
import FilterBox from "../../filterBox/filterBox";
import SideBarMenu from "../../sideMenu/sideBar";
import VideoFetcher from "../../filterBox/VideoFetcher";
import styles from "./PlayBackScreen.module.css";
import playback from "../../../assets/PlayBack-Icon.png";
import fourStepIcon from "../../../assets/FourStep-dashboardIcon-png.png";
import sixStepIcon from "../../../assets/sixStep-dashboardIcon-png.png";
import KeyboardDoubleArrowLeftSharpIcon from '@mui/icons-material/KeyboardDoubleArrowLeftSharp';
import ReactPlayer from "react-player";

const Playback = () => {
  const [columns, setColumns] = useState(2);
  const [columnSize, setColumnSize] = useState("medium");
  // const [videos, setVideos] = useState<any[]>([]);
  const [filterLocation, setFilterLocation] = useState<string>("");
  // const [activeBlockId, setActiveBlockId] = useState<string | null>(null);
  // const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  // const [badBlocks, setBadBlocks] = useState<string[]>([]);
  const [expandedBlockId, setExpandedBlockId] = useState<string | null>(null);

  const blocks = [
    { id: "1", title: "cam 1", url: "http://181.57.169.89:8080/mjpg/video.mjpg" }, 
    { id: "2", title: "cam 2", url: "http://example.com/video2.mp4" },
    { id: "3", title: "cam 3", url: "http://example.com/video3.mp4" }, 
    { id: "4", title: "cam 4", url: "http://example.com/video4.mp4" },
  ];

  // useEffect(() => {
  //   // Detect bad blocks only once when component mounts
  //   const detectedBadBlocks = blocks
  //     .filter((block) => block.url.includes("example")) // Define bad blocks
  //     .map((block) => block.id);
  //   setBadBlocks(detectedBadBlocks);
  // }, []); // Ensure useEffect only runs once on mount

  useEffect(() => {
    const savedExpandedBlockId = sessionStorage.getItem("expandedBlockId");
    if (savedExpandedBlockId) {
      setExpandedBlockId(savedExpandedBlockId);
    }
  }, []);

  // const handleBlockDoubleClick = (blockId: string) => {
  //   if (badBlocks.includes(blockId)) {
  //     setActiveBlockId(blockId);
  //     setIsFullScreen(true);
  //   }
  // };

  const handleBlockDoubleClick = (blockId: string) => {
    setExpandedBlockId(blockId);
    sessionStorage.setItem("expandedBlockId", blockId);
  };

  // const handleReturnClick = () => {
  //   setIsFullScreen(false);
  //   setActiveBlockId(null); // Return to normal view
  // };

  const handleReturnClick = () => {
    setExpandedBlockId(null);
    sessionStorage.removeItem("expandedBlockId");
  };

  return (
    <div className={`container-fluid ${styles.maincontainer}`}>
      {/* Hide navbar and all components except the expanded block when in fullscreen */}
      {expandedBlockId === null && <SideBarMenu />}
      <div className={`row ${styles.flexRowContainer}`}>
        {expandedBlockId === null && (
          <div className={`col-12 col-md-4 ${styles.filterBoxContainer}`}>
            <FilterBox
              filterOptions="These are additional filter options"
              nvr1Items={[
                { name: "CAM 01", active: true },
                { name: "CAM 02" },
                { name: "CAM 03" },
                { name: "CAM 04" },
              ]}
              nvr2Items={[
                { name: "CH 01" },
                { name: "CH 02" },
                { name: "CH 03", subItems: ["GRP 1"] },
                { name: "CH 04" },
              ]}
              showCalendar={true}
              onFilterChange={(location) => setFilterLocation(location)}
            />
          </div>
        )}

        <div className={`col-12 ${styles.iconAndBlocksContainer}`}>
          {expandedBlockId === null && (
            <div className={`d-flex justify-content-between ${styles.iconContainer}`}>
              <div className={styles.iconWrapper}>
                <img
                  src={playback}
                  alt="Playback Icon"
                  className={styles.Playicon}
                />
                <h1 style={{ marginTop: "10px" }}>Playback</h1>
              </div>
              <div className={styles.iconGroup}>
                <img
                  src={fourStepIcon}
                  alt="4 Step Icon"
                  className={styles.icon}
                  onClick={() => setColumns(2)}
                />
                <img
                  src={sixStepIcon}
                  alt="6 Step Icon"
                  className={styles.icon}
                  onClick={() => setColumns(3)}
                />
              </div>
            </div>
          )}

          <div
            className={`${styles.blocksContainer}`}
            style={{ gridTemplateColumns: expandedBlockId ? "1fr" : `repeat(${columns}, 1fr)` }}
          >
            {blocks.map((block) => (
              <div
                key={block.id}
                className={`${styles.block} ${expandedBlockId === block.id ? styles.expandedBlock : ""}`}
                style={{
                  display: expandedBlockId && expandedBlockId !== block.id ? "none" : "block",
                  width: expandedBlockId === block.id ? "100%" : "auto",
                  height: expandedBlockId === block.id ? "100vh" : "35vh",
                  position: expandedBlockId === block.id ? "fixed" : "relative",
                  top: expandedBlockId === block.id ? 0 : "auto",
                  left: expandedBlockId === block.id ? 0 : "auto",
                  zIndex: expandedBlockId === block.id ? 9999 : "auto",
                  cursor:"pointer"
                }}
                onDoubleClick={() => handleBlockDoubleClick(block.id)}
              >
                <div className={styles.blockContent}>
                <ReactPlayer
                    url={block.url}
                    width="100%"
                    height="100%"
                    controls
                  />
                  <div className={styles.blockTitle}>{block.title}</div>
                </div>
                {/* Show return button in full-screen mode */}
                {expandedBlockId === block.id && (
                  <button
                    className={styles.returnButton}
                    onClick={handleReturnClick}
                    style={{ position: "absolute", top: "10px", left: "10px" }}
                  >
                    <KeyboardDoubleArrowLeftSharpIcon style={{marginTop:"-3px"}}/>
                    Back
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Hide VideoFetcher when in full-screen mode */}
      {expandedBlockId === null && (
        <VideoFetcher location={filterLocation} onVideosFetched={() => {}} />
      )}
    </div>
  );
};

export default Playback;
