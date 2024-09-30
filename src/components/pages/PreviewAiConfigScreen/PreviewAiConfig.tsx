import styles from "./PreviewAiConfig.module.css";

import PlaybackVideo from "../../../assets/videos/Ai_demo..mp4";

const PreviewScreen: React.FC = () => {
  return (
    <div
      className={`${styles.container} container-fluid d-flex justify-content-center `}
      style={{ marginLeft: "80px" }}
    >
      <div className={styles.previewBox}>
        <div className={styles.previewText}>Preview</div>
        <div className={styles.imageContainer}>
         
          <video width="100%" controls className={styles.image}>
            <source src={PlaybackVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default PreviewScreen;
