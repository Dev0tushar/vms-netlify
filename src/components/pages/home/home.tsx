// import React from "react";
// import styles from "./home.module.css";
// import Configuration, {
//   configArrType,
// } from "../../configuration/configuration";
// import liveIcon from "../../../assets/liveIcon.svg";
// import playIcon from "../../../assets/playIcon.svg";
// import vectorIcon from "../../../assets/vectorIcon.svg";
// import engine_warningIcon from "../../../assets/engine_workingIcon.svg";
// import Navbar from "../../navbar/navbar";

// function Home() {
//   const operation_arr: configArrType[] = [
//     {
//       icon: liveIcon,
//       header: "Live View",
//     },
//     {
//       icon: playIcon,
//       header: "Play Back",
//     },
//     {
//       icon: vectorIcon,
//       header: "Report",
//     },
//     {
//       icon: engine_warningIcon,
//       header: "Alert",
//     },
//   ];

//   const config_arr: configArrType[] = [
//     {
//       icon: liveIcon,
//       header: "Device",
//     },
//     {
//       icon: playIcon,
//       header: "AI",
//     },
//     {
//       icon: vectorIcon,
//       header: "User",
//     },
//   ];

//   return (
//     <div className={styles.container}>
//       <Navbar/>
//       <div>
//         < Configuration  heading="Operation" config_arr={operation_arr} />
//         <Configuration heading="Configuration" config_arr={config_arr} />
//       </div>
//     </div>
//   );
// }

// export default Home;

import React from "react";
import liveIcon from "../../../assets/liveIcon.svg";
import playIcon from "../../../assets/playIcon.svg";
import vectorIcon from "../../../assets/vectorIcon.svg";
import engine_warningIcon from "../../../assets/engine_workingIcon.svg";
import styles from "./home.module.css";

function Home() {
  const operation_arr = [
    {
      icon: liveIcon,
      header: "Live View",
    },
    {
      icon: playIcon,
      header: "Play Back",
    },
    {
      icon: vectorIcon,
      header: "Report",
    },
    {
      icon: engine_warningIcon,
      header: "Alert",
    },
  ];

  const config_arr = [
    {
      icon: liveIcon,
      header: "Device",
    },
    {
      icon: playIcon,
      header: "AI",
    },
    {
      icon: vectorIcon,
      header: "User",
    },
  ];

  return (
    <div className={styles.homecontainer}>
      <div className={styles.box}>
        <h1 className={styles.h1}>OPERATION</h1>
        {operation_arr.map((item, index) => (
          <div key={index} className={styles.item}>
            <img src={item.icon} alt={item.header} />
            <span>{item.header}</span>
          </div>
        ))}
      </div>
      <div className={styles.box}>
        <h1 className={styles.h1Configuration}>CONFIGURATION</h1>
        {config_arr.map((item, index) => (
          <div key={index} className={styles.item}>
            <img src={item.icon} alt={item.header} />
            <span>{item.header}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;