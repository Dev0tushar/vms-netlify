
import React from "react";
import DataTable from "react-data-table-component";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./aiConfiguration.module.css";
import AiConfiguration from "../../../assets/AIConfig-sidebar(2).png";
import SideBarMenu from "../../sideMenu/sideBar";
import PreviewScreen from "../PreviewAiConfigScreen/PreviewAiConfig";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

// Define an interface for the data structure
interface DataRow {
  no: number;
  camera: string;
  group: string;
  model: string;
  eventPriority: string;
  modelLiveSince: string;
  status: string;
}

const data: DataRow[] = [
  {
    no: 1,
    camera: "Cam 05",
    group: "Parking",
    model: "LPR",
    eventPriority: "Q1",
    modelLiveSince: "25 Jan, 2023 - 5:25pm",
    status: "Online",
  },
  {
    no: 2,
    camera: "Cam 05",
    group: "Parking",
    model: "LPR",
    eventPriority: "Q1",
    modelLiveSince: "25 Jan, 2023 - 5:25pm",
    status: "Offline",
  },
  {
    no: 3,
    camera: "Cam 05",
    group: "Parking",
    model: "LPR",
    eventPriority: "Q1",
    modelLiveSince: "25 Jan, 2023 - 5:25pm",
    status: "Offline",
  },
  {
    no: 4,
    camera: "Cam 05",
    group: "Parking",
    model: "LPR",
    eventPriority: "Q1",
    modelLiveSince: "25 Jan, 2023 - 5:25pm",
    status: "Online",
  },
];

const columns = [
  {
    name: "No.",
    selector: (row: DataRow) => row.no,
    sortable: true,
    width: "50px",
  },
  {
    name: "Camera",
    selector: (row: DataRow) => row.camera,
    sortable: true,
  },
  {
    name: "Group",
    selector: (row: DataRow) => row.group,
    sortable: true,
  },
  {
    name: "AI Model",
    selector: (row: DataRow) => row.model,
    sortable: true,
  },
  {
    name: "Event Priority",
    selector: (row: DataRow) => row.eventPriority,
    sortable: true,
  },
  {
    name: "Model Live Since",
    selector: (row: DataRow) => row.modelLiveSince,
    sortable: true,
  },
  {
    name: "Status",
    selector: (row: DataRow) => row.status,
    sortable: true,
    cell: (row: DataRow) => (
      <div className={row.status === "Online" ? styles.online : styles.offline}>
        {row.status}
      </div>
    ),
  },
  {
    name: "Action",
    cell: (row: DataRow) => (
      <div style={{ display: "flex", alignItems: "center", gap: "none" }}>
        <button className="btn btn-link" style={{ color: "gray" }}>
          <FiEdit2 />
        </button>
        <button className="btn btn-link" style={{ color: "gray" }}>
          <AiOutlineDelete />
        </button>
      </div>
    ),
  },
];

const DataTableComponent: React.FC = () => {
  return (
    <>
      <SideBarMenu />
      <div className={styles.backgroundWrapper}>
        <PreviewScreen />
        <div className={`container ${styles.dataTableContainer}`}>
          <div className="d-flex align-items-center mb-3">
            <img src={AiConfiguration} alt="Icon" className={styles.icon} />
            <span className={styles.headerText}>AI Configuration</span>
          </div>

          {/* <div className={`d-flex ${styles.topInputs}`}>
            <input type="text" placeholder="Group" className="form-control" />
            <input type="text" placeholder="Camera" className="form-control" />
            <input type="text" placeholder="AI Model" className="form-control" />
            <button className={`${styles.TopButton} btn`}>+ Add</button>
          </div> */}

          <div className={`d-flex ${styles.topInputs}`}>
            <select className="form-control">
              <option value="">Select Group</option>
              <option value="Group 1">Group 1</option>
              <option value="Group 2">Group 2</option>
              <option value="Group 3">Group 3</option>
            </select>
            <select className="form-control">
              <option value="">Select Camera</option>
              <option value="Camera 1">Camera 1</option>
              <option value="Camera 2">Camera 2</option>
              <option value="Camera 3">Camera 3</option>
            </select>
            <select className="form-control">
              <option value="">Select AI Model</option>
              <option value="Model 1">Model 1</option>
              <option value="Model 2">Model 2</option>
              <option value="Model 3">Model 3</option>
            </select>
            <button className={`${styles.TopButton} btn`}>+ Add</button>
          </div>

          <div className={`card ${styles.dataTableCard}`}>
            <div className="card-body">
              <DataTable
                columns={columns}
                data={data}
                selectableRows
                pagination
                highlightOnHover
                className={styles.Table_scroll}
              />
            </div>
            <div
              className={`card-footer d-flex justify-content-between ${styles.footerButtons}`}
            >
              <Link to="/Edit-Screen" className={styles.linkButton}>
                <button className="btn">Edit</button>
              </Link>
              <button className={`${styles.dltbutton} `}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataTableComponent;
