// import { useState, useEffect } from "react";
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
//     { id: "1", title: "CAM 01" },
//     { id: "2", title: "CAM 02" },
//     { id: "3", title: "CAM 03" },
//     { id: "4", title: "CAM 04" },
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
//         return "";
//       // return "70%";
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
//     <div className={styles.maincontainer}>
//       <SideBarMenu />
//       <div className={styles.flexRowContainer}>
//         <div className={styles.filterBoxContainer}>
//           <FilterBox
//             filterOptions="These are additional filter options"
//             nvr1Items={nvr1Items}
//             nvr2Items={nvr2Items}
//             showCalendar={true}
//           />
//         </div>
//         <div className={styles.iconAndBlocksContainer}>
//           <div className={styles.iconContainer}>
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
//                 onClick={() => handleIconClick(1, "large")}
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
//                 style={{ width: getColumnWidth(), height:"40vh" }}

//                 key={block.id}
//               >
//                 <div className={styles.blockContent}>
//                   <img
//                     src={playback}
//                     alt="Video Play Icon"
//                     className={styles.playIcon}
//                   />
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

import { useState, useEffect } from "react";
import FilterBox from "../../filterBox/filterBox";
import SideBarMenu from "../../sideMenu/sideBar";
import styles from "./PlayBackScreen.module.css";
import playback from "../../../assets/PlayBack-Icon.png";
import fourStepIcon from "../../../assets/FourStep-dashboardIcon-png.png";
import sixStepIcon from "../../../assets/sixStep-dashboardIcon-png.png";
import twoStepIcon from "../../../assets/TwoStep-dashboardIcon-png.png";

function Playback() {
  const [columns, setColumns] = useState(2); // Default to 2 columns
  const [columnSize, setColumnSize] = useState("medium"); // Default column size

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
    { id: "1", title: "CAM 01" },
    { id: "2", title: "CAM 02" },
    { id: "3", title: "CAM 03" },
    { id: "4", title: "CAM 04" },
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
          />
        </div>
        <div className={`col-12  ${styles.iconAndBlocksContainer}`}>
          <div
            className={`d-flex justify-content-between ${styles.iconContainer}`}
          >
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
                onClick={() => handleIconClick(2, "medium")}
              />
              <img
                src={sixStepIcon}
                alt="6 Step Icon"
                className={styles.icon}
                onClick={() => handleIconClick(3, "small")}
              />
              <img
                src={twoStepIcon}
                alt="2 Step Icon"
                className={styles.icon}
                onClick={() => handleIconClick(1, "large")}
              />
            </div>
          </div>
          <div
            className={`${styles.blocksContainer} ${
              columns === 1 ? styles.singleBlockContainer : ""
            }`}
            style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
          >
            {blocks.map((block) => (
              <div
                className={styles.block}
                style={{ width: getColumnWidth(), height: "35vh" }}
                key={block.id}
              >
                <div className={styles.blockContent}>
                  <img
                    src={playback}
                    alt="Video Play Icon"
                    className={styles.playIcon}
                  />
                  <div className={styles.blockTitle}>{block.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Playback;
