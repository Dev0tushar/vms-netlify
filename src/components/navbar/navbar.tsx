// import React from "react";
import styles from "./navbar.module.css";
import companyIcon from "../../assets/companyIcon.svg";

import userImage from "../../assets/userImage.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className={styles.navbar_cont}>
      <div className={styles.companyDesc}>
        <div style={{
          display:'flex',
          alignItems:'center'
        }}>
        <img src={companyIcon} alt="companyIcon" />
        <Link to="/">
          <span className={styles.companyName}>DATATUTE</span>
        </Link>
        </div>
        <div className={styles.deviceOnlineBox}>
          <span className={styles.deviceOnlineHeader}>Device Online</span>
          <span className={styles.deviceOnlineValue}>09/10</span>
        </div>
      </div>
      <div className={styles.navbar_right}>
        <div className={styles.profile}>
          <div className={styles.userName}>Abhishek Mehta</div>
          <div className={styles.userCont}>
            <Link to="/login">
             
              <img src={userImage} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
