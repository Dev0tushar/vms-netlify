// // // import React from "react";
// // import styles from "./filterBox.module.css";

// // interface NvrProps {
// //   title: string;
// //   items: Array<{ name: string; active?: boolean; subItems?: string[] }>;
// // }

// // const Nvr: React.FC<NvrProps> = ({ title, items }) => {
// //   return (
// //     <div className={styles.nvr}>
// //       <h3 className={styles.nvrtitle}>{title}</h3>
// //       <ul className={styles.nvrlist}>
// //         {items.map((item, index) => (
// //           <li key={index} className={styles.nvrlistitem}>
// //             {item.name}
// //             {item.subItems && (
// //               <ul className={styles.nvrsublist}>
// //                 {item.subItems.map((subItem, subIndex) => (
// //                   <li
// //                     key={subIndex}
// //                     className={`${styles.nvrsublistitem} ${
// //                       item.active ? styles.active : ""
// //                     }`}
// //                   >
// //                     {subItem}
// //                   </li>
// //                 ))}
// //               </ul>
// //             )}
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // // const FilterBox: React.FC = () => {
// // //     const nvr1Items = [
// // //         { name: 'CAM 01', active: true },
// // //         { name: 'CAM 02' },
// // //         { name: 'CAM 03' },
// // //         { name: 'CAM 04' },

// // //     ];

// // //     const nvr2Items = [
// // //         { name: 'CH 01' },
// // //         { name: 'CH 02' },
// // //         { name: 'CH 03', subItems: ['GRP 1'] },
// // //         { name: 'CH 04' },
// // //     ];

// // interface FilterBoxProps {
// //   nvr1Items: Array<{ name: string; active?: boolean; subItems?: string[] }>;
// //   nvr2Items: Array<{ name: string; active?: boolean; subItems?: string[] }>;
// // }

// // const FilterBox: React.FC<FilterBoxProps> = ({ nvr1Items, nvr2Items }) => {
// //   return (
// //     <div className={styles.container}>
// //       <div className={styles.panel}>
// //         <Nvr title="NVR 1" items={nvr1Items} />
// //         <Nvr title="NVR 2" items={nvr2Items} />
// //       </div>
// //     </div>
// //   );
// // };

// // export default FilterBox;

// import React, { useState } from "react";
// import styles from "./filterBox.module.css";
// import { IoIosArrowDropdownCircle } from "react-icons/io";

// interface NvrProps {
//   title: string;
//   items: Array<{ name: string; active?: boolean; subItems?: string[] }>;
// }

// const Nvr: React.FC<NvrProps> = ({ title, items }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className={styles.nvr}>
//       <h3 className={styles.nvrtitle} onClick={toggleDropdown}>
//         {title}
//         <IoIosArrowDropdownCircle className={styles.ioIcon} />
//       </h3>
//       <ul className={`${styles.nvrlist} ${isOpen ? styles.show : ""}`}>
//         {items.map((item, index) => (
//           <li key={index} className={styles.nvrlistitem}>
//             {item.name}
//             {item.subItems && (
//               <ul className={styles.nvrsublist}>
//                 {item.subItems.map((subItem, subIndex) => (
//                   <li
//                     key={subIndex}
//                     className={`${styles.nvrsublistitem} ${
//                       item.active ? styles.active : ""
//                     }`}
//                   >
//                     {subItem}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// interface FilterBoxProps {
//   nvr1Items: Array<{ name: string; active?: boolean; subItems?: string[] }>;
//   nvr2Items: Array<{ name: string; active?: boolean; subItems?: string[] }>;
// }

// const FilterBox: React.FC<FilterBoxProps> = ({ nvr1Items, nvr2Items }) => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.panel}>
//         <Nvr title="NVR 1" items={nvr1Items} />
//         <Nvr title="NVR 2" items={nvr2Items} />
//       </div>
//     </div>
//   );
// };

// export default FilterBox;

import React, { useState } from "react";
import styles from "./filterBox.module.css";
import { BsChevronDown } from "react-icons/bs";

interface NvrProps {
  title: string;
  items: Array<{ name: string; active?: boolean; subItems?: string[] }>;
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
            {item.name}
            {item.subItems && (
              <ul className={styles.nvrsublist}>
                {item.subItems.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    className={`${styles.nvrsublistitem} ${
                      item.active ? styles.active : ""
                    }`}
                  >
                    {subItem}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

interface FilterBoxProps {
  nvr1Items: Array<{ name: string; active?: boolean; subItems?: string[] }>;
  nvr2Items: Array<{ name: string; active?: boolean; subItems?: string[] }>;
  filterOptions?: string;
  additionalContent?: React.ReactNode; // Additional prop for custom JSX
  showCalendar?: boolean; // New prop to control visibility of Calendar
}

const FilterBox: React.FC<FilterBoxProps> = ({
  nvr1Items,
  nvr2Items,
  filterOptions,
  additionalContent,
  showCalendar,
}) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleToggle = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const toggleAdditionalContent = () => {
    setActiveSection(activeSection === "Calendar" ? null : "Calendar");
  };

  return (
    <div className={styles.container}>
      <div className={styles.panel}>
        {showCalendar && (
          <div className={styles.dropdownContainer}>
            <h3
              className={styles.dropdownHeading}
              onClick={toggleAdditionalContent}
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
        <Nvr
          title="NVR 1"
          items={nvr1Items}
          isOpen={activeSection === "NVR 1"}
          onClick={() => handleToggle("NVR 1")}
        />
        <Nvr
          title="NVR 2"
          items={nvr2Items}
          isOpen={activeSection === "NVR 2"}
          onClick={() => handleToggle("NVR 2")}
        />
      </div>
    </div>
  );
};

export default FilterBox;
