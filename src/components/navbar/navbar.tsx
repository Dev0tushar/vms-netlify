{

// import { useEffect, useState } from "react";
// import { useAuth } from "../../Hooks/useAuth";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import defaultUserImage from "../../assets/userImage.svg";
// import companyIcon from "../../assets/companyIcon.svg";
// import styles from "./navbar.module.css";

// function Navbar() {
//   const { isAuthenticated, user, setUser } = useAuth();
//   const [email, setEmail] = useState<string | null>(""); // Track email instead of name
//   const [userImage, setUserImage] = useState<string>(defaultUserImage);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUserData = async () => {
//       if (isAuthenticated) {
//         try {
//           const response = await axios.get(
//             "http://127.0.0.1:8000/access/users"
//           );

//           console.log("API response:", response);

//           if (response.data && response.data.length > 0) {
//             const fetchedUser = response.data[0];
//             console.log("Fetched user: ", fetchedUser);
//             console.log("Username (for debugging): ", fetchedUser.name);

//             setEmail(fetchedUser.email);
//             setUserImage(fetchedUser.image || defaultUserImage);
//             setUser(fetchedUser);
//           } else {
//             console.error("User data not found in response.");
//           }
//         } catch (error) {
//           console.error("Error fetching user data:", error);
//         }
//       } else {
//         setEmail(null);
//         setUserImage(defaultUserImage);
//       }
//     };

//     fetchUserData();
//   }, [isAuthenticated, setUser]);

//   const handleProfileClick = () => {
//     if (isAuthenticated) {
//       navigate("/user-page");
//     } else {
//       navigate("/login");
//     }
//   };

//   return (
//     <div className={styles.navbar_cont}>
//       <div className={styles.companyDesc}>
//         <div style={{ display: "flex", alignItems: "center" }}>
//           <img src={companyIcon} alt="companyIcon" />
//           <div>
//             <Link to="/" style={{ display: "flex", textDecoration: "none" }}>
//               <span className={styles.companyName}>DATATUTE</span>
//             </Link>
//           </div>
//         </div>
//         {isAuthenticated && (
//           <div className={styles.deviceOnlineBox}>
//             <span className={styles.deviceOnlineHeader}>Device Online</span>
//             <span className={styles.deviceOnlineValue}>09/10</span>
//           </div>
//         )}
//       </div>

//       <div className={styles.navbar_right}>
//         <div className={styles.profile}>
//           {isAuthenticated ? (
//             <>
//               {console.log(isAuthenticated, email, "update")}
//               <div onClick={handleProfileClick}>
//                 <div className={styles.userName}>{email || "User"}</div>
//                 <div className={styles.userCont}>
//                   <img src={userImage} alt="User Avatar" />
//                 </div>
//               </div>
//             </>
//           ) : (
//             <Link to="/login">
//               <div className={styles.userName}>Login/Signup</div>
//             </Link>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
}
import { useEffect, useState } from "react";
import { useAuth } from "../../Hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import defaultUserImage from "../../assets/userImage.svg";
import companyIcon from "../../assets/companyIcon.svg";
import styles from "./navbar.module.css";

function Navbar() {
  const { isAuthenticated, user, setUser } = useAuth();
  const [name, setName] = useState<string | null>(null);
  const [userImage, setUserImage] = useState<string>(defaultUserImage);
  const navigate = useNavigate();
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchUserData = async () => {
      if (isAuthenticated && user?.name) {
        try {
          const response = await axios.get(
            `${API_BASE_URL}/access/users?email=${user.email}`
          );

          if (response.data.length > 0) {
            const fetchedUser = response.data.find(
              (dbUser: any) => dbUser.email === user.email
            );
            console.log("user Name: ", name);

            if (fetchedUser) {
              setUserImage(fetchedUser.image || defaultUserImage);
              setName(fetchedUser.name);
              setUser(fetchedUser);
              console.log(fetchedUser, "fetch user data");
            } else {
              console.error("User data not found for the provided email.");
            }
          } else {
            console.error("No user data returned.");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
  }, [isAuthenticated, user?.email, setUser]);

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
        {isAuthenticated && (
          <div className={styles.deviceOnlineBox}>
            <span className={styles.deviceOnlineHeader}>Device Online</span>
            <span className={styles.deviceOnlineValue}>09/10</span>
          </div>
        )}
      </div>

      <div className={styles.navbar_right}>
        <div className={styles.profile}>
          {isAuthenticated ? (
            <>
              <div onClick={handleProfileClick} className={styles.profileContainer}>
                <div className={styles.userName}>{user?.name || "User"}</div>
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
