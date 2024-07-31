// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import styles from "./sideBar.module.css";
// import liveView from "../../assets/liveview-sidebar-png.png";
// import playBack from "../../assets/playback-sidebar-png.png";
// import report from "../../assets/report-sidebar-png.png";
// import alert from "../../assets/alert-sidebar-png.png";
// import device from "../../assets/Device-sidebar-png.png";
// import Ai from "../../assets/aiConfiguration.png";

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
//   const location = useLocation();

//   useEffect(() => {
//     setActiveIndex(null);
//   }, [location]);

//   const handleClick = (index: number) => {
//     setActiveIndex(index);
//   };

//   return (
//     <div className={styles.container}>
//       {images.map((image, index) => (
//         <div
//           key={index}
//           className={`${styles.columnContainer} ${activeIndex === index ? styles.active : ""}`}
//           onClick={() => handleClick(index)}
//         >
//           <Link to={image.link}>
//             <img
//               src={image.src}
//               className={`${styles.image} ${activeIndex === index ? styles.activeImage : ""}`}
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
import { Link, useLocation } from "react-router-dom";
import styles from "./sideBar.module.css";
import liveView from "../../assets/liveview-sidebar-png.png";
import playBack from "../../assets/playback-sidebar-png.png";
import report from "../../assets/report-sidebar-png.png";
import alert from "../../assets/alert-sidebar-png.png";
import device from "../../assets/Device-sidebar-png.png";
import Ai from "../../assets/aiConfiguration.png"

interface Image {
  src: string;
  alt: string;
  link: string;
}

const images: Image[] = [
  { src: liveView, alt: "Live View", link: "/liveview" },
  { src: playBack, alt: "Play Back", link: "/playback" },
  { src: report, alt: "Report", link: "/reportChart-Screen" },
  { src: alert, alt: "Alert", link: "/alert" },
  { src: device, alt: "Device", link: "/device-config" },
  { src: Ai, alt: "AI", link: "/ai-config" },
];

const SideBarMenu: React.FC = () => {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className={styles.container}>
      {images.map((image, index) => (
        <div
          key={index}
          className={styles.columnContainer}
          onClick={() => handleClick(index)}
        >
          <Link to={image.link}>
            <img
              src={image.src}
              className={`${styles.image} ${activeIndex === index ? styles.active : ""}`}
              alt={image.alt}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SideBarMenu;
