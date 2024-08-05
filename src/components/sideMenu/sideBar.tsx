// import { useState } from "react";
// import { Link } from "react-router-dom";
// import styles from "./sideBar.module.css";
// import liveView from "../../assets/liveview-sidebar-png.png";
// import playBack from "../../assets/playback-sidebar-png.png";
// import report from "../../assets/report-sidebar-png.png";
// import alert from "../../assets/alert-sidebar-png.png";
// import device from "../../assets/Device-sidebar-png.png";
// import Ai from "../../assets/aiConfiguration.png"

// interface Image {
//   src: string;
//   alt: string;
//   link: string;
// }

// const images: Image[] = [
//   { src: liveView, alt: "Live View", link: "/liveview" },
//   { src: playBack, alt: "Play Back", link: "/playback" },
//   { src: report, alt: "Report", link: "/reportChart-Screen" },
//   { src: alert, alt: "Alert", link: "/alert" },
//   { src: device, alt: "Device", link: "/device-config" },
//   { src: Ai, alt: "AI", link: "/ai-config" },
// ];

// const SideBarMenu: React.FC = () => {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);

//   const handleClick = (index: number) => {
//     setActiveIndex(index);
//   };

//   return (
//     <div className={styles.container}>
//       {images.map((image, index) => (
//         <div
//           key={index}
//           className={styles.columnContainer}
//           onClick={() => handleClick(index)}
//         >
//           <Link to={image.link}>
//             <img
//               src={image.src}
//               className={`${styles.image} ${activeIndex === index ? styles.active : ""}`}
//               alt={image.alt}
//             />
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SideBarMenu;

import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./sideBar.module.css";
import Live from "../../assets/liveDashboard-icon-png.png";
import playback from "../../assets/PlayBack-Icon.png";
import Report from "../../assets/ReportIcon.png";
import Alert from "../../assets/alertdashboard-icon.png";
import Device from "../../assets/AddDevice-sidebar(2).png";
import Ai from "../../assets/ai2-sidebar-png-output.png";

const SideBarMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.hamburger} onClick={toggleMenu}>
        {isOpen ? "✖" : "☰"}
      </div>
      <div className={styles.mainContainer}>
        <div className={`${styles.container} ${isOpen ? styles.open : ""}`}>
          <div className={styles.columnContainer}>
            <Link to="/liveview">
              <img src={Live} className={styles.image} alt="Live View" />
            </Link>
            <p>Live view</p>
          </div>
          <div className={styles.columnContainer}>
            <Link to="/Playback">
              <img src={playback} className={styles.image} alt="Play Back" />
            </Link>
            <p>Playback</p>
          </div>
          <div className={styles.columnContainer}>
            <Link to="/reportChart-Screen">
              <img src={Report} className={styles.image} alt="Report" />
            </Link>
            <p> Report</p>
          </div>
          <div className={styles.columnContainer}>
            <Link to="/alert">
              <img src={Alert} className={styles.image} alt="Alert" />
            </Link>
            <p>Alert</p>
          </div>
          <div className={styles.columnContainer}>
            <Link to="/device-config">
              <img src={Device} className={styles.image} alt="Device" />
            </Link>
            <p>Device</p>
          </div>
          <div className={styles.columnContainer}>
            <Link to="/ai-config">
              <img src={Ai} className={styles.image} alt="AI" />
            </Link>
            <p>AI</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBarMenu;
