import React from "react";
import styles from "./EditScreen.module.css";
import closeIcon from "../../../assets/CrossIcon.png";

const EditForm: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <div className={styles.formHeader}>
          <h2>Edit</h2>
          <button className={styles.closeButton}>
            <img src={closeIcon} alt="Close" />
          </button>
        </div>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Group</label>
            <input type="text" id="name" name="name" placeholder="Parking" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="igrp">Camera</label>
            <input type="text" id="igrp" name="igrp" placeholder="Cam1" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="ipDomain">Ai Model</label>
            <input
              type="text"
              id="ipDomain"
              name="ipDomain"
              placeholder="LPR"
            />
          </div>
          <button type="submit" className={styles.updateButton}>
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditForm;




// import React from "react";
// import styles from "./EditScreen.module.css";
// import closeIcon from "../../../assets/CrossIcon.png";

// const EditForm: React.FC = () => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.headerWrapper}>
//         <h2 className={styles.editTitle}>Edit</h2>
//         <button className={styles.closeButton}>
//           <img src={closeIcon} alt="Close" />
//         </button>
//       </div>
//       <div className={styles.formWrapper}>
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

