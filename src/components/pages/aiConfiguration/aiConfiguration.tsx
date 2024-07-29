// import React, { useState } from "react";
// import DataTable from "react-data-table-component";

// import styles from "./aiConfiguration.module.css";
// import SideBarMenu from "../../sideMenu/sideBar";
// import { FiEdit2 } from "react-icons/fi";
// import { AiOutlineDelete } from "react-icons/ai";
// import { Link } from "react-router-dom";
// import DashboardScreen from "../PreviewAiConfigScreen/PreviewAiConfig";
// import AiIcon from "../../../assets/ai2-sidebar-png-output.png";

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

//   const columns = [
//     // {name: "Ai Configuration", selector:(row: CameraData)=>row.camera, sortable: true},
//     { name: "No.", selector: (row: CameraData) => row.no, sortable: true },
//     {
//       name: "Camera",
//       selector: (row: CameraData) => row.camera,
//       sortable: true,
//     },
//     { name: "Group", selector: (row: CameraData) => row.group, sortable: true },
//     {
//       name: "AI Model",
//       selector: (row: CameraData) => row.aiModel,
//       sortable: true,
//     },
//     {
//       name: "Event Priority",
//       selector: (row: CameraData) => row.eventPriority,
//       sortable: true,
//     },
//     {
//       name: "Model Live Since",
//       selector: (row: CameraData) => row.modelLiveSince,
//       sortable: true,
//     },
//     {
//       name: "Status",
//       selector: (row: CameraData) => (
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
//       cell: (row: CameraData) => (
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
//       <div></div>
//       <SideBarMenu />
//       <DashboardScreen />

//       <div className={styles.container}>
//         <div className={styles.aiHeaderContent}>
//           <h1>
//             <img src={AiIcon} alt="" />
//             Ai Configuration
//           </h1>
//         </div>{" "}
//         <br />
//         <div className={styles.formrow}>
//           <div className={styles.formgroup}>
//             {/* <label>Group</label> */}
//             <select
//               name="group"
//               value={newUser.group}
//               onChange={handleInputChange}
//               className={styles.formcontrol}
//             >
//               <option value="">Select Group</option>
//               <option value="Parking">Parking</option>
//             </select>
//           </div>
//           <div className={styles.formgroup}>
//             {/* <label>Camera</label> */}
//             <select
//               name="camera"
//               value={newUser.camera}
//               onChange={handleInputChange}
//               className={styles.formcontrol}
//             >
//               <option value="">Select Camera</option>
//               <option value="Cam 05">Cam 05</option>
//             </select>
//           </div>
//           <div className={styles.formgroup}>
//             {/* <label>AI Model</label> */}
//             <select
//               name="aiModel"
//               value={newUser.aiModel}
//               onChange={handleInputChange}
//               className={styles.formcontrol}
//             >
//               <option value="">Select AI Model</option>
//               <option value="LPR">LPR</option>
//             </select>
//           </div>
//           <div className={styles.buttongroup}>
//             <button onClick={handleAddUser} className={styles.btn}>
//               ADD
//             </button>
//           </div>
//         </div>
//         <div className={styles.tableContainer}>
//           <DataTable
//             columns={columns}
//             data={data}
//             selectableRows
//             pagination
//             highlightOnHover
//           />
//           <div className={styles.bottomButtons}>
//             <Link to="/Edit-Screen" className={styles.linkButton}>
//               <button className={styles.editbutton}>Edit</button>
//             </Link>
//             <button className={styles.deletebutton}>Delete</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AiConfiguration;

import React, { useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import styles from "./aiConfiguration.module.css";
import SideBarMenu from "../../sideMenu/sideBar";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

import AiIcon from "../../../assets/ai2-sidebar-png-output.png";
import PreviewScreen from "../PreviewAiConfigScreen/PreviewAiConfig";

interface CameraData {
  no: number;
  camera: string;
  group: string;
  aiModel: string;
  eventPriority: string;
  modelLiveSince: string;
  status: string;
}

const initialData: CameraData[] = [
  {
    no: 1,
    camera: "Cam 05",
    group: "Parking",
    aiModel: "LPR",
    eventPriority: "01",
    modelLiveSince: "25 Jan, 2023 - 5:25pm",
    status: "Online",
  },
  {
    no: 2,
    camera: "Cam 05",
    group: "Parking",
    aiModel: "LPR",
    eventPriority: "01",
    modelLiveSince: "25 Jan, 2023 - 5:25pm",
    status: "Offline",
  },
  {
    no: 3,
    camera: "Cam 05",
    group: "Parking",
    aiModel: "LPR",
    eventPriority: "01",
    modelLiveSince: "25 Jan, 2023 - 5:25pm",
    status: "Offline",
  },
  {
    no: 4,
    camera: "Cam 05",
    group: "Parking",
    aiModel: "LPR",
    eventPriority: "01",
    modelLiveSince: "25 Jan, 2023 - 5:25pm",
    status: "Online",
  },
];

const AiConfiguration: React.FC = () => {
  const [data, setData] = useState<CameraData[]>(initialData);
  const [newUser, setNewUser] = useState<Partial<CameraData>>({
    no: data.length + 1,
    camera: "",
    group: "",
    aiModel: "",
    eventPriority: "",
    modelLiveSince: "",
    status: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setNewUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleAddUser = () => {
    if (
      newUser.camera &&
      newUser.group &&
      newUser.aiModel &&
      newUser.eventPriority &&
      newUser.modelLiveSince &&
      newUser.status
    ) {
      setData([...data, newUser as CameraData]);
      setNewUser({
        no: data.length + 2,
        camera: "",
        group: "",
        aiModel: "",
        eventPriority: "",
        modelLiveSince: "",
        status: "",
      });
    }
  };

  const columns: TableColumn<CameraData>[] = [
    { name: "No.", selector: (row) => row.no, sortable: true },
    { name: "Camera", selector: (row) => row.camera, sortable: true },
    { name: "Group", selector: (row) => row.group, sortable: true },
    { name: "AI Model", selector: (row) => row.aiModel, sortable: true },
    {
      name: "Event Priority",
      selector: (row) => row.eventPriority,
      sortable: true,
    },
    {
      name: "Model Live Since",
      selector: (row) => row.modelLiveSince,
      sortable: true,
    },
    {
      name: "Status",
      cell: (row: CameraData) => (
        <div>
          <span
            className={`${styles.dot} ${
              row.status === "Online" ? styles.dotOnline : styles.dotOffline
            }`}
          ></span>
          {row.status}
        </div>
      ),
      sortable: true,
    },
    {
      name: "Action",
      cell: (row: CameraData) => (
        <div>
          <button className={styles.btnedit}>
            <FiEdit2 />
          </button>
          <button className={styles.btndelete}>
            <AiOutlineDelete />
          </button>
        </div>
      ),
    },
  ];

  return (
    <>
      <div></div>
      <SideBarMenu />
      <PreviewScreen />

      <div className={styles.container}>
        <div className={styles.aiHeaderContent}>
          <h1>
            <img src={AiIcon} alt="AI Icon" />
            Ai Configuration
          </h1>
        </div>{" "}
        <br />
        <div className={styles.formrow}>
          <div className={styles.formgroup}>
            <select
              name="group"
              value={newUser.group}
              onChange={handleInputChange}
              className={styles.formcontrol}
            >
              <option value="">Select Group</option>
              <option value="Parking">Parking</option>
            </select>
          </div>
          <div className={styles.formgroup}>
            <select
              name="camera"
              value={newUser.camera}
              onChange={handleInputChange}
              className={styles.formcontrol}
            >
              <option value="">Select Camera</option>
              <option value="Cam 05">Cam 05</option>
            </select>
          </div>
          <div className={styles.formgroup}>
            <select
              name="aiModel"
              value={newUser.aiModel}
              onChange={handleInputChange}
              className={styles.formcontrol}
            >
              <option value="">Select AI Model</option>
              <option value="LPR">LPR</option>
            </select>
          </div>
          <div className={styles.buttongroup}>
            <button onClick={handleAddUser} className={styles.btn}>
              ADD
            </button>
          </div>
        </div>
        <div className={styles.tableContainer}>
          <DataTable
            columns={columns}
            data={data}
            selectableRows
            pagination
            highlightOnHover
          />
          <div className={styles.bottomButtons}>
            <Link to="/Edit-Screen" className={styles.linkButton}>
              <button className={styles.editbutton}>Edit</button>
            </Link>
            <button className={styles.deletebutton}>Delete</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiConfiguration;
