// // import React from "react";
// import styles from "./AlertSideBar.module.css";
// import DownloadIcon from "../../assets/dpwnloadbutton-icon.png";

// const AlertContent: React.FC = () => {
//   return (
//     <div className={styles.alertContainer}>
//       <div className={styles.alertHeader}>
//         <h2>Alert</h2>
//       </div>
//       <div className={styles.alertText}>
//         Unknown printer took a galley of type and scrambled it to make a type
//         specimen book. It has survived not only five centuries, but also the
//         leap into electronic typesetting, remaining essentially unchanged. It
//         was popularised in the 1960s with the release of Letraset sheets
//         containing Lorem Ipsum passages...
//       </div>
//       <div className={styles.alertImages}>
//         <img
//           src="https://faceter.cam/wp-content/uploads/2021/02/1-1.jpg"
//           alt="CAM 03"
//           className={styles.smallImage}
//         />
//         <img
//           src="https://www.eclipsecctv.com/assets/images/Security-Camera-Systems-for-Shopping-Malls.jpeg"
//           alt="CAM 01"
//           className={styles.largeImage}
//         />
//       </div>
//       <button className={styles.downloadButton}>
//         <div className={styles.downloadButtonImg}>
//           <img
//             src={DownloadIcon}
//             className={styles.DownloadImg}
//             alt="Download"
//           />
//           Download Media
//         </div>
//       </button>
//     </div>
//   );
// };

// export default AlertContent;




import React from "react";
import styles from "./AlertSideBar.module.css";
import DownloadIcon from "../../assets/dpwnloadbutton-icon.png";

const AlertContent: React.FC = () => {
  return (
    <div className={`container ${styles.alertContainer}`}>
      <div className="row">
        <div className="col-12">
          <div className={styles.alertHeader}>
            <h2>Alert</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className={styles.alertText}>
            Unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged. It
            was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages...
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex flex-column align-items-center">
          <div className={styles.alertImages}>
            <img
              src="https://faceter.cam/wp-content/uploads/2021/02/1-1.jpg"
              alt="CAM 03"
              className={`img-fluid ${styles.smallImage}`}
            />
            <img
              src="https://www.eclipsecctv.com/assets/images/Security-Camera-Systems-for-Shopping-Malls.jpeg"
              alt="CAM 01"
              className={`img-fluid ${styles.largeImage}`}
            />
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
