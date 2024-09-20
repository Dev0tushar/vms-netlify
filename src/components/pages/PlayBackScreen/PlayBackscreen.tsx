import { useState, useEffect } from "react";
import FilterBox from "../../filterBox/filterBox";
import SideBarMenu from "../../sideMenu/sideBar";
import VideoFetcher from "../../filterBox/VideoFetcher";
import styles from "./PlayBackScreen.module.css";
import playback from "../../../assets/PlayBack-Icon.png";
import fourStepIcon from "../../../assets/FourStep-dashboardIcon-png.png";
import sixStepIcon from "../../../assets/sixStep-dashboardIcon-png.png";
import KeyboardDoubleArrowLeftSharpIcon from "@mui/icons-material/KeyboardDoubleArrowLeftSharp";
import ReactPlayer from "react-player";
// import PlaybackVideo from "../../../assets/video_20240918214450.mp4";

const Playback = () => {
  const [columns, setColumns] = useState(2);
  const [columnSize, setColumnSize] = useState("medium");
  // const [videos, setVideos] = useState<any[]>([]);
  const [filterLocation, setFilterLocation] = useState<string>("");
  // const [activeBlockId, setActiveBlockId] = useState<string | null>(null);
  // const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  // const [badBlocks, setBadBlocks] = useState<string[]>([]);
  const [expandedBlockId, setExpandedBlockId] = useState<string | null>(null);

  const blocks = [
    {
      id: "1",
      title: "cam 1",
      // url: "http://181.57.169.89:8080/mjpg/video.mjpg"
      // url: { PlaybackVideo },
    },
    {
      id: "2",
      title: "cam 2",
      // url: "http://example.com/video2.mp4"
      // url: { PlaybackVideo },
    },
    {
      id: "3",
      title: "cam 3",
      // url: "http://example.com/video3.mp4"
      // url: { PlaybackVideo },
    },
    { id: "4", title: "cam 4",
      //  url: { PlaybackVideo }
       },
  ];

  // useEffect(() => {
  //   // Detect bad blocks only once when component mounts
  //   const detectedBadBlocks = blocks
  //     .filter((block) => block.url.includes("example")) // Define bad blocks
  //     .map((block) => block.id);
  //   setBadBlocks(detectedBadBlocks);
  // }, []); // Ensure useEffect only runs once on mount

  useEffect(() => {
    const savedExpandedBlockId = sessionStorage.getItem("expandedBlockId");
    if (savedExpandedBlockId) {
      setExpandedBlockId(savedExpandedBlockId);
    }
  }, []);

  // const handleBlockDoubleClick = (blockId: string) => {
  //   if (badBlocks.includes(blockId)) {
  //     setActiveBlockId(blockId);
  //     setIsFullScreen(true);
  //   }
  // };

  const handleBlockDoubleClick = (blockId: string) => {
    setExpandedBlockId(blockId);
    sessionStorage.setItem("expandedBlockId", blockId);
  };

  // const handleReturnClick = () => {
  //   setIsFullScreen(false);
  //   setActiveBlockId(null); // Return to normal view
  // };

  const handleReturnClick = () => {
    setExpandedBlockId(null);
    sessionStorage.removeItem("expandedBlockId");
  };

  return (
    <div className={`container-fluid ${styles.maincontainer}`}>
  
      {expandedBlockId === null && <SideBarMenu />}
      <div className={`row ${styles.flexRowContainer}`}>
        {expandedBlockId === null && (
          <div className={`col-12 col-md-4 ${styles.filterBoxContainer}`}>
            <FilterBox
              filterOptions="These are additional filter options"
              nvr1Items={[
                { name: "CAM 01", active: true },
                { name: "CAM 02" },
                { name: "CAM 03" },
                { name: "CAM 04" },
              ]}
              nvr2Items={[
                { name: "CH 01" },
                { name: "CH 02" },
                { name: "CH 03", subItems: ["GRP 1"] },
                { name: "CH 04" },
              ]}
              showCalendar={true}
              onFilterChange={(location) => setFilterLocation(location)}
            />
          </div>
        )}

        <div className={`col-12 ${styles.iconAndBlocksContainer}`}>
          {expandedBlockId === null && (
            <div
              className={`d-flex justify-content-between ${styles.iconContainer}`}
            >
              <div className={styles.iconWrapper}>
                <img
                  src={playback}
                  alt="Playback Icon"
                  className={styles.Playicon}
                />
                <h1 style={{ marginTop: "10px" }}>Playback</h1>
              </div>
              <div className={styles.iconGroup}>
                <img
                  src={fourStepIcon}
                  alt="4 Step Icon"
                  className={styles.icon}
                  onClick={() => setColumns(2)}
                />
                <img
                  src={sixStepIcon}
                  alt="6 Step Icon"
                  className={styles.icon}
                  onClick={() => setColumns(3)}
                />
              </div>
            </div>
          )}

          <div
            className={`${styles.blocksContainer}`}
            style={{
              gridTemplateColumns: expandedBlockId
                ? "1fr"
                : `repeat(${columns}, 1fr)`,
            }}
          >
            {blocks.map((block) => (
              <div
                key={block.id}
                className={`${styles.block} ${
                  expandedBlockId === block.id ? styles.expandedBlock : ""
                }`}
                style={{
                  display:
                    expandedBlockId && expandedBlockId !== block.id
                      ? "none"
                      : "block",
                  width: expandedBlockId === block.id ? "100%" : "auto",
                  height: expandedBlockId === block.id ? "100vh" : "35vh",
                  position: expandedBlockId === block.id ? "fixed" : "relative",
                  top: expandedBlockId === block.id ? 0 : "auto",
                  left: expandedBlockId === block.id ? 0 : "auto",
                  zIndex: expandedBlockId === block.id ? 9999 : "auto",
                  cursor: "pointer",
                }}
                onDoubleClick={() => handleBlockDoubleClick(block.id)}
              >
                <div className={styles.blockContent}>
                  {/* <ReactPlayer
                    url={block.url}
                    width="100%"
                    height="100%"
                    controls
                  /> */}
                  <video width="100%" height="100%" controls>
                    <source src="video_20240918214450.mp4"  type="video/mp4"/>
                  </video>
                  <div className={styles.blockTitle}>{block.title}</div>
                </div>
                {/* Show return button in full-screen mode */}
                {expandedBlockId === block.id && (
                  <button
                    className={styles.returnButton}
                    onClick={handleReturnClick}
                    style={{ position: "absolute", top: "10px", left: "10px" }}
                  >
                    <KeyboardDoubleArrowLeftSharpIcon
                      style={{ marginTop: "-3px" }}
                    />
                    Back
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Hide VideoFetcher when in full-screen mode */}
      {expandedBlockId === null && (
        <VideoFetcher location={filterLocation} onVideosFetched={() => {}} />
      )}
    </div>
  );
};

export default Playback;
