import React from "react";
import styles from "./filterBox.module.css";

interface NvrProps {
  title: string;
  items: Array<{ name: string; active?: boolean; subItems?: string[] }>;
}

const Nvr: React.FC<NvrProps> = ({ title, items }) => {
  return (
    <div className={styles.nvr}>
      <h3 className={styles.nvrtitle}>{title}</h3>
      <ul className={styles.nvrlist}>
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

// const FilterBox: React.FC = () => {
//     const nvr1Items = [
//         { name: 'CAM 01', active: true },
//         { name: 'CAM 02' },
//         { name: 'CAM 03' },
//         { name: 'CAM 04' },

//     ];

//     const nvr2Items = [
//         { name: 'CH 01' },
//         { name: 'CH 02' },
//         { name: 'CH 03', subItems: ['GRP 1'] },
//         { name: 'CH 04' },
//     ];

interface FilterBoxProps {
  nvr1Items: Array<{ name: string; active?: boolean; subItems?: string[] }>;
  nvr2Items: Array<{ name: string; active?: boolean; subItems?: string[] }>;
}

const FilterBox: React.FC<FilterBoxProps> = ({ nvr1Items, nvr2Items }) => {
  return (
    <div className={styles.container}>
      <div className={styles.panel}>
        <Nvr title="NVR 1" items={nvr1Items} />
        <Nvr title="NVR 2" items={nvr2Items} />
      </div>
    </div>
  );
};

export default FilterBox;

// import React from "react";
// import styles from "./filterBox.module.css";

// interface NvrProps {
//   title: string;
//   items: Array<{ name: string; active?: boolean; subItems?: string[] }>;
// }

// const Nvr: React.FC<NvrProps> = ({ title, items }) => {
//   return (
//     <div className={styles.nvr}>
//       <h3 className={styles.nvrtitle}>{title}</h3>
//       <ul className={styles.nvrlist}>
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
