// import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import styles from "./ReportChartScreen.module.css";
import ReportIcon from "../../../assets/ReportIcon.png";
import DownloadIcon from "../../../assets/DownloadIcon-forreportscreen.png";
import SideBarMenu from "../../sideMenu/sideBar";
import ReportContent from "../../Reportypescreen/ReportTypeScreen";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend
);

const ChartsComponent: React.FC = () => {
  const barData = {
    labels: ["0", "1", "2", "3", "4", "5", "6", "7"],
    datasets: [
      {
        label: "Dataset 1",
        data: [300, 500, 700, 200, 400, 600, 800, 300],
        backgroundColor: "#FF914D",
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 1,
      },
    ],
  };

  const lineData = {
    labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    datasets: [
      {
        label: "Dataset 1",
        data: [300, 200, 400, 700, 1000, 200, 300, 400, 600, 900],
        fill: false,
        backgroundColor: "#FF914D",
        borderColor: "rgba(255, 159, 64, 1)",
      },
    ],
  };

  const pieData = {
    datasets: [
      {
        data: [840, 240, 170],
        backgroundColor: ["#FF914D", "#D66723", "#FF7621"],
        borderColor: [
          "rgba(255, 159, 64, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const horizontalBarData = {
    labels: ["Category 1", "Category 2", "Category 3"],
    datasets: [
      {
        label: "Dataset 1",
        data: [50, 60, 90],
        backgroundColor: "#FF914D",
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <SideBarMenu />
      <div className={styles.pageContainer}>
        <div className={styles.ReportContent}>
          <ReportContent />
        </div>
        <div className={styles.contentArea}>
          <div>
            <div className={styles.header}>
              <img
                src={ReportIcon}
                alt="Report"
                className={styles.reportIcon}
              />
              <h1 style={{ marginTop: "10px" }}>Report</h1>
            </div>
            <div className={styles.container}>
              <div className={styles.chartBox}>
                <div className={styles.boxHeader}>
                  <h3>Device Status</h3>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={DownloadIcon}
                      alt="Download"
                      className={styles.downloadIcon}
                      style={{ minWidth: "15px", minHeight: "15px" }}
                    />
                    <h3>Download</h3>
                  </div>
                </div>
                <Bar data={barData} />
              </div>
              <div className={styles.chartBox}>
                <div className={styles.boxHeader}>
                  <h3>AI Model Status</h3>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={DownloadIcon}
                      alt="Download"
                      className={styles.downloadIcon}
                      style={{ minWidth: "15px", minHeight: "15px" }}
                    />
                    <h3>Download</h3>
                  </div>
                </div>
                <div className={styles.pieChart}>
                  <Pie data={pieData} />
                </div>
              </div>
              <div className={styles.chartBox}>
                <div className={styles.boxHeader}>
                  <h3>Alert Report</h3>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={DownloadIcon}
                      alt="Download"
                      className={styles.downloadIcon}
                      style={{ minWidth: "15px", minHeight: "15px" }}
                    />
                    <h3>Download</h3>
                  </div>
                </div>
                <Line data={lineData} />
              </div>
              <div className={styles.chartBox} >
                <div className={styles.boxHeader}>
                  <h3>Other Report</h3>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={DownloadIcon}
                      alt="Download"
                      className={styles.downloadIcon}
                      style={{ minWidth: "15px", minHeight: "15px" }}
                    />
                    <h3>Download</h3>
                  </div>
                </div>
                <Bar data={horizontalBarData} options={{ indexAxis: "y" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChartsComponent;
