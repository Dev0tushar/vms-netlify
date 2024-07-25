// import FilterBox from "../../filterBox/filterBox";
// import SideBarMenu from "../../sideMenu/sideBar";
// import styles from "./PlayBackScreen.module.css";
// import liveIcon from "../../../assets/PlayBack-Icon.png";
// import fourStepIcon from "../../../assets/FourStep-dashboardIcon-png.png";
// import sixStepIcon from "../../../assets/sixStep-dashboardIcon-png.png";
// import twoStepIcon from "../../../assets/TwoStep-dashboardIcon-png.png";

// function PlayBackScreen() {
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
//       title: "CAM 01",
//     },
//     {
//       id: "2",
//       title: "CAM 02",
//     },
//     {
//       id: "3",
//       title: "CAM 03",
//     },
//     {
//       id: "4",
//       title: "CAM 04",
//     },
//   ];

//   return (
//     <>
//       <div style={{ display: "flex" }}>
//         <SideBarMenu />

//         <div className={styles.container}>
//           {/* <div><FilterBox nvr2Items={nvr2Items}  /></div> */}
//           <div>
//             <FilterBox nvr1Items={nvr1Items} nvr2Items={nvr2Items} />
//           </div>

//           <div>
//             <div className={styles.titleNameIconOuterBox}>
//               <div className={styles.titleNameIconBox}>
//                 <img src={liveIcon} alt="" width="32" height="32" />
//                 <div className={styles.charStyle}>Play Back</div>
//               </div>

//               <div className={styles.titleNameIconSecondBox}>
//                 <div className={styles.tileIconBox}>
//                   <img src={fourStepIcon} alt="" width="33" height="33" />
//                 </div>
//                 <div className={styles.tileIconBox}>
//                   <img src={sixStepIcon} alt="" width="32" height="33" />
//                 </div>
//                 <div className={styles.tileIconBox}>
//                   <img src={twoStepIcon} alt="" width="33" height="33" />
//                 </div>
//               </div>
//             </div>
//             <div className={styles.outerBlock}>
//               {blocks.map((block) => (
//                 <div className={styles.containerBlock} key={block.id}>
//                   <div className={styles.boxContent}>{block.title}  </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default PlayBackScreen;

import FilterBox from "../../filterBox/filterBox";
import SideBarMenu from "../../sideMenu/sideBar";
import styles from "./PlayBackScreen.module.css";
import liveIcon from "../../../assets/PlayBack-Icon.png";
import fourStepIcon from "../../../assets/FourStep-dashboardIcon-png.png";
import sixStepIcon from "../../../assets/sixStep-dashboardIcon-png.png";
import twoStepIcon from "../../../assets/TwoStep-dashboardIcon-png.png";
import VideoPlayIcon from "../../../assets/videoPlay-Icon.png";

function PlayBackScreen() {
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
    {
      id: "1",
      title: "CAM 01",
    },
    {
      id: "2",
      title: "CAM 02",
    },
    {
      id: "3",
      title: "CAM 03",
    },
    {
      id: "4",
      title: "CAM 04",
    },
  ];

  return (
    <div style={{ display: "flex" }}>
      <SideBarMenu />
      {/* <FilterBox nvr1Items={nvr1Items} nvr2Items={nvr2Items} /> */}
      <div className={styles.container}>
        <FilterBox nvr1Items={nvr1Items} nvr2Items={nvr2Items} />
        <div>
          <div className={styles.titleNameIconOuterBox}>
            <div className={styles.titleNameIconBox}>
              <img src={liveIcon} alt="" width="32" height="32" />
              <div className={styles.charStyle}>Play Back</div>
            </div>

            <div className={styles.titleNameIconSecondBox}>
              <div className={styles.tileIconBox}>
                <img src={fourStepIcon} alt="" width="33" height="33" />
              </div>
              <div className={styles.tileIconBox}>
                <img src={sixStepIcon} alt="" width="32" height="33" />
              </div>
              <div className={styles.tileIconBox}>
                <img src={twoStepIcon} alt="" width="33" height="33" />
              </div>
            </div>
          </div>
          <div className={styles.outerBlock}>
            {blocks.map((block, index) => (
              <div className={styles.containerBlock} key={block.id}>
                <div className={styles.iconContainer}>
                  <img
                    src={VideoPlayIcon}
                    alt="Video Play Icon"
                    className={styles.videoPlayIcon}
                  />
                  {index === 1 && (
                    <img
                      src="https://img.freepik.com/premium-photo/cctv-tool-car-parking-background-equipment-security-systems-have-copy-space-design_35956-3672.jpg"
                      alt="Specific for CAM 02"
                      className={styles.yourImageClass}
                    />
                  )}
                </div>
                <div className={styles.boxContent}>{block.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayBackScreen;
