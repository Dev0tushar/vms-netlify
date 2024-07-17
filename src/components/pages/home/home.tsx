import React from "react" ;
import styles from "./home.module.css"
import Configuration, {configArrType} from "../../configuration /configuration";
import liveIcon from "../../../assets/liveIcon.svg";
import playIcon from "../../../assets/playIcon.svg";
import vectorIcon from "../../../assets/vectorIcon.svg";
import engine_warningIcon from "../../../assets/engine_workingIcon.svg";

function Home() {

    const operation_arr : configArrType[] = [{
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

const config_arr : configArrType[] = [{
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
            
            <div className={styles.dashboardBox}>
                <Configuration heading = "Operation" config_arr = {operation_arr}/>
                <Configuration heading = "Configuration" config_arr = {config_arr}/>

            </div>

        </div>
    )
}

export default Home ; 