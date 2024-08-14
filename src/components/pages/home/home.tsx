// import { Link } from "react-router-dom";
// import liveIcon from "../../../assets/liveIcon.svg";
// import playIcon from "../../../assets/playIcon.svg";
// import vectorIcon from "../../../assets/vectorIcon.svg";
// import engine_warningIcon from "../../../assets/engine_workingIcon.svg";
// import styles from "./home.module.css";

// function Home() {
//   const operation_arr = [
//     {
//       icon: liveIcon,
//       header: "Live View",
//       link: "/liveview",
//     },
//     {
//       icon: playIcon,
//       header: "Play Back",
//       link: "/playback",
//     },
//     {
//       icon: vectorIcon,
//       header: "Report",
//       link: "/reportChart-Screen",
//     },
//     {
//       icon: engine_warningIcon,
//       header: "Alert",
//       link: "/alert",
//     },
//   ];

//   const config_arr = [
//     {
//       icon: liveIcon,
//       header: "Device",
//       link: "/device-config",
//     },
//     {
//       icon: playIcon,
//       header: "AI",
//       link: "/ai-config",
//     },
//     {
//       icon: vectorIcon,
//       header: "User",
//       link: "/user",
//     },
//   ];

//   return (
//     <div className={styles.homecontainer}>
//       <div className={styles.box}>
//         <h1 className={styles.h1}>OPERATION</h1>
//         {operation_arr.map((item, index) => (
//           <div key={index} className={styles.item}>
//             <Link
//               to={item.link}
//               style={{ display: "contents", color: "black" }}
//             >
//               <img src={item.icon} alt={item.header} />
//               <span>{item.header}</span>
//             </Link>
//           </div>
//         ))}
//       </div>
//       <div className={styles.box}>
//         <h1 className={styles.h1Configuration}>CONFIGURATION</h1>
//         {config_arr.map((item, index) => (
//           <div key={index} className={styles.item}>
//             <Link
//               to={item.link}
//               style={{ display: "contents", color: "black" }}
//             >
//               <img src={item.icon} alt={item.header} />
//               <span>{item.header}</span>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Home;

// import { Link } from "react-router-dom";
// import liveIcon from "../../../assets/liveIcon.svg";
// import playIcon from "../../../assets/playIcon.svg";
// import vectorIcon from "../../../assets/vectorIcon.svg";
// import engine_warningIcon from "../../../assets/engine_workingIcon.svg";
// import Home_Device from "../../../assets/Ai-home.png";
// import Ai_Home from "../../../assets/Ai-home.png";
// import User_Home from "../../../assets/User-home.png";
// import styles from "./home.module.css";

// function Home() {
//   const operation_arr = [
//     {
//       icon: liveIcon,
//       header: "Live View",
//       route: "/liveview",
//     },
//     {
//       icon: playIcon,
//       header: "Play Back",
//       route: "/playback",
//     },
//     {
//       icon: vectorIcon,
//       header: "Report",
//       route: "/reportChart-Screen",
//     },
//     {
//       icon: engine_warningIcon,
//       header: "Alert",
//       route: "/alert",
//     },
//   ];

//   const config_arr = [
//     {
//       icon: Home_Device,
//       header: "Device",
//       route: "/device",
//     },
//     {
//       icon: Ai_Home,
//       header: "AI",
//       route: "/ai",
//     },
//     {
//       icon: User_Home,
//       header: "User",
//       route: "/user",
//     },
//   ];

//   return (
//     <div className={styles.homecontainer}>
//       <div className={styles.box}>
//         <h1 className={styles.h1}>OPERATION</h1>
//         {operation_arr.map((item, index) => (
//           <Link style={{
//             textDecoration:"none"
//           }} key={index} to={item.route} className={styles.item}>
//             <img src={item.icon} alt={item.header} />
//             <span>{item.header}</span>
//           </Link>
//         ))}
//       </div>
//       <div className={styles.box}>
//         <h1 className={styles.h1Configuration}>CONFIGURATION</h1>
//         {config_arr.map((item, index) => (
//           <Link
//           style={{textDecoration:"none"}}
//           key={index} to={item.route} className={styles.item} >
//             <img src={item.icon} alt={item.header} />
//             <span>{item.header}</span>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Home;

import { Link } from "react-router-dom";
import liveIcon from "../../../assets/liveIcon.svg";
import playIcon from "../../../assets/playIcon.svg";
import vectorIcon from "../../../assets/vectorIcon.svg";
import engine_warningIcon from "../../../assets/engine_workingIcon.svg";
import Home_Device from "../../../assets/Device-home.png";
import Ai_Home from "../../../assets/Ai-home.png";
import User_Home from "../../../assets/User-home.png";
import styles from "./home.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const operation_arr = [
    {
      icon: liveIcon,
      header: "Live View",
      route: "/liveview",
    },
    {
      icon: playIcon,
      header: "Play Back",
      route: "/playback",
    },
    {
      icon: vectorIcon,
      header: "Report",
      route: "/reportChart-Screen",
    },
    {
      icon: engine_warningIcon,
      header: "Alert",
      route: "/alert",
    },
  ];

  const config_arr = [
    {
      icon: Home_Device,
      header: "Device",
      route: "/device-config",
    },
    {
      icon: Ai_Home,
      header: "AI",
      route: "/ai-config",
    },
    {
      icon: User_Home,
      header: "User",
      route: "/user",
    },
  ];

  return (
    <div className={`container-fluid ${styles.homeContainer}`}>
      <div className={`row ${styles.contentContainer} `} style={{marginTop:"100px", marginLeft:"50px"}}>
        <h1 className={`${styles.h1} col-12 `}>OPERATION</h1>
        <div className={`${styles.boxContainer} col-12`}>
          {operation_arr.map((item, index) => (
            <Link
              key={index}
              to={item.route}
              className={`${styles.item}`}
              style={{ textDecoration: "none" }}
            >
              <img src={item.icon} alt={item.header} />
              <span>{item.header}</span>
            </Link>
          ))}
        </div>
      </div>
      <div className={`row ${styles.contentContainer} mt-4`} style={{marginLeft:"50px"}}>
        <h1 className={`${styles.h1Configuration} col-12`}>CONFIGURATION</h1>
        <div className={`${styles.boxContainer} col-12`}>
          {config_arr.map((item, index) => (
            <Link
              key={index}
              to={item.route}
              className={`${styles.item}`}
              style={{ textDecoration: "none" }}
            >
              <img src={item.icon} alt={item.header} />
              <span>{item.header}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
