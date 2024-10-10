import { useEffect, useState } from "react";
import { useAuth } from "../../Hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
import // defaultUserImage,
userImage from "../../assets/userImage.svg";
import companyIcon from "../../assets/companyIcon.svg";
import styles from "./navbar.module.css";

function Navbar() {
  const {
    isAuthenticated,
    user,
    setUser,
    onlineDeviceCount,
    totalDeviceCount,
  } = useAuth();
  const navigate = useNavigate();

  {
    // const [name, setName] = useState<string | null>(null);
    // const [userImage, setUserImage] = useState<string>(defaultUserImage);
    // const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    // useEffect(() => {
    //   const fetchUserData = async () => {
    //     if (isAuthenticated && user?.name) {
    //       try {
    //         const response = await axios.get(
    //           `${API_BASE_URL}/access/users?email=${user.email}`
    //         );
    //         if (response.data.length > 0) {
    //           const fetchedUser = response.data.find(
    //             (dbUser: any) => dbUser.email === user.email
    //           );
    //           console.log("user Name: ", name);
    //           if (fetchedUser) {
    //             setUserImage(fetchedUser.image || defaultUserImage);
    //             setName(fetchedUser.name);
    //             setUser(fetchedUser);
    //             // localStorage.console.log(fetchedUser, "fetch user data");
    //             console.log(fetchedUser, "fetch user data");
    //           } else {
    //             console.error("User data not found for the provided email.");
    //           }
    //         } else {
    //           console.error("No user data returned.");
    //         }
    //       } catch (error) {
    //         console.error("Error fetching user data:", error);
    //       }
    //     }
    //   };
    //   fetchUserData();
    // }, [isAuthenticated, user?.email, setUser]);
  }

  const capitalizeFirstLetter = (name: string) => {
    if (!name) return "";
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  };

  useEffect(() => {
    console.log("User data:", user);
    console.log("Navbar - Is Authenticated: ", isAuthenticated);
  }, [isAuthenticated, user]);
  // console.log("hello", user);
  const handleProfileClick = () => {
    if (isAuthenticated) {
      navigate("/user-page");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className={styles.navbar_cont}>
      <div className={styles.companyDesc}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={companyIcon} alt="companyIcon" />
          <div>
            <Link to="/" style={{ display: "flex", textDecoration: "none" }}>
              <span className={styles.companyName}>DATATUTE</span>
            </Link>
          </div>
        </div>
        {isAuthenticated && onlineDeviceCount > 0 && (
          <div className={styles.deviceOnlineBox}>
            <span className={styles.deviceOnlineHeader}>Device Online</span>
            <span
              className={styles.deviceOnlineValue}
            >{`${onlineDeviceCount}/${totalDeviceCount}`}</span>
          </div>
        )}
      </div>

      <div className={styles.navbar_right}>
        <div className={styles.profile}>
          {isAuthenticated ? (
            <>
              <div
                onClick={handleProfileClick}
                className={styles.profileContainer}
              >
                <div className={styles.userName}>
                  <span className={styles.welcomeMessage}> Welcome</span>{" "}
                  {capitalizeFirstLetter(user?.name || "User")}
                </div>
                <div className={styles.userCont}>
                  <img src={userImage} alt="User Avatar" />
                </div>
              </div>
            </>
          ) : (
            <Link to="/login">
              <div className={styles.userName}>Login/Signup</div>
              <div className={styles.userCont}>
                {/* <img src={defaultUserImage} alt="Default Avatar" /> */}
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
