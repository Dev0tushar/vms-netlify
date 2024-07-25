import React from "react";
import { Link } from "react-router-dom";
import styles from "./sideBar.module.css";
import liveView from "../../assets/liveview-sidebar-png.png";
import playBack from "../../assets/playback-sidebar-png.png";
import report from "../../assets/report-sidebar-png.png";
import alert from "../../assets/alert-sidebar-png.png";
import device from "../../assets/Device-sidebar-png.png";
import Ai from "../../assets/Ai-sidebar-png.png";

function SideBarMenu() {
  return (
    <div className={styles.container}>
      <div className={styles.columnContainer}>
        <Link to="/liveview">
          <img src={liveView} className={styles.image} alt="Live View" />
        </Link>
      </div>
      <div className={styles.columnContainer}>
        <Link to="/playback">
          <img src={playBack} className={styles.image} alt="Play Back" />
        </Link>
      </div>
      <div className={styles.columnContainer}>
        <Link to="/reportChart-Screen">
          <img src={report} className={styles.image} alt="Report" />
        </Link>
      </div>
      <div className={styles.columnContainer}>
        <Link to="/alert">
          <img src={alert} className={styles.image} alt="Alert" />
        </Link>
      </div>
      <div className={styles.columnContainer}>
        <Link to="/device-config">
          <img src={device} className={styles.image} alt="Device" />
        </Link>
      </div>
      <div className={styles.columnContainer}>
        <Link to="/ai-config">
          <img src={Ai} className={styles.image} alt="AI" />
        </Link>
      </div>
    </div>
  );
}

export default SideBarMenu;
