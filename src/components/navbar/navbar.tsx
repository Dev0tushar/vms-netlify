import React from "react";
import styles from "./navbar.module.css";
import companyIcon from "../../assets/companyIcon.svg";
import minusIcon from "../../assets/minusIcon.svg";
import squareIcon from "../../assets/squareIcon.svg";
import circleIcon from "../../assets/circleIcon.svg";
import userImage from "../../assets/userImage.svg";



function Navbar() {

    return (
        <div className={styles.navbar_cont}>
            <div className={styles.companyDesc}>
                <img src={companyIcon} alt="companyIcon" />
                <span className={styles.companyName}>DATATUTE</span>
                <div className={styles.deviceOnlineBox}>
                    <span className={styles.deviceOnlineHeader}>Device Online</span>
                    <span className={styles.deviceOnlineValue}>09/10</span>
                </div>
            </div>
            <div className={styles.navbar_right}>
                <div className={styles.profile}>
                    <div className={styles.userName}>Abhishek Mehta</div>
                    <div className={styles.userCont}>
                        <img src={userImage} alt="" />
                    </div>
                </div>
                <div className={styles.logobar}>
                    <div className={styles.iconCont}>
                    <img className={styles.icon} src={minusIcon} alt="" />

                    </div>
                    <div className={styles.iconCont}>
                        <img className={styles.icon}  src={squareIcon} alt="" />
                    </div>
                    <div className={styles.iconCont}>
                        <img className={styles.icon}  src={circleIcon} alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar; 