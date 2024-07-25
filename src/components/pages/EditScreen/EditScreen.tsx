import React from "react";
import styles from "./EditScreen.module.css";
import closeIcon from "../../../assets/CrossIcon.png";

const EditForm: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <div className={styles.formHeader}>
          <h2>Add Device</h2>
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

// const FormComponent: React.FC = () => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.formWrapper}>
//         <div className={styles.formHeader}>
//           <h2 className={styles.formTitle}>Form Title</h2>
//           <button className={styles.closeButton}>
//             <img src={closeIcon} alt="Close" />
//           </button>
//         </div>
//         <form className={styles.form}>
//           <div className={styles.formGroup}>
//             <label htmlFor="input1">Input 1</label>
//             <input
//               type="text"
//               id="input1"
//               name="input1"
//               placeholder="Enter value"
//             />
//           </div>
//           <div className={styles.formGroup}>
//             <label htmlFor="input2">Input 2</label>
//             <input
//               type="text"
//               id="input2"
//               name="input2"
//               placeholder="Enter value"
//             />
//           </div>
//           <div className={styles.formGroup}>
//             <label htmlFor="input3">Input 3</label>
//             <input
//               type="text"
//               id="input3"
//               name="input3"
//               placeholder="Enter value"
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

// export default FormComponent;
