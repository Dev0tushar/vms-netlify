

import React from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import AlertSidebar from "../../AlertSideBar/AlertSideBar";
import styles from "./alert.module.css";
import SideBarMenu from "../../sideMenu/sideBar";
import Alert from "../../../assets/alertdashboard-icon.png";
import FilterIcon from "../../../assets/filterbutton-icon.png";
import DownloadIcon from "../../../assets/dpwnloadbutton-icon.png";
import "bootstrap/dist/css/bootstrap.min.css";

interface Alert {
  id: number;
  source: string;
  alertName: string;
  alertPriority: string;
  timeDate: string;
  details: string;
}

const data: Alert[] = [
  {
    id: 1,
    source: "Cam 08",
    alertName: "Person detected",
    alertPriority: "02",
    timeDate: "25 Jan, 2023 at 5:30pm",
    details: "Person detected in restricted area",
  },
  {
    id: 2,
    source: "Cam 08",
    alertName: "Unauthorized entry detected",
    alertPriority: "07",
    timeDate: "25 Jan, 2023 at 5:30pm",
    details: "Warehouse; Camera 8. Alert sent to Security supervisor.",
  },
  {
    id: 3,
    source: "Cam 08",
    alertName: "Call Detect",
    alertPriority: "09",
    timeDate: "25 Jan, 2023 at 5:30pm",
    details: "Unknown printer took a large gallery of type and scrambled it.",
  },
  {
    id: 4,
    source: "Cam 09",
    alertName: "Fire detected",
    alertPriority: "01",
    timeDate: "26 Jan, 2023 at 4:20pm",
    details: "Fire detected in the storage area",
  },
  {
    id: 5,
    source: "Cam 10",
    alertName: "Smoke detected",
    alertPriority: "05",
    timeDate: "26 Jan, 2023 at 4:30pm",
    details: "Smoke detected near the entrance",
  },
];

const columns: TableColumn<Alert>[] = [
  { name: "No.", selector: (row) => row.id.toString(), sortable: true },
  { name: "Source", selector: (row) => row.source, sortable: true },
  { name: "Alert Name", selector: (row) => row.alertName, sortable: true },
  {
    name: "Alert Priority",
    selector: (row) => row.alertPriority,
    sortable: true,
  },
  { name: "Time & Date", selector: (row) => row.timeDate, sortable: true },
  { name: "Details", selector: (row) => row.details, sortable: true },
];

const AlertTable: React.FC = () => {
  return (
    <>
      <SideBarMenu />
      <div className={styles.layoutContainer}>
        <div className="container-fluid">
          <div className="row">
            <div className={`${styles.alertSidebarContainer} col-12 col-md-3 p-3`}>
              <AlertSidebar />
            </div>
            <div className="col-12 col-md-9 mt-4">
              <div className={styles.alertHeader}>
                <div className={styles.alertContent}>
                  <h2>
                    <img src={Alert} alt="Alert" className={styles.alertIcon} style={{marginTop:"-4px"}}/>{" "}
                    Alert
                  </h2>
                </div>
                <div className={styles.alertButtons}>
                  <button className={styles.filterButton}>
                    <img
                      src={FilterIcon}
                      alt="Filter"
                      className={styles.imgIcons}
                      style={{
                        minHeight: "13px",
                        minWidth: "13px",
                        marginRight: "5px",
                      }}
                    />
                    FILTER BY
                  </button>
                  <button className={styles.downloadButton}>
                    <img
                      src={DownloadIcon}
                      alt="Download"
                      className={styles.imgIcons}
                      style={{
                        minHeight: "13px",
                        minWidth: "13px",
                        marginRight: "5px",
                      }}
                    />
                    DOWNLOAD
                  </button>
                </div>
              </div>
              <div className={styles.alertTable}>
                <DataTable
                  selectableRows
                  columns={columns}
                  data={data}
                  pagination
                  className={styles.Table_scroll}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlertTable;
