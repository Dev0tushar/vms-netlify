// import { useState } from "react";
// import FilterBox from "../filterBox/filterBox";
// import SideBarMenu from "../sideMenu/sideBar";
// import styles from "./commanBlock.module.css";
// import Navbar from "../navbar/navbar";
// import liveIcon from "../../assets/liveDashboard-icon-png.png";
// import fourStepIcon from "../../assets/FourStep-dashboardIcon-png.png";
// import sixStepIcon from "../../assets/sixStep-dashboardIcon-png.png";
// import twoStepIcon from "../../assets/TwoStep-dashboardIcon-png.png";

// function BlockData() {
//   const [activeIcon, setActiveIcon] = useState("fourStep");

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

//   const handleIconClick = (icon: string) => {
//     setActiveIcon(icon);
//   };

//   return (
//     <>
//       <Navbar />
//       <div style={{ display: "flex" }}>
//         <SideBarMenu />

//         <div className={styles.container}>
//           <div style={{ position: "fixed", left: "100px", top: "130px" }}>
//             <FilterBox nvr1Items={nvr1Items} nvr2Items={nvr2Items} />
//           </div>
//           <div
//             style={{
//               display: "block",
//               marginLeft: "300px",
//               marginTop: "0px",
//               width: "900px",
//               height: "700px",
//               padding: "20px",
//               position: "relative",
//               top: "150px",
//               left: "20px",
//             }}
//           >
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//               }}
//             >
//               <div
//                 style={{
//                   display: "flex",
//                 }}
//               >
//                 <img src={liveIcon} alt="" width="32" height="32" />
//                 <div className={styles.charStyle}>Live</div>
//               </div>
//               <div className={styles.titleNameIconSecondBox}>
//                 <div className={styles.tileIconBox}>
//                   <img
//                     src={fourStepIcon}
//                     alt=""
//                     width="33"
//                     height="33"
//                     onClick={() => handleIconClick("fourStep")}
//                   />
//                 </div>
//                 <div className={styles.tileIconBox}>
//                   <img
//                     src={sixStepIcon}
//                     alt=""
//                     width="33"
//                     height="33"
//                     onClick={() => handleIconClick("sixStep")}
//                   />
//                 </div>
//                 <div className={styles.tileIconBox}>
//                   <img
//                     src={twoStepIcon}
//                     alt=""
//                     width="33"
//                     height="33"
//                     onClick={() => handleIconClick("twoStep")}
//                   />
//                 </div>
//               </div>
//             </div>
//             <div>
//               {activeIcon === "fourStep" && (
//                 <div
//                   style={{
//                     display: "grid",
//                     gridTemplateColumns: "400px 400px",
//                     rowGap: "20px",
//                     columnGap: "20px",
//                     margin: "20px",
//                   }}
//                 >
//                   {blocks.map((block) => (
//                     <div className={styles.containerBlock} key={block.id}>
//                       <div className={styles.boxContent}>{block.title}</div>
//                     </div>
//                   ))}
//                 </div>
//               )}

//               {activeIcon === "sixStep" && (
//                 <div
//                   style={{
//                     display: "grid",
//                     gridTemplateColumns: "300px 300px 300px",
//                     rowGap: "20px",
//                     columnGap: "20px",
//                     margin: "25px",
//                   }}
//                 >
//                   {blocks.map((block) => (
//                     <div className={styles.containerBlock2} key={block.id}>
//                       <div className={styles.boxContent}>{block.title}</div>
//                     </div>
//                   ))}
//                 </div>
//               )}

//               {activeIcon === "twoStep" && (
//                 <div
//                   style={{
//                     display: "grid",
//                     gridTemplateColumns: "700px ",
//                     rowGap: "20px",
//                     columnGap: "20px",
//                     margin: "25px",
//                     height: "200px",
//                   }}
//                 >
//                   {blocks.map((block) => (
//                     <div className={styles.containerBlock3} key={block.id}>
//                       <div className={styles.boxContent}>{block.title}</div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default BlockData;







import { useState, useEffect } from "react";
import FilterBox from "../filterBox/filterBox";
import SideBarMenu from "../sideMenu/sideBar";
import styles from "./commanBlock.module.css";
import Live from "../../assets/liveIcon.svg";
import fourStepIcon from "../../assets/FourStep-dashboardIcon-png.png";
import sixStepIcon from "../../assets/sixStep-dashboardIcon-png.png";
import twoStepIcon from "../../assets/TwoStep-dashboardIcon-png.png";

function CommonBlock() {
  const [columns, setColumns] = useState(2);
  const [columnSize, setColumnSize] = useState("medium");

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
          
            nvr1Items={nvr1Items}
            nvr2Items={nvr2Items}
           
          />
        </div>
        <div className={`  ${styles.iconAndBlocksContainer}`}>
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
              <img
                src={twoStepIcon}
                alt="Two Step"
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
                
                 
                  <div className={styles.blockTitle}>{block.title}</div>
              
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommonBlock;
