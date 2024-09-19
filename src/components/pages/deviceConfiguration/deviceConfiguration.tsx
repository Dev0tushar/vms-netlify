// // import React from "react";
// // import DataTable from "react-data-table-component";
// // import styles from "./deviceConfiguration.module.css";
// // import camera from "../../../assets/Camera-png.png";
// // import SideBarMenu from "../../sideMenu/sideBar";
// // import { FiEdit2 } from "react-icons/fi";
// // import { AiOutlineDelete } from "react-icons/ai";
// // import filterIcon from "../../../assets/filterbutton-icon.png";
// // import { Link } from "react-router-dom";

// // interface Device {
// //   id: number;
// //   ipDomain: string;
// //   deviceType: string;
// //   model: string;
// //   port: string;
// //   chNo: string;
// //   group: string;
// //   status: string;
// // }

// // const data: Device[] = [
// //   {
// //     id: 1,
// //     ipDomain: "Device 01",
// //     deviceType: "PC",
// //     model: "-",
// //     port: "-",
// //     chNo: "-",
// //     group: "-",
// //     status: "Online",
// //   },
// //   {
// //     id: 2,
// //     ipDomain: "Device 02",
// //     deviceType: "PC",
// //     model: "-",
// //     port: "-",
// //     chNo: "-",
// //     group: "-",
// //     status: "Offline",
// //   },
// //   {
// //     id: 3,
// //     ipDomain: "Device 03",
// //     deviceType: "PC",
// //     model: "-",
// //     port: "-",
// //     chNo: "-",
// //     group: "-",
// //     status: "Offline",
// //   },
// //   {
// //     id: 4,
// //     ipDomain: "Device 04",
// //     deviceType: "PC",
// //     model: "-",
// //     port: "-",
// //     chNo: "-",
// //     group: "-",
// //     status: "Online",
// //   },

// // ];

// // const columns = [
// //   {
// //     name: "No.",
// //     selector: (row: Device) => row.id,
// //     sortable: true,
// //     width: "60px",
// //   },
// //   {
// //     name: "IP/Domain",
// //     selector: (row: Device) => row.ipDomain,
// //     sortable: true,
// //   },
// //   {
// //     name: "Device Type",
// //     selector: (row: Device) => row.deviceType,
// //     sortable: true,
// //   },
// //   {
// //     name: "Model",
// //     selector: (row: Device) => row.model,
// //     sortable: true,
// //   },
// //   {
// //     name: "Port",
// //     selector: (row: Device) => row.port,
// //     sortable: true,
// //   },
// //   {
// //     name: "CH No.",
// //     selector: (row: Device) => row.chNo,
// //     sortable: true,
// //   },
// //   {
// //     name: "Group",
// //     selector: (row: Device) => row.group,
// //     sortable: true,
// //   },
// //   {
// //     name: "Status",
// //     selector: (row: Device) => row.status,
// //     sortable: true,
// //     cell: (row: Device) => (
// //       <span
// //         className={
// //           row.status === "Online" ? styles.statusOnline : styles.statusOffline
// //         }
// //       >
// //         {row.status}
// //       </span>
// //     ),
// //   },
// //   {
// //     name: "Action",
// //     cell: () => (
// //       <div className={styles.actionButtons}>
// //         <button className={`${styles.actionButton} ${styles.editButton}`}>
// //           <FiEdit2 />
// //         </button>
// //         <button className={`${styles.actionButton} ${styles.deleteButton}`}>
// //           <AiOutlineDelete />
// //         </button>
// //       </div>
// //     ),
// //     ignoreRowClick: true,
// //     allowOverflow: true,
// //     button: true,
// //   },
// // ];

// // const DeviceTable: React.FC = () => {
// //   return (
// //     <>
// //       <SideBarMenu />
// //       <div className={styles.deviceTableContainer}>
// //         <div className={styles.buttonContainer}>
// //           <div>
// //             <div className={styles.topContent}>
// //               {" "}
// //               <img src={camera} alt="" className={filterIcon} /> Device
// //               Configurartion
// //             </div>{" "}
// //             <br />
// //             <Link to="/AddDevice-Screen" className={styles.linkButton}>
// //               <button className={styles.topButton}>ADD</button>
// //             </Link>
// //             <button className={styles.dltButton}>DELETE</button>
// //           </div>
// //           <button className={`${styles.topButton} ${styles.filterButton}`}>
// //             <img src={filterIcon} alt="" className={styles.filterButtonIcon} />{" "}
// //             FILTER BY
// //           </button>
// //         </div>
// //         <div className={styles.tableContainer}>
// //           <DataTable
// //             columns={columns}
// //             data={data}
// //             defaultSortFieldId={1}
// //             pagination
// //             highlightOnHover
// //             selectableRows
// //           />
// //           {/* <div className={styles.emptyScreen}></div> */}
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default DeviceTable;

// import React from "react";
// import DataTable from "react-data-table-component";
// import styles from "./deviceConfiguration.module.css";
// import camera from "../../../assets/Camera-png.png";
// import SideBarMenu from "../../sideMenu/sideBar";
// import { FiEdit2 } from "react-icons/fi";
// import { AiOutlineDelete } from "react-icons/ai";
// import filterIcon from "../../../assets/filterbutton-icon.png";
// import { Link } from "react-router-dom";

// interface Device {
//   id: number;
//   ipDomain: string;
//   deviceType: string;
//   model: string;
//   port: string;
//   chNo: string;
//   group: string;
//   status: string;
// }

// const data: Device[] = [
//   {
//     id: 1,
//     ipDomain: "Device 01",
//     deviceType: "PC",
//     model: "-",
//     port: "-",
//     chNo: "-",
//     group: "-",
//     status: "Online",
//   },
//   {
//     id: 2,
//     ipDomain: "Device 02",
//     deviceType: "PC",
//     model: "-",
//     port: "-",
//     chNo: "-",
//     group: "-",
//     status: "Offline",
//   },
//   {
//     id: 3,
//     ipDomain: "Device 03",
//     deviceType: "PC",
//     model: "-",
//     port: "-",
//     chNo: "-",
//     group: "-",
//     status: "Offline",
//   },
//   {
//     id: 4,
//     ipDomain: "Device 04",
//     deviceType: "PC",
//     model: "-",
//     port: "-",
//     chNo: "-",
//     group: "-",
//     status: "Online",
//   },
// ];

// const columns = [
//   {
//     name: "No.",
//     selector: (row: Device) => row.id,
//     sortable: true,
//     width: "60px",
//   },
//   {
//     name: "IP/Domain",
//     selector: (row: Device) => row.ipDomain,
//     sortable: true,
//   },
//   {
//     name: "Device Type",
//     selector: (row: Device) => row.deviceType,
//     sortable: true,
//   },
//   {
//     name: "Model",
//     selector: (row: Device) => row.model,
//     sortable: true,
//   },
//   {
//     name: "Port",
//     selector: (row: Device) => row.port,
//     sortable: true,
//   },
//   {
//     name: "CH No.",
//     selector: (row: Device) => row.chNo,
//     sortable: true,
//   },
//   {
//     name: "Group",
//     selector: (row: Device) => row.group,
//     sortable: true,
//   },
//   {
//     name: "Status",
//     selector: (row: Device) => row.status,
//     sortable: true,
//     cell: (row: Device) => (
//       <span
//         className={
//           row.status === "Online" ? styles.statusOnline : styles.statusOffline
//         }
//       >
//         {row.status}
//       </span>
//     ),
//   },
//   {
//     name: "Action",
//     cell: () => (
//       <div className={styles.actionButtons}>
//         <button className={`${styles.actionButton} ${styles.editButton}`}>
//           <FiEdit2 />
//         </button>
//         <button className={`${styles.actionButton} ${styles.deleteButton}`}>
//           <AiOutlineDelete />
//         </button>
//       </div>
//     ),
//     ignoreRowClick: true,
//     allowOverflow: true,
//     button: true,
//   },
// ];

// const customStyles = {
//   rows: {
//     style: {
//       padding: "0px 0px",
//     },
//   },
//   headCells: {
//     style: {
//       padding: "4px 8px",
//     },
//   },
//   cells: {
//     style: {
//       padding: "4px 8px",
//     },
//   },
// };

// const DeviceTable: React.FC = () => {
//   return (
//     <>
//       <SideBarMenu />
//       <div className={styles.deviceTableContainer}>
//         <div className={styles.mainContainer}>
//           <div className={styles.buttonContainer}>
//             <div>
//               <div className={styles.topContent}>
//                 <img src={camera} alt="" className={filterIcon} /> Device
//                 Configuration
//               </div>
//               <br />
//               <Link to="/AddDevice-Screen" className={styles.linkButton}>
//                 <button className={styles.topButton}>ADD</button>
//               </Link>
//               <button className={styles.dltButton}>DELETE</button>
//             </div>
//             <button className={`${styles.topButton} ${styles.filterButton}`}>
//               <img
//                 src={filterIcon}
//                 alt=""
//                 className={styles.filterButtonIcon}
//               />{" "}
//               FILTER BY
//             </button>
//           </div>
//           <div className={styles.tableContainer}>
//             <DataTable
//               columns={columns}
//               data={data}
//               defaultSortFieldId={1}
//               pagination
//               highlightOnHover
//               selectableRows
//               customStyles={customStyles}
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default DeviceTable;




// import DataTable from "react-data-table-component";
// import styles from "./deviceConfiguration.module.css";
// import camera from "../../../assets/Camera-png.png";
// import SideBarMenu from "../../sideMenu/sideBar";
// import { FiEdit2 } from "react-icons/fi";
// import { AiOutlineDelete } from "react-icons/ai";
// import filterIcon from "../../../assets/filterbutton-icon.png";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../../../global.css";
// import { useDevice } from "../deviceConfiguration/ParentDevice";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// interface Device {
//   camera_id: string;
//   serial_number: string;
//   name: string;
//   camera_make_model: string;
//   status: string;
//   location_id: string;
//   username: string;
//   password: string;
//   is_nvr: string;
//   camera_url: string;
// }

// const DeviceTable: React.FC = () => {
//   const [tableData, setTableData] = useState<any[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   // const { devices } = useDevice();
//   const { devices } = useDevice();
//   const navigate = useNavigate();

//   const handleDelete = (id: string) => {
//     if (window.confirm("Are you sure you want to delete this device?")) {
//       removeDevice(id);
//     }
//   };

//   const fetchData = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await axios.get('http://127.0.0.1:8000/config/cameras');
//       setTableData(response.data); // Update table with API data
//     } catch (err) {
//       setError('Failed to fetch data');
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchData(); // Fetch data on component mount
//   }, []);

//   const handleEdit = (id: string) => {
//     navigate(`/AddDevice-Screen?edit=${id}`);
//   };
//   const columns = [
//     {
//       name: "Camer Id.",
//       selector: (row: Device) => row.camera_id,
//       sortable: true,
//       width: "60px",
//     },
//     {
//       name: "Serial Number",
//       selector: (row: Device) => row.serial_number || "-",
//       sortable: true,
//     },
//     {
//       name: "Name",
//       selector: (row: Device) => row.name || "-",
//       sortable: true,
//     },
//     {
//       name: "Camera Make/Model",
//       selector: (row: Device) => row.camera_make_model || "-",
//       sortable: true,
//     },
//     {
//       name: "Status",
//       selector: (row: Device) => row.status || "-",
//       sortable: true,
//       cell: (row: Device) => (
//         <span
//           className={
//             row.status === "Online" ? styles.statusOnline : styles.statusOffline
//           }
//         >
//           {row.status}
//         </span>
//       ),
//     },

//     {
//       name: "Location ID",
//       selector: (row: Device) => row.location_id || "-",
//       sortable: true,
//     },
//     {
//       name: "User Name",
//       selector: (row: Device) => row.username || "-",
//       sortable: true,
//     },
//     {
//       name: "Password",
//       selector: (row: Device) => row.password || "-",
//       sortable: true,
//     },
//     {
//       name: "Is Nvr",
//       selector: (row: Device) => row.is_nvr || "-",
//       sortable: true,
//     },
//     {
//       name: "Camera url",
//       selector: (row: Device) => row.camera_url || "-",
//       sortable: true,
//     },
//     {
//       name: "Action",
//       cell: (row: Device) => (
//         <div>
//           <Link to="/AddDevice-Screen">
//           <button
//             className={styles.btnedit}
//             onClick={() => handleEdit(row.camera_id)}
//           >
//             <FiEdit2 />
//           </button>
//           </Link>
//           <button
//             className={styles.btndelete}
//             onClick={() => handleDelete(row.camera_id)}
//           >
//             <AiOutlineDelete />
//           </button>
//         </div>
//       ),
//       ignoreRowClick: true,
//       $allowOverflow: true,
//       $button: true,
//     },
//   ];

//   const customStyles = {
//     rows: {
//       style: {
//         padding: "0px 0px",
//       },
//     },
//     headCells: {
//       style: {
//         padding: "4px 8px",
//       },
//     },
//     cells: {
//       style: {
//         padding: "4px 8px",
//       },
//     },
//   };
//   // const DeviceTable: React.FC = () => {
//   // const { devices } = useDevice();
  
//   return (
//     <div
//       className={`${styles.TopMainContainer}container-fluid`}
//       style={{ backgroundColor: "#F5F5F5", overflow: "hidden" }}
//     >
//       <div className="row">
//         <div className="col-md-2 col-5">
//           <SideBarMenu />
//         </div>
//         <div className="col-md-10 col-9 ">
//           <div className={styles.deviceTableContainer}>
//             <div className={styles.mainContainer}>
//               <div className={styles.buttonContainer}>
//                 <div>
//                   <div
//                     className={styles.topContent}
//                     style={{ display: "flex", gap: "10px" }}
//                   >
//                     <img
//                       src={camera}
//                       alt=""
//                       className={styles.filterButtonIcon}
//                     />
//                     Device Configuration
//                   </div>
//                   <br />
//                   <Link to="/AddDevice-Screen" className={styles.linkButton}>
//                     <button className={styles.topButton}>ADD</button>
//                   </Link>
//                   <button className={`${styles.dltButton}`}>DELETE</button>
//                 </div>
//                 <div className={`${styles.filtercontent} `}>
//                   <button
//                     className={`${styles.topButton} ${styles.filterButton} `}
//                   >
//                     <img
//                       src={filterIcon}
//                       alt=""
//                       className={`${styles.filterButtonIcon}`}
//                       style={{
//                         maxWidth: "18px !important",
//                         height: "100%",
//                         maxHeight: "18px !important",
//                       }}
//                     />{" "}
//                     FILTER BY
//                   </button>
//                 </div>
//               </div>
//               <div className={styles.tableContainer}>
//               {error && <div style={{ color: 'red' }}>{error}</div>}
//                 <DataTable
//                   columns={columns}
//                   // data={data}
//                   data={tableData}
//                   defaultSortFieldId={1}
//                   pagination
//                   highlightOnHover
//                   selectableRows
//                   customStyles={customStyles}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DeviceTable;



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

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("http://127.0.0.1:8000/config/cameras");
      setTableData(response.data); 
    } catch (err) {
      setError("Failed to fetch data");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const removeDevice = async (id: string) => {
    try {
      const response = await axios.delete(
        `http://127.0.0.1:8000/config/camera/${id}`
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
