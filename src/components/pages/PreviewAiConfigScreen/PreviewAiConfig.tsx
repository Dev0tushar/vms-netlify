

import styles from "./PreviewAiConfig.module.css";


const PreviewScreen: React.FC = () => {
  return (
    <div className={`${styles.container} container-fluid d-flex justify-content-center `} style={{marginLeft:"80px"}}>
     
      <div className={styles.previewBox}>
        <div className={styles.previewText}>Preview</div>
        <div className={styles.imageContainer}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Bt1RXVk9-WiKyb5oDs_00tlGLdL-8SBvSg&s"
            alt="Preview"
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default PreviewScreen;
