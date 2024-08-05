// import React from "react";
// import styles from "./EditScreen.module.css";
// import closeIcon from "../../../assets/CrossIcon.png";

// const EditForm: React.FC = () => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.formWrapper}>
//         <div className={styles.formHeader}>
//           <h2>Edit</h2>
//           <button className={styles.closeButton}>
//             <img src={closeIcon} alt="Close" />
//           </button>
//         </div>
//         <form className={styles.form}>
//           <div className={styles.formGroup}>
//             <label htmlFor="name">Group</label>
//             <input type="text" id="name" name="name" placeholder="Parking" />
//           </div>
//           <div className={styles.formGroup}>
//             <label htmlFor="igrp">Camera</label>
//             <input type="text" id="igrp" name="igrp" placeholder="Cam1" />
//           </div>
//           <div className={styles.formGroup}>
//             <label htmlFor="ipDomain">Ai Model</label>
//             <input
//               type="text"
//               id="ipDomain"
//               name="ipDomain"
//               placeholder="LPR"
//             />
//           </div>
//           <button type="submit" className={styles.updateButton}>
//             Update
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditForm;

// import React from "react";
import styles from "./EditScreen.module.css";
import closeIcon from "../../../assets/CrossIcon.png";

const EditForm: React.FC = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className={`${styles.formWrapper} card p-4 shadow-lg`}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className={styles.headerText}>EDIT</h2>
          <button className={styles.closeButton}>
            <img src={closeIcon} alt="Close" className={styles.closeIcon} />
          </button>
        </div>
        <form className={`${styles.MainForm}needs-validation`} noValidate>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Group
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`${styles.inputs} form-control`}
              placeholder="Parking"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="igrp" className="form-label">
              Camera
            </label>
            <input
              type="text"
              id="igrp"
              name="igrp"
              className={`${styles.inputs} form-control`}
              placeholder="Cam1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="ipDomain" className="form-label">
              Ai Model
            </label>
            <input
              type="text"
              id="ipDomain"
              name="ipDomain"
              className={`${styles.inputs} form-control`}
              placeholder="LPR"
            />
          </div>
          
          <button
            type="submit"
            className={`${styles.updateButton} btn  w-50 mx-auto d-block`}
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditForm;
