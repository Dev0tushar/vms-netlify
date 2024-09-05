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








// import React, { useState, useEffect } from "react";
// import ReactPlayer from "react-player";
// import FilterBox from "../../filterBox/filterBox";
// import SideBarMenu from "../../sideMenu/sideBar";
// import VideoFetcher from "../../filterBox/VideoFetcher"; // Import the new component
// import styles from "./PlayBackScreen.module.css";
// import playback from "../../../assets/PlayBack-Icon.png";
// import fourStepIcon from "../../../assets/FourStep-dashboardIcon-png.png";
// import sixStepIcon from "../../../assets/sixStep-dashboardIcon-png.png";
// import twoStepIcon from "../../../assets/TwoStep-dashboardIcon-png.png";

// const Playback = () => {
//   const [columns, setColumns] = useState(2);
//   const [columnSize, setColumnSize] = useState("medium");
//   const [videos, setVideos] = useState<any[]>([]);
//   const [filterLocation, setFilterLocation] = useState<string>("");

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
//     { id: "1", title: "Block 1", url: "http://example.com/video1.mp4" },
//     { id: "2", title: "Block 2", url: "http://example.com/video2.mp4" },
//     { id: "3", title: "Block 3", url: "http://example.com/video3.mp4" },
//     { id: "4", title: "Block 4", url: "http://example.com/video4.mp4" },
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
//     setFilterLocation(location); // Update the state with the selected location
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
//             onFilterChange={handleFilterChange} // Pass the callback
//           />
//         </div>
//         <div className={`col-12 ${styles.iconAndBlocksContainer}`}>
//           <div className={`d-flex justify-content-between ${styles.iconContainer}`}>
//             <div className={styles.iconWrapper}>
//               <img src={playback} alt="Playback Icon" className={styles.Playicon} />
//               <h1 style={{ marginTop: "10px" }}>Playback</h1>
//             </div>
//             <div className={styles.iconGroup}>
//               <img src={fourStepIcon} alt="4 Step Icon" className={styles.icon} onClick={() => handleIconClick(2, "medium")} />
//               <img src={sixStepIcon} alt="6 Step Icon" className={styles.icon} onClick={() => handleIconClick(3, "small")} />
//               <img src={twoStepIcon} alt="2 Step Icon" className={styles.icon} onClick={() => handleIconClick(2, "large")} />
//             </div>
//           </div>
//           <div
//             className={`${styles.blocksContainer} ${columns === 1 ? styles.singleBlockContainer : ""}`}
//             style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
//           >
//             {blocks.map((block) => (
//               <div className={styles.block} style={{ width: getColumnWidth(), height: "35vh" }} key={block.id}>
//                 <div className={styles.blockContent} style={{ cursor: "pointer" }}>
//                   <ReactPlayer url={block.url} width="100%" height="100%" controls />
//                   <div className={styles.blockTitle}>{block.title}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <VideoFetcher location={filterLocation} onVideosFetched={setVideos} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Playback;




import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import FilterBox from "../../filterBox/filterBox";
import SideBarMenu from "../../sideMenu/sideBar";
import VideoFetcher from "../../filterBox/VideoFetcher";
import styles from "./PlayBackScreen.module.css";
import playback from "../../../assets/PlayBack-Icon.png";
import fourStepIcon from "../../../assets/FourStep-dashboardIcon-png.png";
import sixStepIcon from "../../../assets/sixStep-dashboardIcon-png.png";
import twoStepIcon from "../../../assets/TwoStep-dashboardIcon-png.png";

const Playback = () => {
  const [columns, setColumns] = useState(2);
  const [columnSize, setColumnSize] = useState("medium");
  const [videos, setVideos] = useState<any[]>([]);
  const [filterLocation, setFilterLocation] = useState<string>("");
  const [activeBlockId, setActiveBlockId] = useState<string | null>(null);

  const nvr1Items = [
    { name: "CAM 01", active: true },
    { name: "CAM 02" },
    { name: "CAM 03" },
    { name: "CAM 04" },
  ];

  const nvr2Items = [
    { name: "CH 01" },
    { name: "CH 02" },
    { name: "CH 03", subItems: ["GRP 1"] },
    { name: "CH 04" },
  ];

  const blocks = [
    { id: "1", title: "Block 1", url: "http://example.com/video1.mp4" },
    { id: "2", title: "Block 2", url: "http://example.com/video2.mp4" },
    { id: "3", title: "Block 3", url: "http://example.com/video3.mp4" },
    { id: "4", title: "Block 4", url: "http://example.com/video4.mp4" },
  ];

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

  const handleFilterChange = (location: string) => {
    setFilterLocation(location);
  };

  const handleBlockClick = (blockId: string) => {
    setActiveBlockId(activeBlockId === blockId ? null : blockId);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`container-fluid ${styles.maincontainer}`}>
      <SideBarMenu />
      <div className={`row ${styles.flexRowContainer}`}>
        <div className={`col-12 col-md-4 ${styles.filterBoxContainer}`}>
          <FilterBox
            filterOptions="These are additional filter options"
            nvr1Items={nvr1Items}
            nvr2Items={nvr2Items}
            showCalendar={true}
            onFilterChange={handleFilterChange}
          />
        </div>
        <div className={`col-12 ${styles.iconAndBlocksContainer}`}>
          <div className={`d-flex justify-content-between ${styles.iconContainer}`}>
            <div className={styles.iconWrapper}>
              <img src={playback} alt="Playback Icon" className={styles.Playicon} />
              <h1 style={{ marginTop: "10px" }}>Playback</h1>
            </div>
            <div className={styles.iconGroup}>
              <img src={fourStepIcon} alt="4 Step Icon" className={styles.icon} onClick={() => handleIconClick(2, "medium")} />
              <img src={sixStepIcon} alt="6 Step Icon" className={styles.icon} onClick={() => handleIconClick(3, "small")} />
              <img src={twoStepIcon} alt="2 Step Icon" className={styles.icon} onClick={() => handleIconClick(2, "large")} />
            </div>
          </div>
          <div
            className={`${styles.blocksContainer} ${columns === 1 ? styles.singleBlockContainer : ""}`}
            style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
          >
            {blocks.map((block) => (
              <div
                key={block.id}
                className={`${styles.block} ${activeBlockId === block.id ? styles.expandedBlock : ""}`}
                style={{ width: activeBlockId === block.id ? "100%" : getColumnWidth(), height: activeBlockId === block.id ? "100%" : "35vh" }}
                onClick={() => handleBlockClick(block.id)}
              >
                <div className={styles.blockContent}>
                  <ReactPlayer url={block.url} width="100%" height="100%" controls />
                  <div className={styles.blockTitle}>{block.title}</div>
                </div>
              </div>
            ))}
          </div>
          <VideoFetcher location={filterLocation} onVideosFetched={setVideos} />
        </div>
      </div>
    </div>
  );
};

export default Playback;


// import  { useState, useEffect, useRef } from "react";
// import FilterBox from "../../filterBox/filterBox";
// import SideBarMenu from "../../sideMenu/sideBar";
// import styles from "./PlayBackScreen.module.css";
// import playback from "../../../assets/PlayBack-Icon.png";
// import fourStepIcon from "../../../assets/FourStep-dashboardIcon-png.png";
// import sixStepIcon from "../../../assets/sixStep-dashboardIcon-png.png";
// // import twoStepIcon from "../../../assets/TwoStep-dashboardIcon-png.png";
// import videojs from "video.js";
// import "video.js/dist/video-js.css";
// import Hls from "hls.js";

// function Playback() {
//   const [columns, setColumns] = useState(2);
//   const [columnSize, setColumnSize] = useState("medium"); 

//   const src = "rtsp://datatute.ddns.net:5543/live/channel0"

//   const videoRef = useRef(null);

//   useEffect(() => {
//     const video = videoRef.current;

//     if (Hls.isSupported()) {
//       const hls = new Hls();
//       hls.loadSource(src);
//       hls.attachMedia(video);
//       hls.on(Hls.Events.MANIFEST_PARSED, () => {
//         video.play();
//       });
//       return () => {
//         hls.destroy();
//       };
//     } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
//       video.src = src;
//       video.addEventListener("canplay", () => {
//         video.play();
//       });
//     }
//   }, [src]);

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
//     {
//       id: "1",
//       url: "",
//       title: "CAM 01",
//     },
//     {
//       id: "2",
//       url: "",
//       title: "CAM 02",
//     },
//     {
//       id: "3",
//       url: "",
//       title: "CAM 03",
//     },
//     {
//       id: "4",
//       url: "",
//       title: "CAM 04",
//     },
//   ];

//   // const blocks = [
//   //   {
//   //     id: "1",
//   //     title: "CAM 01",
//   //     url: "http://181.57.169.89:8080/mjpg/video.mjpg",
//   //   },
//   //   { id: "2", title: "CAM 02", url: "http://64.77.205.67/mjpg/video.mjpg" },
//   //   {
//   //     id: "3",
//   //     title: "CAM 03",
//   //     url: "http://66.76.193.12:8000/mjpg/video.mjpg",
//   //   },
//   //   {
//   //     id: "4",
//   //     title: "CAM 04",
//   //     url: "http://66.76.193.12:8000/mjpg/video.mjpg",
//   //   },
//   // ];

//   const handleIconClick = (columnsCount: any, size: any) => {
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
//     <>
//       <div className={`container-fluid ${styles.maincontainer}`}>
//         <SideBarMenu />
//         <div className={`row ${styles.flexRowContainer}`}>
//           <div className={`col-12 col-md-4 ${styles.filterBoxContainer}`}>
//             <FilterBox
//               filterOptions="These are additional filter options"
//               nvr1Items={nvr1Items}
//               nvr2Items={nvr2Items}
//               showCalendar={true}
//             />
//           </div>
//           <div className={`col-12  ${styles.iconAndBlocksContainer}`}>
//             <div
//               className={`d-flex justify-content-between ${styles.iconContainer}`}
//             >
//               <div className={styles.iconWrapper}>
//                 <img
//                   src={playback}
//                   alt="Playback Icon"
//                   className={styles.Playicon}
//                 />
//                 <h1 style={{ marginTop: "10px" }}>Playback</h1>
//               </div>
//               <div className={styles.iconGroup}>
//                 <img
//                   src={fourStepIcon}
//                   alt="4 Step Icon"
//                   className={styles.icon}
//                   onClick={() => handleIconClick(2, "medium")}
//                 />
//                 <img
//                   src={sixStepIcon}
//                   alt="6 Step Icon"
//                   className={styles.icon}
//                   onClick={() => handleIconClick(3, "small")}
//                 />
//                 {/* <img
//                 src={twoStepIcon}
//                 alt="2 Step Icon"
//                 className={styles.icon}
//                 onClick={() => handleIconClick(2, "large")}
//               /> */}
//               </div>
//             </div>

//             <div>
//               <video ref={videoRef} controls width="50%" height="20%"></video>
//             </div>
//             <div
//               className={`${styles.blocksContainer} ${
//                 columns === 1 ? styles.singleBlockContainer : ""
//               }`}
//               style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
//             >
//               {blocks.map((block) => (
//                 <div
//                   className={styles.block}
//                   style={{ width: getColumnWidth(), height: "35vh" }}
//                   key={block.id}
//                 >
//                   <div
//                     className={styles.blockContent}
//                     style={{ cursor: "pointer" }}
//                   >
//                     <img
//                       src={block.url}
//                       alt={`Video stream for ${block.title}`}
//                       style={{
//                         width: "100%",
//                         maxWidth: "100vw",
//                         height: "100%",
//                         marginTop: "-10px",
//                       }}
//                     />
//                     <div className={styles.blockTitle}>{block.title}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Playback;
