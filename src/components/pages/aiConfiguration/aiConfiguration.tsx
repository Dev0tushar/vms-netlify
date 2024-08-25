// import { useState } from "react";
// import DataTable, { TableColumn } from "react-data-table-component";
// import styles from "./aiConfiguration.module.css";
// import SideBarMenu from "../../sideMenu/sideBar";
// import { FiEdit2 } from "react-icons/fi";
// import { AiOutlineDelete } from "react-icons/ai";
// import { Link } from "react-router-dom";
// import AiIcon from "../../../assets/ai2-sidebar-png-output.png";
// import PreviewScreen from "../PreviewAiConfigScreen/PreviewAiConfig";
// import DownloadIcon from "../../../assets/PlusIcon-addDevice-button.png";

// interface CameraData {
//   no: number;
//   camera: string;
//   group: string;
//   aiModel: string;
//   eventPriority: string;
//   modelLiveSince: string;
//   status: string;
// }

// const initialData: CameraData[] = [
//   {
//     no: 1,
//     camera: "Cam 05",
//     group: "Parking",
//     aiModel: "LPR",
//     eventPriority: "01",
//     modelLiveSince: "25 Jan, 2023 - 5:25pm",
//     status: "Online",
//   },
//   {
//     no: 2,
//     camera: "Cam 05",
//     group: "Parking",
//     aiModel: "LPR",
//     eventPriority: "01",
//     modelLiveSince: "25 Jan, 2023 - 5:25pm",
//     status: "Offline",
//   },
//   {
//     no: 3,
//     camera: "Cam 05",
//     group: "Parking",
//     aiModel: "LPR",
//     eventPriority: "01",
//     modelLiveSince: "25 Jan, 2023 - 5:25pm",
//     status: "Offline",
//   },
//   {
//     no: 4,
//     camera: "Cam 05",
//     group: "Parking",
//     aiModel: "LPR",
//     eventPriority: "01",
//     modelLiveSince: "25 Jan, 2023 - 5:25pm",
//     status: "Online",
//   },
// ];

// const AiConfiguration: React.FC = () => {
//   const [data, setData] = useState<CameraData[]>(initialData);
//   const [newUser, setNewUser] = useState<Partial<CameraData>>({
//     no: data.length + 1,
//     camera: "",
//     group: "",
//     aiModel: "",
//     eventPriority: "",
//     modelLiveSince: "",
//     status: "",
//   });

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
//   ) => {
//     const { name, value } = e.target;
//     setNewUser((prevState) => ({ ...prevState, [name]: value }));
//   };

//   const handleAddUser = () => {
//     if (
//       newUser.camera &&
//       newUser.group &&
//       newUser.aiModel &&
//       newUser.eventPriority &&
//       newUser.modelLiveSince &&
//       newUser.status
//     ) {
//       setData([...data, newUser as CameraData]);
//       setNewUser({
//         no: data.length + 2,
//         camera: "",
//         group: "",
//         aiModel: "",
//         eventPriority: "",
//         modelLiveSince: "",
//         status: "",
//       });
//     }
//   };

//   const columns: TableColumn<CameraData>[] = [
//     { name: "No.", selector: (row) => row.no, sortable: true },
//     { name: "Camera", selector: (row) => row.camera, sortable: true },
//     { name: "Group", selector: (row) => row.group, sortable: true },
//     { name: "AI Model", selector: (row) => row.aiModel, sortable: true },
//     {
//       name: "Event Priority",
//       selector: (row) => row.eventPriority,
//       sortable: true,
//     },
//     {
//       name: "Model Live Since",
//       selector: (row) => row.modelLiveSince,
//       sortable: true,
//     },
//     {
//       name: "Status",
//       cell: (row: CameraData) => (
//         <div>
//           <span
//             className={`${styles.dot} ${
//               row.status === "Online" ? styles.dotOnline : styles.dotOffline
//             }`}
//           ></span>
//           {row.status}
//         </div>
//       ),
//       sortable: true,
//     },
//     {
//       name: "Action",
//       cell: () => (
//         <div>
//           <button className={styles.btnedit}>
//             <FiEdit2 />
//           </button>
//           <button className={styles.btndelete}>
//             <AiOutlineDelete />
//           </button>
//         </div>
//       ),
//     },
//   ];

//   return (
//     <>
//       <SideBarMenu />

//       <div className={`${styles.wrapper}`}>
//         <div className={styles.previewScreen} style={{marginLeft:"-500px"}}>
//           <PreviewScreen />
//         </div>
//         <div className={`${styles.mainContentWrapper} `}>
//           <div className={`${styles.container} container `}>
//             <div className={`${styles.aiHeaderContent} row`}>
//               <h1 className="col-12">
//                 <img src={AiIcon} alt="AI Icon" />
//                 Ai Configuration
//               </h1>
//             </div>
//             <br />
//             <div className={`${styles.formrow} row`}>
//               <div className="col-md-3">
//                 <select
//                   name="group"
//                   value={newUser.group}
//                   onChange={handleInputChange}
//                   className={`${styles.formcontrol} form-control`}
//                 >
//                   <option value="">Select Group</option>
//                   <option value="Parking">Parking</option>
//                 </select>
//               </div>
//               <div className="col-md-3">
//                 <select
//                   name="camera"
//                   value={newUser.camera}
//                   onChange={handleInputChange}
//                   className={`${styles.formcontrol} form-control`}
//                 >
//                   <option value="">Select Camera</option>
//                   <option value="Cam 05">Cam 05</option>
//                 </select>
//               </div>
//               <div className="col-md-3">
//                 <select
//                   name="aiModel"
//                   value={newUser.aiModel}
//                   onChange={handleInputChange}
//                   className={`${styles.formcontrol} form-control`}
//                 >
//                   <option value="">Select AI Model</option>
//                   <option value="LPR">LPR</option>
//                 </select>
//               </div>
//               <div className="col-md-3 d-flex align-items-center">
//                 <div className={styles.TopButton}>
//                   <button onClick={handleAddUser} className={`${styles.btn}`}>
//                     <img
//                       src={DownloadIcon}
//                       alt=""
//                       className={styles.DownloadIconButton}
//                     />
//                     ADD
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className={styles.tableContainer}>
//               <DataTable
//                 columns={columns}
//                 data={data}
//                 selectableRows
//                 pagination
//                 highlightOnHover
//               />
//               <hr className={styles.hrLine} />
//               <div className="row ">
//                 <div className={`${styles.bottomButtons} col-12 d-flex mb-3`}>
//                   <Link to="/Edit-Screen" className={styles.linkButton}>
//                     <button className={`${styles.editbutton} btn btn-dark`}>
//                       Edit
//                     </button>
//                   </Link>
//                   <button
//                     className={`${styles.deletebutton} btn border rounded`}
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AiConfiguration;

// import React from "react";
// import DataTable from "react-data-table-component";
// import "bootstrap/dist/css/bootstrap.min.css";
// import styles from "./aiConfiguration.module.css";
// import AiConfiguration from "../../../assets/AIConfig-sidebar(2).png";
// import SideBarMenu from "../../sideMenu/sideBar";
// import PreviewScreen from "../PreviewAiConfigScreen/PreviewAiConfig";
// import { FiEdit2 } from "react-icons/fi";
// import { AiOutlineDelete } from "react-icons/ai";
// import { Link } from "react-router-dom";

// const data = [
//   {
//     no: 1,
//     camera: "Cam 05",
//     group: "Parking",
//     model: "LPR",
//     eventPriority: "Q1",
//     modelLiveSince: "25 Jan, 2023 - 5:25pm",
//     status: "Online",
//   },
//   {
//     no: 2,
//     camera: "Cam 05",
//     group: "Parking",
//     model: "LPR",
//     eventPriority: "Q1",
//     modelLiveSince: "25 Jan, 2023 - 5:25pm",
//     status: "Offline",
//   },
//   {
//     no: 3,
//     camera: "Cam 05",
//     group: "Parking",
//     model: "LPR",
//     eventPriority: "Q1",
//     modelLiveSince: "25 Jan, 2023 - 5:25pm",
//     status: "Offline",
//   },
//   {
//     no: 4,
//     camera: "Cam 05",
//     group: "Parking",
//     model: "LPR",
//     eventPriority: "Q1",
//     modelLiveSince: "25 Jan, 2023 - 5:25pm",
//     status: "Online",
//   },
// ];

// const columns = [
//   {
//     name: "No.",
//     selector: (row:any) => row.no,
//     sortable: true,
//     width: "50px",
//   },
//   {
//     name: "Camera",
//     selector: (row:any) => row.camera,
//     sortable: true,
//   },
//   {
//     name: "Group",
//     selector: (row:any) => row.group,
//     sortable: true,
//   },
//   {
//     name: "AI Model",
//     selector: (row:any) => row.model,
//     sortable: true,
//   },
//   {
//     name: "Event Priority",
//     selector: (row:any) => row.eventPriority,
//     sortable: true,
//   },
//   {
//     name: "Model Live Since",
//     selector: (row:any) => row.modelLiveSince,
//     sortable: true,
//   },
//   {
//     name: "Status",
//     selector: (row:any) => row.status,
//     sortable: true,
//     cell: (row:any) => (
//       <div className={row.status === "Online" ? styles.online : styles.offline}>
//         {row.status}
//       </div>
//     ),
//   },
//   {
//     name: "Action",
//     cell: (row) => (
//       <div style={{ display: "flex", alignItems: "center", gap: "none" }}>
//         <button className="btn btn-link" style={{ color: "gray" }}>
//           <FiEdit2 />
//         </button>
//         <button className="btn btn-link" style={{ color: "gray" }}>
//           <AiOutlineDelete />
//         </button>
//       </div>
//     ),
//   },
// ];

// const DataTableComponent: React.FC = () => {
//   return (
//     <>
//       <SideBarMenu />
//       <div className={styles.backgroundWrapper}>
//         {/* <div className={styles.previewscreencontainer}>  */}
//         <PreviewScreen />
//         {/* </div> */}

//         <div className={`container ${styles.dataTableContainer}`}>
//           <div className="d-flex align-items-center mb-3">
//             <img src={AiConfiguration} alt="Icon" className={styles.icon} />
//             <span className={styles.headerText}>AI Configuration</span>
//           </div>

//           <div className={`d-flex ${styles.topInputs}`}>
//             <input type="text" placeholder="Group" className="form-control" />
//             <input type="text" placeholder="Camera" className="form-control" />
//             <input
//               type="text"
//               placeholder="AI Model"
//               className="form-control"
//             />
//             <button className={`${styles.TopButton} btn `}>+ Add</button>
//           </div>

//           <div className={`card ${styles.dataTableCard}`}>
//             <div className="card-body">
//               <DataTable
//                 columns={columns}
//                 data={data}
//                 selectableRows
//                 pagination
//                 highlightOnHover
//               />
//             </div>
//             <div
//               className={`card-footer d-flex justify-content-between ${styles.footerButtons}`}
//             >
//               <Link to="/Edit-Screen" className={styles.linkButton}>
//                 <button className="btn ">Edit</button>
//               </Link>
//               <button className={`${styles.dltbutton}btn `} style={{borderRadius:"4px"}} >Delete</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default DataTableComponent;

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
