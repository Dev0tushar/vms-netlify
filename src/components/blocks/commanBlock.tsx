// import  { useState } from "react";
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

//   const handleIconClick = (icon) => {
//     setActiveIcon(icon);
//     // You can add logic here for additional actions based on the icon clicked
//   };

//   return (
//     <>
//       <Navbar />
//       <div style={{ display: "flex" }}>
//         <SideBarMenu />

//         <div className={styles.container}>
//           <div style={{ position: "fixed", left: "70px", top: "80px" }}>
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
//               top: "200px",
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


import { useState } from "react";
import FilterBox from "../filterBox/filterBox";
import SideBarMenu from "../sideMenu/sideBar";
import styles from "./commanBlock.module.css";
import Navbar from "../navbar/navbar";
import liveIcon from "../../assets/liveDashboard-icon-png.png";
import fourStepIcon from "../../assets/FourStep-dashboardIcon-png.png";
import sixStepIcon from "../../assets/sixStep-dashboardIcon-png.png";
import twoStepIcon from "../../assets/TwoStep-dashboardIcon-png.png";

function BlockData() {
  const [activeIcon, setActiveIcon] = useState("fourStep"); 

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

  const handleIconClick = (icon: string) => {
    setActiveIcon(icon);
    // You can add logic here for additional actions based on the icon clicked
  };

  return (
    <>
      <Navbar />
      <div style={{ display: "flex" }}>
        <SideBarMenu />

        <div className={styles.container}>
          <div style={{ position: "fixed", left: "70px", top: "80px" }}>
            <FilterBox nvr1Items={nvr1Items} nvr2Items={nvr2Items} />
          </div>
          <div
            style={{
              display: "block",
              marginLeft: "300px",
              marginTop: "0px",
              width: "900px",
              height: "700px",
              padding: "20px",
              position: "relative",
              top: "200px",
              left: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                }}
              >
                <img src={liveIcon} alt="" width="32" height="32" />
                <div className={styles.charStyle}>Live</div>
              </div>
              <div className={styles.titleNameIconSecondBox}>
                <div className={styles.tileIconBox}>
                  <img
                    src={fourStepIcon}
                    alt=""
                    width="33"
                    height="33"
                    onClick={() => handleIconClick("fourStep")}
                  />
                </div>
                <div className={styles.tileIconBox}>
                  <img
                    src={sixStepIcon}
                    alt=""
                    width="33"
                    height="33"
                    onClick={() => handleIconClick("sixStep")}
                  />
                </div>
                <div className={styles.tileIconBox}>
                  <img
                    src={twoStepIcon}
                    alt=""
                    width="33"
                    height="33"
                    onClick={() => handleIconClick("twoStep")}
                  />
                </div>
              </div>
            </div>
            <div>
              {activeIcon === "fourStep" && (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "400px 400px",
                    rowGap: "20px",
                    columnGap: "20px",
                    margin: "20px",
                  }}
                >
                  {blocks.map((block) => (
                    <div className={styles.containerBlock} key={block.id}>
                      <div className={styles.boxContent}>{block.title}</div>
                    </div>
                  ))}
                </div>
              )}

              {activeIcon === "sixStep" && (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "300px 300px 300px",
                    rowGap: "20px",
                    columnGap: "20px",
                    margin: "25px",
                  }}
                >
                  {blocks.map((block) => (
                    <div className={styles.containerBlock2} key={block.id}>
                      <div className={styles.boxContent}>{block.title}</div>
                    </div>
                  ))}
                </div>
              )}

              {activeIcon === "twoStep" && (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "700px ",
                    rowGap: "20px",
                    columnGap: "20px",
                    margin: "25px",
                    height: "200px",
                  }}
                >
                  {blocks.map((block) => (
                    <div className={styles.containerBlock3} key={block.id}>
                      <div className={styles.boxContent}>{block.title}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlockData;
