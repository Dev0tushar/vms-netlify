

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import styles from "./filterBox.module.css";
// import { BsChevronDown } from "react-icons/bs";

// interface Camera {
//   camera_id: string;
//   name: string;
//   location: string;
// }

// interface Location {
//   name: string;
// }

// interface NvrProps {
//   title: string;
//   items: Camera[];
//   isOpen: boolean;
//   onClick: () => void;
// }

// const Nvr: React.FC<NvrProps> = ({ title, items, isOpen, onClick }) => {
//   return (
//     <div className={styles.nvr}>
//       <h3 className={styles.nvrtitle} onClick={onClick}>
//         {title}
//         <BsChevronDown
//           className={`${styles.ioIcon} ${isOpen ? styles.open : ""}`}
//         />
//       </h3>
//       <ul className={`${styles.nvrlist} ${isOpen ? styles.show : ""}`}>
//         {items.map((item, index) => (
//           <li key={index} className={styles.nvrlistitem}>
//             {`ID: ${item.camera_id} - Name: ${item.name}`}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const FilterBox: React.FC = () => {
//   const [cameraItems, setCameraItems] = useState<Camera[]>([]);
//   const [locations, setLocations] = useState<Record<string, string>>({});
//   const [activeSection, setActiveSection] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchCameraData = async () => {
//       try {
//         const cameraResponse = await axios.get("http://127.0.0.1:8000/config/cameras");
//         setCameraItems(cameraResponse.data);
//       } catch (error) {
//         console.error("Error fetching camera data:", error.message);
//       }
//     };

//     const fetchLocationData = async () => {
//       try {
//         const locationResponse = await axios.get("http://127.0.0.1:8000/config/locations");
//         const locationData = locationResponse.data;
 
//         const locationMap: Record<string, string> = {};
//         locationData.forEach((loc: Location) => {
//           locationMap[loc.name] = loc.name; 
//         });
//         setLocations(locationMap);
//       } catch (error) {
//         console.error("Error fetching location data:", error.message);
//       }
//     };

//     fetchCameraData();
//     fetchLocationData();
//   }, []);

//   const handleToggle = (section: string) => {
//     setActiveSection(activeSection === section ? null : section);
//   };

//   const groupedItems = cameraItems.reduce((acc, camera) => {
//     if (!acc[camera.location]) {
//       acc[camera.location] = [];
//     }
//     acc[camera.location].push(camera);
//     return acc;
//   }, {} as Record<string, Camera[]>);

//   return (
//     <div className={styles.container}>
//       <div className={styles.panel}>
//         {Object.keys(groupedItems).map(location => (
//           <Nvr
//             key={location}
//             title={locations[location] || location} 
//             items={groupedItems[location]}
//             isOpen={activeSection === location}
//             onClick={() => handleToggle(location)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FilterBox;





// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import styles from "./filterBox.module.css";
// import { BsChevronDown } from "react-icons/bs";

// interface Camera {
//   camera_id: string;
//   name: string;
//   location_id: string; 
// }

// interface Location {
//   location_id: string;
//   name: string; // Location name
// }

// interface NvrProps {
//   title: string;
//   items: Camera[];
//   isOpen: boolean;
//   onClick: () => void;
// }

// const Nvr: React.FC<NvrProps> = ({ title, items, isOpen, onClick }) => {
//   return (
//     <div className={styles.nvr}>
//       <h3 className={styles.nvrtitle} onClick={onClick}>
//         {title}
//         <BsChevronDown
//           className={`${styles.ioIcon} ${isOpen ? styles.open : ""}`}
//         />
//       </h3>
//       <ul className={`${styles.nvrlist} ${isOpen ? styles.show : ""}`}>
//         {items.map((item, index) => (
//           <li key={index} className={styles.nvrlistitem}>
          
//             {`${item.camera_id}  ,  ${item.name}`}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// interface FilterBoxProps{
//   onLocationSelect: (locationId: string) => void;
//   showCalendar?: boolean;
// }
// const FilterBox: React.FC<FilterBoxProps> = ({showCalendar}) => {
//   const [cameraItems, setCameraItems] = useState<Camera[]>([]);
//   const [locations, setLocations] = useState<Location[]>([]);
//   const [activeSection, setActiveSection] = useState<string | null>(null);

//   useEffect(() => {

//     const fetchCameraData = async () => {
//       try {
//         const cameraResponse = await axios.get("http://127.0.0.1:8000/config/cameras");
//         setCameraItems(cameraResponse.data);
//       } catch (error) {
//         console.error("Error fetching camera data:", error.message);
//       }
//     };

  
//     const fetchLocationData = async () => {
//       try {
//         const locationResponse = await axios.get("http://127.0.0.1:8000/config/locations");
//         setLocations(locationResponse.data);
//         console.log("Location data:", locationResponse.data);
//       } catch (error) {
//         console.error("Error fetching location data:", error.message);
//       }
//     };

//     fetchCameraData();
//     fetchLocationData();
//   }, []);


//   const getLocationName = (cameraLocationId: string) => {
//     const location = locations.find((loc) => loc.location_id === cameraLocationId);
//     return location ? location.name : "Unknown Location";
//   };


//   const groupedItems = cameraItems.reduce((acc, camera) => {
//     if (!acc[camera.location_id]) {
//       acc[camera.location_id] = [];
//     }
//     acc[camera.location_id].push(camera);
//     return acc;
//   }, {} as Record<string, Camera[]>);

//   const handleToggle = (section: string) => {
//     setActiveSection(activeSection === section ? null : section);
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.panel}>
//       {showCalendar && (
//           <div className={styles.dropdownContainer}>
//             <h3
//               className={styles.dropdownHeading}
//               onClick={() => handleToggle("Calendar")}
//               style={{ fontSize: "1rem" }}
//             >
//               Calendar
//               <BsChevronDown
//                 className={`${styles.ioIcon} ${
//                   activeSection === "Calendar" ? styles.open : ""
//                 }`}
//               />
//             </h3>
//             {activeSection === "Calendar" && (
//               <div className={styles.additionalContent}>
         
//                 <div>
//                   <label>
//                     <b>Date</b>
//                   </label>
//                   <div style={{ display: "flex" }}>
//                     <input type="number" placeholder="Start" />
//                     -
//                     <input type="number" placeholder="End" />
//                   </div>
//                 </div>
//                 <div>
//                   <label>
//                     <b>Time</b>
//                   </label>
//                   <div style={{ display: "flex" }}>
//                     <input type="number" placeholder="Start" />
//                     -
//                     <input type="number" placeholder="End" />
//                   </div>
//                 </div>
//                 <button className={styles.button}>Search</button>
//               </div>
//             )}
//           </div>
//         )}
//         {Object.keys(groupedItems).map((locationKey, index) => (
//           <Nvr
//             key={index}
//             title={getLocationName(locationKey)} 
//             items={groupedItems[locationKey]}
//             isOpen={activeSection === locationKey}
//             onClick={() => handleToggle(locationKey)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FilterBox;




// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import styles from "./filterBox.module.css";
// import { BsChevronDown } from "react-icons/bs";

// interface Camera {
//   camera_id: string;
//   name: string;
//   location_id: string; 
// }

// interface Location {
//   location_id: string;
//   name: string; // Location name
// }

// interface NvrProps {
//   title: string;
//   items: Camera[];
//   isOpen: boolean;
//   onClick: () => void;
// }

// const Nvr: React.FC<NvrProps> = ({ title, items, isOpen, onClick }) => {
//   return (
//     <div className={styles.nvr}>
//       <h3 className={styles.nvrtitle} onClick={onClick}>
//         {title}
//         <BsChevronDown
//           className={`${styles.ioIcon} ${isOpen ? styles.open : ""}`}
//         />
//       </h3>
//       <ul className={`${styles.nvrlist} ${isOpen ? styles.show : ""}`}>
//         {items.map((item, index) => (
//           <li key={index} className={styles.nvrlistitem}>
          
//             {`${item.camera_id}  ,  ${item.name}`}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// interface FilterBoxProps{
//   onLocationSelect: (locationId: string) => void;
//   onCameraDataUpdate: (cameraItems: Camera[]) => void;
//   showCalendar?: boolean;
// }
// const FilterBox: React.FC<FilterBoxProps> = ({onLocationSelect, onCameraDataUpdate, showCalendar}) => {
//   const [cameraItems, setCameraItems] = useState<Camera[]>([]);
//   const [locations, setLocations] = useState<Location[]>([]);
//   const [activeSection, setActiveSection] = useState<string | null>(null);

//   useEffect(() => {

//     const fetchCameraData = async () => {
//       try {
//         const cameraResponse = await axios.get("http://127.0.0.1:8000/config/cameras");
//         setCameraItems(cameraResponse.data);
//         onCameraDataUpdate(cameraResponse.data);
//       } catch (error) {
//         console.error("Error fetching camera data:", error.message);
//       }
//     };

  
//     const fetchLocationData = async () => {
//       try {
//         const locationResponse = await axios.get("http://127.0.0.1:8000/config/locations");
//         setLocations(locationResponse.data);
//         console.log("Location data:", locationResponse.data);
//       } catch (error) {
//         console.error("Error fetching location data:", error.message);
//       }
//     };

//     fetchCameraData();
//     fetchLocationData();
//   }, [onCameraDataUpdate]);


//   const handleToggle = (locationId: string) => {
//     setActiveSection(activeSection === locationId ? null : locationId);
//     onLocationSelect(locationId);
//   };

//   const getLocationName = (cameraLocationId: string) => {
//     const location = locations.find((loc) => loc.location_id === cameraLocationId);
//     return location ? location.name : "Unknown Location";
//   };


//   // const groupedItems = cameraItems.reduce((acc, camera) => {
//   //   if (!acc[camera.location_id]) {
//   //     acc[camera.location_id] = [];
//   //   }
//   //   acc[camera.location_id].push(camera);
//   //   return acc;
//   // }, {} as Record<string, Camera[]>);

//   const groupedItems = cameraItems.reduce((acc, camera) => {
//     if (!acc[camera.location_id]) {
//       acc[camera.location_id] = [];
//     }
//     acc[camera.location_id].push(camera);
//     return acc;
//   }, {} as Record<string, Camera[]>);

//   // const handleToggle = (section: string) => {
//   //   setActiveSection(activeSection === section ? null : section);
//   // };

//   return (
//     <div className={styles.container}>
//       <div className={styles.panel}>
//       {showCalendar && (
//           <div className={styles.dropdownContainer}>
//             <h3
//               className={styles.dropdownHeading}
//               onClick={() => handleToggle("Calendar")}
//               style={{ fontSize: "1rem" }}
//             >
//               Calendar
//               <BsChevronDown
//                 className={`${styles.ioIcon} ${
//                   activeSection === "Calendar" ? styles.open : ""
//                 }`}
//               />
//             </h3>
//             {activeSection === "Calendar" && (
//               <div className={styles.additionalContent}>
         
//                 <div>
//                   <label>
//                     <b>Date</b>
//                   </label>
//                   <div style={{ display: "flex" }}>
//                     <input type="number" placeholder="Start" />
//                     -
//                     <input type="number" placeholder="End" />
//                   </div>
//                 </div>
//                 <div>
//                   <label>
//                     <b>Time</b>
//                   </label>
//                   <div style={{ display: "flex" }}>
//                     <input type="number" placeholder="Start" />
//                     -
//                     <input type="number" placeholder="End" />
//                   </div>
//                 </div>
//                 <button className={styles.button}>Search</button>
//               </div>
//             )}
//           </div>
//         )}
//         {Object.keys(groupedItems).map((locationKey, index) => (
//           <Nvr
          
//             key={index}
//             title={getLocationName(locationKey)} 
//             items={groupedItems[locationKey]}
//             isOpen={activeSection === locationKey}
//             onClick={() => handleToggle(locationKey)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FilterBox;


import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./filterBox.module.css";
import { BsChevronDown } from "react-icons/bs";

interface Camera {
  camera_id: string;
  name: string;
  location_id: string; 
}

interface Location {
  location_id: string;
  name: string; // Location name
}

interface NvrProps {
  title: string;
  items: Camera[];
  isOpen: boolean;
  onClick: () => void;
}

const Nvr: React.FC<NvrProps> = ({ title, items, isOpen, onClick }) => {
  return (
    <div className={styles.nvr}>
      <h3 className={styles.nvrtitle} onClick={onClick}>
        {title}
        <BsChevronDown
          className={`${styles.ioIcon} ${isOpen ? styles.open : ""}`}
        />
      </h3>
      <ul className={`${styles.nvrlist} ${isOpen ? styles.show : ""}`}>
        {items.map((item, index) => (
          <li key={index} className={styles.nvrlistitem}>
            {`${item.camera_id}  ,  ${item.name}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

interface FilterBoxProps {
  showCalendar?: boolean;
  onLocationSelect?: (locationId: string) => void; // Add this prop
}

const FilterBox: React.FC<FilterBoxProps> = ({ showCalendar, onLocationSelect }) => {
  const [cameraItems, setCameraItems] = useState<Camera[]>([]);
  const [locations, setLocations] = useState<Location[]>([]);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const fetchCameraData = async () => {
      try {
        const cameraResponse = await axios.get("http://127.0.0.1:8000/config/cameras");
        setCameraItems(cameraResponse.data);
      } catch (error) {
        console.error("Error fetching camera data:", error.message);
      }
    };

    const fetchLocationData = async () => {
      try {
        const locationResponse = await axios.get("http://127.0.0.1:8000/config/locations");
        setLocations(locationResponse.data);
      } catch (error) {
        console.error("Error fetching location data:", error.message);
      }
    };

    fetchCameraData();
    fetchLocationData();
  }, []);

  const getLocationName = (cameraLocationId: string) => {
    const location = locations.find((loc) => loc.location_id === cameraLocationId);
    return location ? location.name : "Unknown Location";
  };

  const groupedItems = cameraItems.reduce((acc, camera) => {
    if (!acc[camera.location_id]) {
      acc[camera.location_id] = [];
    }
    acc[camera.location_id].push(camera);
    return acc;
  }, {} as Record<string, Camera[]>);

  const handleToggle = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
    if (onLocationSelect && section !== activeSection) {
      onLocationSelect(section);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.panel}>
        {showCalendar && (
          <div className={styles.dropdownContainer}>
            <h3
              className={styles.dropdownHeading}
              onClick={() => handleToggle("Calendar")}
              style={{ fontSize: "1rem" }}
            >
              Calendar
              <BsChevronDown
                className={`${styles.ioIcon} ${
                  activeSection === "Calendar" ? styles.open : ""
                }`}
              />
            </h3>
            {activeSection === "Calendar" && (
              <div className={styles.additionalContent}>
                <div>
                  <label>
                    <b>Date</b>
                  </label>
                  <div style={{ display: "flex" }}>
                    <input type="number" placeholder="Start" />
                    -
                    <input type="number" placeholder="End" />
                  </div>
                </div>
                <div>
                  <label>
                    <b>Time</b>
                  </label>
                  <div style={{ display: "flex" }}>
                    <input type="number" placeholder="Start" />
                    -
                    <input type="number" placeholder="End" />
                  </div>
                </div>
                <button className={styles.button}>Search</button>
              </div>
            )}
          </div>
        )}
        {Object.keys(groupedItems).map((locationKey, index) => (
          <Nvr
            key={index}
            title={getLocationName(locationKey)}
            items={groupedItems[locationKey]}
            isOpen={activeSection === locationKey}
            onClick={() => handleToggle(locationKey)}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterBox;
