import React from "react" ;
import styles from "./home.module.css"
import Navbar from "../../components/navbar/navbar";
import Configuration from "../../components/configuration /configuration";
import { configArrType } from "../../components/configuration /configuration";
import liveIcon from "../../assets/liveIcon.svg";
import playIcon from "../../assets/playIcon.svg";
import vectorIcon from "../../assets/vectorIcon.svg";
import engine_warningIcon from "../../assets/engine_workingIcon.svg";

function Home() {

    let operation_arr : configArrType[] = [{
        icon :liveIcon,
        header : "Live View"
    },
    {
        icon :playIcon,
        header : "Play Back"
    },
    {
        icon :vectorIcon,
        header : "Report"
    },
    {
        icon :engine_warningIcon,
        header : "Alert"
    }
] ;

let config_arr : configArrType[] = [{
    icon :liveIcon,
    header : "Device"
},
{
    icon :playIcon,
    header : "AI"
},
{
    icon :vectorIcon,
    header : "User"
}

] ;


    return (
        <div className={styles.container}>
            <Navbar/>
            <div className={styles.dashboardBox}>
                <Configuration heading = "Operation" config_arr = {operation_arr}/>
                <Configuration heading = "Configuration" config_arr = {config_arr}/>

            </div>

        </div>
    )
}

export default Home ; 