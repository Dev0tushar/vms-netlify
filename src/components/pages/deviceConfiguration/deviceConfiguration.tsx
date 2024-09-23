


import DataTable from "react-data-table-component";
import styles from "./deviceConfiguration.module.css";
import camera from "../../../assets/Camera-png.png";
import SideBarMenu from "../../sideMenu/sideBar";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import filterIcon from "../../../assets/filterbutton-icon.png";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../global.css";
import { useDevice } from "../deviceConfiguration/ParentDevice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface Device {
  camera_id: string;
  serial_number: string;
  name: string;
  camera_make_model: string;
  status: string;
  location_id: string;
  username: string;
  password: string;
  is_nvr: string;
  camera_url: string;
}

const DeviceTable: React.FC = () => {
  const [tableData, setTableData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { devices } = useDevice();
  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${API_BASE_URL}/config/cameras`);
      setTableData(response.data); 
    } catch (err) {
      setError("Failed to fetch data");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const removeDevice = async (id: string) => {
    try {
      const response = await axios.delete(
        `${API_BASE_URL}/config/camera/${id}`
      );
      console.log("Device deleted successfully", response);
    
      fetchData();
    } catch (error) {
      console.error("Failed to delete device", error);
      setError("Failed to delete the device");
    }
  };


  const handleDelete = (id: string) => {
    console.log(id,"chekk idsss")
    if (window.confirm("Are you sure you want to delete this device?")) {
      removeDevice(id);
    }
  };


  const handleEdit = (id: string) => {
    navigate(`/AddDevice-Screen?edit=${id}`);
  };


  const columns = [
    {
      name: "Camer Id.",
      selector: (row: Device) => row.camera_id,
      sortable: true,
      width: "60px",
    },
    {
      name: "Serial Number",
      selector: (row: Device) => row.serial_number || "-",
      sortable: true,
    },
    {
      name: "Name",
      selector: (row: Device) => row.name || "-",
      sortable: true,
    },
    {
      name: "Camera Make/Model",
      selector: (row: Device) => row.camera_make_model || "-",
      sortable: true,
    },
    {
      name: "Status",
      selector: (row: Device) => row.status || "-",
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
      name: "Location ID",
      selector: (row: Device) => row.location_id || "-",
      sortable: true,
    },
    {
      name: "User Name",
      selector: (row: Device) => row.username || "-",
      sortable: true,
    },
    {
      name: "Password",
      selector: (row: Device) => row.password || "-",
      sortable: true,
    },
    {
      name: "Is Nvr",
      selector: (row: Device) => row.is_nvr || "-",
      sortable: true,
    },
    {
      name: "Camera url",
      selector: (row: Device) => row.camera_url || "-",
      sortable: true,
    },
    {
      name: "Action",
      cell: (row: Device) => (
        <div>
          <Link to="/AddDevice-Screen">
            <button
              className={styles.btnedit}
              onClick={() => handleEdit(row.camera_id)}
            >
              <FiEdit2 />
            </button>
          </Link>
          <button
            className={styles.btndelete}
            onClick={() => handleDelete(row.camera_id)}
          >
            <AiOutlineDelete />
          </button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  const customStyles = {
    rows: {
      style: {
        padding: "0px 0px",
      },
    },
    headCells: {
      style: {
        padding: "4px 8px",
      },
    },
    cells: {
      style: {
        padding: "4px 8px",
      },
    },
  };

  return (
    <div
      className={`${styles.TopMainContainer} container-fluid`}
      style={{ backgroundColor: "#F5F5F5", overflow: "hidden" }}
    >
      <div className="row">
        <div className="col-md-2 col-5">
          <SideBarMenu />
        </div>
        <div className="col-md-10 col-9">
          <div className={styles.deviceTableContainer}>
            <div className={styles.mainContainer}>
              <div className={styles.buttonContainer}>
                <div>
                  <div
                    className={styles.topContent}
                    style={{ display: "flex", gap: "10px" }}
                  >
                    <img
                      src={camera}
                      alt=""
                      className={styles.filterButtonIcon}
                    />
                    Device Configuration
                  </div>
                  <br />
                  <Link to="/AddDevice-Screen" className={styles.linkButton}>
                    <button className={styles.topButton}>ADD</button>
                  </Link>
                  <button className={`${styles.dltButton}`}>DELETE</button>
                </div>
                <div className={`${styles.filtercontent} `}>
                  <button
                    className={`${styles.topButton} ${styles.filterButton}`}
                  >
                    <img
                      src={filterIcon}
                      alt=""
                      className={`${styles.filterButtonIcon}`}
                      style={{
                        maxWidth: "18px !important",
                        height: "100%",
                        maxHeight: "18px !important",
                      }}
                    />
                    FILTER BY
                  </button>
                </div>
              </div>
              <div className={styles.tableContainer}>
                {error && <div style={{ color: "red" }}>{error}</div>}
                <DataTable
                  columns={columns}
                  data={tableData}
                  defaultSortFieldId={1}
                  pagination
                  highlightOnHover
                  selectableRows
                  customStyles={customStyles}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceTable;
