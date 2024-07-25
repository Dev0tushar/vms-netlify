import React from "react";
import styles from "./ReportTypescreen.module.css";

const ReportContent: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.reportType}>
        <h2>Report Type</h2>
        <div className={styles.dropdown}>
          <select>
            <option value="weekly">Weekly</option>
          </select>
          <div>
            <input
              type="radio"
              id="onePeriod"
              name="period"
              value="onePeriod"
              checked
            />
            <label htmlFor="onePeriod">One Period</label>
          </div>
          <div>
            <input
              type="radio"
              id="multiplePeriod"
              name="period"
              value="multiplePeriod"
            />
            <label htmlFor="multiplePeriod">Multiple Period</label>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.deviceStatus}>Device Status</div>
        <div className={styles.modelStatus}>AI Model Status</div>
        <div className={styles.alertReport}>Alert Report</div>
        <div className={styles.otherReport}>Other Report</div>
        <div className={styles.emptyScreen}></div>
      </div>
    </div>
  );
};

export default ReportContent;
