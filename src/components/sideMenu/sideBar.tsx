

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./sideBar.module.css";
import Live from "../../assets/liveDashboard-icon-png.png";
import playback from "../../assets/PlayBack-Icon.png";
import Report from "../../assets/ReportIcon.png";
import alert2 from "../../assets/alertdashboard-icon.png";
import Device from "../../assets/Camera-png.png";
import Ai from "../../assets/ai2-sidebar-png-output.png";

const SideBarMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getLinkStyle = (path: string) => ({
    color: location.pathname === path ? "#FF914D" : "black",
    textDecoration: "none",
  });

  return (
    <>
      <div className={styles.hamburger} onClick={toggleMenu}>
        {isOpen ? "✖" : "☰"}
      </div>
      <div className={`${styles.container} ${isOpen ? styles.open : ""}`}>
        <div className={styles.columnContainer}>
          <Link
            to="/liveview"
            style={getLinkStyle("/liveview")}
            className={styles.link}
          >
            <img src={Live} className={styles.image} alt="Live View" />
            <p>Live view</p>
          </Link>
        </div>
        <div className={styles.columnContainer}>
          <Link
            to="/Playback"
            style={getLinkStyle("/Playback")}
            className={styles.link}
          >
            <img src={playback} className={styles.image} alt="Play Back" />
            <p>Playback</p>
          </Link>
        </div>
        <div className={styles.columnContainer}>
          <Link
            to="/reportChart-Screen"
            style={getLinkStyle("/reportChart-Screen")}
            className={styles.link}
          >
            <img src={Report} className={styles.image} alt="Report" />
            <p>Report</p>
          </Link>
        </div>
        <div className={styles.columnContainer}>
          <Link
            to="/alert"
            style={getLinkStyle("/alert")}
            className={styles.link}
          >
            <img
              style={{
                width: "100%",
              }}
              src={alert2}
              className={styles.image}
              alt="Alert"
            />
            <p>Alert</p>
          </Link>
        </div>
        <div className={styles.columnContainer}>
          <Link
            to="/device-config"
            style={getLinkStyle("/device-config")}
            className={styles.link}
          >
            <img src={Device} className={styles.image} alt="Device" />
            <p>Device</p>
          </Link>
        </div>
        <div className={styles.columnContainer}>
          <Link
            to="/ai-config"
            style={getLinkStyle("/ai-config")}
            className={styles.link}
          >
            <img src={Ai} className={styles.image} alt="AI" />
            <p>AI</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SideBarMenu;
