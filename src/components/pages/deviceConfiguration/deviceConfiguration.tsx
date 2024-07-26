import React from "react";
import DataTable from "react-data-table-component";
import styles from "./deviceConfiguration.module.css";
import camera from "../../../assets/Camera-png.png";
import SideBarMenu from "../../sideMenu/sideBar";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import filterIcon from "../../../assets/filterbutton-icon.png";
import { Link } from "react-router-dom";

interface Device {
  id: number;
  ipDomain: string;
  deviceType: string;
  model: string;
  port: string;
  chNo: string;
  group: string;
  status: string;
}

const data: Device[] = [
  {
    id: 1,
    ipDomain: "Device 01",
    deviceType: "PC",
    model: "-",
    port: "-",
    chNo: "-",
    group: "-",
    status: "Online",
  },
  {
    id: 2,
    ipDomain: "Device 02",
    deviceType: "PC",
    model: "-",
    port: "-",
    chNo: "-",
    group: "-",
    status: "Offline",
  },
  {
    id: 3,
    ipDomain: "Device 03",
    deviceType: "PC",
    model: "-",
    port: "-",
    chNo: "-",
    group: "-",
    status: "Offline",
  },
  {
    id: 4,
    ipDomain: "Device 04",
    deviceType: "PC",
    model: "-",
    port: "-",
    chNo: "-",
    group: "-",
    status: "Online",
  },
];

const columns = [
  {
    name: "No.",
    selector: (row: Device) => row.id,
    sortable: true,
    width: "60px",
  },
  {
    name: "IP/Domain",
    selector: (row: Device) => row.ipDomain,
    sortable: true,
  },
  {
    name: "Device Type",
    selector: (row: Device) => row.deviceType,
    sortable: true,
  },
  {
    name: "Model",
    selector: (row: Device) => row.model,
    sortable: true,
  },
  {
    name: "Port",
    selector: (row: Device) => row.port,
    sortable: true,
  },
  {
    name: "CH No.",
    selector: (row: Device) => row.chNo,
    sortable: true,
  },
  {
    name: "Group",
    selector: (row: Device) => row.group,
    sortable: true,
  },
  {
    name: "Status",
    selector: (row: Device) => row.status,
    sortable: true,
    cell: (row: Device) => (
      <span
        className={
          row.status === "Online" ? styles.statusOnline : styles.statusOffline
        }
      >
        {row.status}
      </span>
    ),
  },
  {
    name: "Action",
    cell: () => (
      <div className={styles.actionButtons}>
        <button className={`${styles.actionButton} ${styles.editButton}`}>
          <FiEdit2 />
        </button>
        <button className={`${styles.actionButton} ${styles.deleteButton}`}>
          <AiOutlineDelete />
        </button>
      </div>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];

const DeviceTable: React.FC = () => {
  return (
    <>
      <SideBarMenu />
      <div className={styles.deviceTableContainer}>
        <div className={styles.buttonContainer}>
          <div>
            <div className={styles.topContent}>
              {" "}
              <img src={camera} alt="" className={filterIcon} /> Device
              Configurartion
            </div>{" "}
            <br />
            <Link to="/AddDevice-Screen" className={styles.linkButton}>
              <button className={styles.topButton}>ADD</button>
            </Link>
            <button className={styles.dltButton}>DELETE</button>
          </div>
          <button className={`${styles.topButton} ${styles.filterButton}`}>
            <img src={filterIcon} alt="" className={styles.filterButtonIcon} />{" "}
            FILTER BY
          </button>
        </div>
        <div className={styles.tableContainer}>
          <DataTable
            columns={columns}
            data={data}
            defaultSortFieldId={1}
            pagination
            highlightOnHover
            selectableRows
          />
          <div className={styles.emptyScreen}></div>
        </div>
      </div>
    </>
  );
};

export default DeviceTable;
