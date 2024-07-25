import React from "react";
import styles from "./configuration.module.css";

export interface configArrType {
  icon: string;
  header: string;
}

function Configuration({
  heading,
  config_arr,
}: {
  heading: string;
  config_arr: configArrType[];
}) {
  return (
    <div className={styles.container}>
      <div className={styles.configHeader}>{heading}</div>
      <div className={styles.flex}>
        {config_arr.map((el) => {
          return (
            <div className={styles.flexItemBox}>
              <div className={styles.iconBox}>
                <img className={styles.flexItemIcon} src={el.icon} />
              </div>
              <div>
                <h1 className={styles.flexItemHeader}>{el.header}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Configuration;
