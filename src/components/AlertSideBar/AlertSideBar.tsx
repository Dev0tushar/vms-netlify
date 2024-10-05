

import React from "react";
import styles from "./AlertSideBar.module.css";
import DownloadIcon from "../../assets/dpwnloadbutton-icon.png";
import firstvideo from '../../assets/videos/peoplealert.mp4'
import secondvideo from '../../assets/videos/signalalert.mp4'

const AlertContent: React.FC = () => {
  return (
    <div className={`container ${styles.alertContainer}`}>
      <div className="row">
        <div className="col-12">
          <div className={styles.alertHeader}>
            <h2>
              Alert:{" "}
              <strong className={styles.trafficDetected}>
                Traffic Violation Detected!{" "}
              </strong>{" "}
            </h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className={styles.alertText}>
            <p>
              <strong>Location:</strong> MG Road, Bengaluru
            </p>
            <p>
              <strong>Vehicle:</strong> White Maruti Suzuki Swift (KA03AB1234)
            </p>
            <p>
              <strong>Violation:</strong> Speeding - 85 km/h (Limit: 60 km/h)
            </p>
            <p>
              <strong>Timestamp:</strong> 25-Sept-2024, 14:35
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex flex-column align-items-center">
          <div className={styles.alertImages}>
            <video
              width="100%"
              controls
              className={`img-fluid ${styles.smallImage}`}
              autoPlay
              muted
              loop
            >
              <source src={firstvideo} type="video/mp4" />
            </video>
            <video
              width="100%"
              controls
              className={`img-fluid ${styles.largeImage}`}
              autoPlay
              muted
              loop
            >
              <source src={secondvideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <button className={`btn ${styles.downloadButton}`}>
            <div className={styles.downloadButtonImg}>
              <img
                src={DownloadIcon}
                className={`img-fluid ${styles.DownloadImg}`}
                alt="Download"
                style={{
                  minHeight: "17px",
                  minWidth: "17px",
                  marginRight: "5px",
                }}
              />
              Download Media
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertContent;
