// import FilterBox from "../../filterBox/filterBox";
// import SideBarMenu from "../../sideMenu/sideBar";
// import styles from "./PlayBackScreen.module.css";
// import liveIcon from "../../../assets/PlayBack-Icon.png";
// import fourStepIcon from "../../../assets/FourStep-dashboardIcon-png.png";
// import sixStepIcon from "../../../assets/sixStep-dashboardIcon-png.png";
// import twoStepIcon from "../../../assets/TwoStep-dashboardIcon-png.png";
// import VideoPlayIcon from "../../../assets/videoPlay-Icon.png";

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
//     < div className={styles.maincontainer}>
//       <SideBarMenu />
//       <div>
//         <div className={styles.container}>
//           <div className={styles.filterBox}>
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
//               {blocks.map((block, index) => (
//                 <div className={styles.containerBlock} key={block.id}>
//                   <div className={styles.iconContainer}>
//                     <img
//                       src={VideoPlayIcon}
//                       alt="Video Play Icon"
//                       className={styles.videoPlayIcon}
//                     />
//                     {index === 1 && (
//                       <img
//                         src="https://img.freepik.com/premium-photo/cctv-tool-car-parking-background-equipment-security-systems-have-copy-space-design_35956-3672.jpg"
//                         alt="Specific for CAM 02"
//                         className={styles.yourImageClass}
//                       />
//                     )}
//                   </div>
//                   <div className={styles.boxContent}>{block.title}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PlayBackScreen;

import { useState } from 'react';
import FilterBox from "../../filterBox/filterBox";
import SideBarMenu from "../../sideMenu/sideBar";
import styles from "./PlayBackScreen.module.css";
import playback from "../../../assets/PlayBack-Icon.png";
import fourStepIcon from "../../../assets/FourStep-dashboardIcon-png.png";
import sixStepIcon from "../../../assets/sixStep-dashboardIcon-png.png";
import twoStepIcon from "../../../assets/TwoStep-dashboardIcon-png.png";

function Playback() {
  const [columns, setColumns] = useState(2); // Default to 2 columns
  const [columnSize, setColumnSize] = useState<'small' | 'medium' | 'large'>('medium'); // Default column size

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
      title: "video",
    },
    {
      id: "2",
      title: "video",
    },
    {
      id: "3",
      title: "video",
    },
    {
      id: "4",
      title: "video",
    },
  ];

  // Function to handle icon clicks
  const handleIconClick = (columnsCount: number, size: 'small' | 'medium' | 'large') => {
    setColumns(columnsCount);
    setColumnSize(size);
  };

  // Set column width based on the size
  const getColumnWidth = () => {
    switch (columnSize) {
      case 'small':
        return '20rem';
      case 'medium':
        return '31rem';
      case 'large':
        return '40rem';
      default:
        return '31rem';
    }
  };

  // Determine the CSS class to apply based on column size
  const getColumnSizeClass = () => {
    switch (columnSize) {
      case 'small':
        return styles.smallBlocks;
      case 'medium':
        return styles.mediumBlocks;
      case 'large':
        return styles.largeBlocks;
      default:
        return '';
    }
  };

  return (
    <div className={styles.maincontainer}>
      <SideBarMenu />
      <FilterBox nvr1Items={nvr1Items} nvr2Items={nvr2Items} />
      <div className={styles.gridContainer}>
        {/* Grid area for the icons */}
        <div className={styles.iconContainer}>
          <div className={styles.iconWrapper}>
            <img src={playback} alt="" className={styles.icon} />
            <h1>Playback</h1>
          </div>
          <div className={styles.iconGroup}>
            <img 
              src={fourStepIcon} 
              alt="" 
              className={styles.icon}
              onClick={() => handleIconClick(2, 'medium')} // Set columns to 2 and size to medium
            />
            <img 
              src={sixStepIcon} 
              alt="" 
              className={styles.icon}
              onClick={() => handleIconClick(3, 'small')} // Set columns to 3 and size to small
            />
            <img 
              src={twoStepIcon} 
              alt="" 
              className={styles.icon}
              onClick={() => handleIconClick(1, 'large')} // Set columns to 1 and size to large
            />
          </div>
        </div>

        {/* Blocks */}
        <div
          className={`${styles.blocksContainer} ${columns === 1 ? styles.singleBlockContainer : ''} ${getColumnSizeClass()}`}
          style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
        >
          {blocks.map((block) => (
            <div
              className={styles.block}
              style={{ width: getColumnWidth() }}
              key={block.id}
            >
              <div>{block.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Playback;
