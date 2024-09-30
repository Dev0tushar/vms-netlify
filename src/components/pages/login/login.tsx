{
  // // import { useState } from "react";
  // // import { useNavigate } from "react-router-dom";
  // // import styles from "./login.module.css";
  // // import { Link } from "react-router-dom";
  // // import { useAuth } from "../../../Hooks/useAuth";
  // // import { logIn } from "../../../api/DataApi";
  // // const LoginForm: React.FC = () => {
  // //   const navigate = useNavigate();
  // //   const [email, setEmail] = useState<string>("");
  // //   const [password, setPassword] = useState<string>("");
  // //   const [loginMessage, setLoginMessage] = useState<string | null>(null);
  // //   const [errors, setErrors] = useState<any>({});
  // //   const [userData, setUserData] = useState<any>(null);
  // //   const { setIsAuthenticated } = useAuth();
  // //   const validate = () => {
  // //     const errors: any = {};
  // //     if (!email) {
  // //       errors.email = "Email is required";
  // //     } else if (!/\S+@\S+\.\S+/.test(email)) {
  // //       errors.email = "Email is invalid";
  // //     }
  // //     if (!password) {
  // //       errors.password = "Password is required";
  // //     }
  // //     setErrors(errors);
  // //     return Object.keys(errors).length === 0;
  // //   };
  // //   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  // //     e.preventDefault();
  // //     if (validate()) {
  // //       try {
  // //         const response = await logIn({ email });
  // //         console.log("UPDATE", email);
  // //         if (response.success) {
  // //           const user = response.data;
  // //           if (user && user.email === email) {
  // //             console.log("User logged in successfully", user);
  // //             setUserData(user);
  // //             setIsAuthenticated(true);
  // //             navigate("/");
  // //           } else {
  // //             setLoginMessage("Email not found. Please sign up.");
  // //             // navigate("/SignUpForm-screen");
  // //           }
  // //         } else {
  // //           setLoginMessage("Invalid login credentials.");
  // //         }
  // //       } catch (error) {
  // //         console.error("Login failed:", error);
  // //         setLoginMessage("Login failed. Please try again.");
  // //       }
  // //     }
  // //   };
  // //   return (
  // //     <div className="d-flex justify-content-center align-items-center vh-100">
  // //       <form
  // //         className={`form-group ${styles.loginContainer} ${styles.loginForm}`}
  // //         onSubmit={handleSubmit}
  // //       >
  // //         <h2>LOG IN</h2>
  // //         {loginMessage && <p>{loginMessage}</p>}
  // //         <h3 style={{ fontSize: "medium", marginRight: "auto" }}>
  // //           Enter Your details and Log in
  // //         </h3>
  // //         <div className={`form-group ${styles.inputGroup}`}>
  // //           <label>Email</label>
  // //           <input
  // //             type="text"
  // //             className="form-control"
  // //             placeholder="demo@gmail.com"
  // //             value={email}
  // //             onChange={(e) => setEmail(e.target.value)}
  // //           />
  // //           {errors.email && <span className={styles.error}>{errors.email}</span>}
  // //         </div>
  // //         <div className={`form-group ${styles.inputGroup}`}>
  // //           <label>Password</label>
  // //           <div className={styles.passwordWrapper}>
  // //             <input
  // //               type="password"
  // //               className="form-control"
  // //               placeholder="*********"
  // //               value={password}
  // //               onChange={(e) => setPassword(e.target.value)}
  // //             />
  // //           </div>
  // //           {errors.password && (
  // //             <span className={styles.error}>{errors.password}</span>
  // //           )}
  // //         </div>
  // //         <button type="submit" className={`  ${styles.loginButton}`}>
  // //           Log in
  // //         </button>
  // //         <h3 className={styles.registerLink} style={{ fontSize: "medium" }}>
  // //           Don't have an account? <Link to="/SignUpForm-screen">Sign up</Link>
  // //         </h3>
  // //       </form>
  // //     </div>
  // //   );
  // // };
  // // export default LoginForm;
  // import { useState, useEffect } from "react";
  // import { useNavigate } from "react-router-dom";
  // import axios from "axios";
  // import styles from "./login.module.css";
  // import { Link } from "react-router-dom";
  // import { useAuth } from "../../../Hooks/useAuth";
  // const LoginForm: React.FC = () => {
  //   const navigate = useNavigate();
  //   const [email, setEmail] = useState<string>("");
  //   const [password, setPassword] = useState<string>("");
  //   const [loginMessage, setLoginMessage] = useState<string | null>(null);
  //   const [errors, setErrors] = useState<any>({});
  //   const [fetchedUsers, setFetchedUsers] = useState<any[]>([]);
  //   const { setIsAuthenticated, setUser } = useAuth();
  //   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  //   useEffect(() => {
  //     const fetchUsers = async () => {
  //       try {
  //         const response = await axios.get(`${API_BASE_URL}/access/users`);
  //         setFetchedUsers(response.data);
  //         // console.log("Fetched users:", response.data);
  //       } catch (error) {
  //         console.error("Error fetching users data:", error);
  //       }
  //     };
  //     fetchUsers();
  //   }, []);
  //   const validate = () => {
  //     const errors: any = {};
  //     if (!email) {
  //       errors.email = "Email is required";
  //     } else if (!/\S+@\S+\.\S+/.test(email)) {
  //       errors.email = "Email is invalid";
  //     }
  //     if (!password) {
  //       errors.password = "Password is required";
  //     }
  //     setErrors(errors);
  //     return Object.keys(errors).length === 0;
  //   };
  //   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     if (validate()) {
  //       // console.log("Comparing email:", email);
  //       // console.log("Fetched users:", fetchedUsers);
  //       if (!fetchedUsers.length) {
  //         console.error("No users found. Make sure the API is returning data.");
  //         setLoginMessage("Error fetching users. Please try again later.");
  //         return;
  //       }
  //       const user = fetchedUsers.find(
  //         (user) => user.email.toLowerCase() === email.toLowerCase()
  //       );
  //       if (user) {
  //         // console.log("User logged in successfully", user);
  //         setIsAuthenticated(true);
  //         setUser(user);
  //         setLoginMessage(null);
  //         navigate("/");
  //       } else {
  //         console.log("Email not found in the database.");
  //         setLoginMessage("Email not found. Please sign up.");
  //       }
  //     }
  //   };
  //   return (
  //     <div className="d-flex justify-content-center align-items-center vh-100">
  //       <form
  //         className={`form-group ${styles.loginContainer} ${styles.loginForm}`}
  //         onSubmit={handleSubmit}
  //       >
  //         <h2>LOG IN</h2>
  //         {loginMessage && <p>{loginMessage}</p>}
  //         <h3 style={{ fontSize: "medium", marginRight: "auto" }}>
  //           Enter Your details and Log in
  //         </h3>
  //         <div className={`form-group ${styles.inputGroup}`}>
  //           <label>Email</label>
  //           <input
  //             type="text"
  //             className="form-control"
  //             placeholder="demo@gmail.com"
  //             value={email}
  //             onChange={(e) => setEmail(e.target.value)}
  //           />
  //           {errors.email && <span className={styles.error}>{errors.email}</span>}
  //         </div>
  //         <div className={`form-group ${styles.inputGroup}`}>
  //           <label>Password </label>
  //           <div className={styles.passwordWrapper}>
  //             <input
  //               type="password"
  //               className="form-control"
  //               placeholder="*********"
  //               value={password}
  //               onChange={(e) => setPassword(e.target.value)}
  //             />
  //             {errors.password && (
  //               <span className={styles.error}>{errors.password}</span>
  //             )}
  //           </div>
  //         </div>
  //         <button type="submit" className={`  ${styles.loginButton}`}>
  //           Log in
  //         </button>
  //         <h3 className={styles.registerLink} style={{ fontSize: "medium" }}>
  //           Don't have an account? <Link to="/SignUpForm-screen">Sign up</Link>
  //         </h3>
  //       </form>
  //     </div>
  //   );
  // };
  // export default LoginForm;
}

// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import styles from "./login.module.css";
// import { Link } from "react-router-dom";
// import { useAuth } from "../../../Hooks/useAuth";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const LoginForm: React.FC = ({}) => {
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [errors, setErrors] = useState<any>({});
//   const [fetchedUsers, setFetchedUsers] = useState<any[]>([]);

//   const { setIsAuthenticated, setUser } = useAuth();
//   const navigate = useNavigate();
//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get(`${API_BASE_URL}/access/users`);
//         setFetchedUsers(response.data);
//       } catch (error) {
//         console.error("Error fetching users data:", error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   const validate = () => {
//     const errors: any = {};
//     if (!email) {
//       errors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       errors.email = "Email is invalid";
//     }
//     if (!password) {
//       errors.password = "Password is required";
//     }
//     setErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (validate()) {
//       if (!fetchedUsers.length) {
//         toast.error("Error fetching users. Please try again later.");
//         return;
//       }

//       const user = fetchedUsers.find(
//         (user) => user.email.toLowerCase() === email.toLowerCase()
//       );

//       if (user) {
//         localStorage.setItem("accessToken", "abcd");
//         setIsAuthenticated(true);
//         // setIsAuthenticate(true);
//         console.log();
//         setUser(user);
//         console.log("User logged in successfully", user);

//         setTimeout(() => {
//           navigate("/");
//         }, 1500);
//         // toast.success("User login successful!")

//         // onClose: () => navigate("/"),
//         // });
//       } else {
//         toast.error("You have no account. Please sign up.");
//         setIsAuthenticated(false);
//       }
//     }
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100">
//       <form
//         className={`form-group ${styles.loginContainer} ${styles.loginForm}`}
//         onSubmit={handleSubmit}
//       >
//         <h2>LOG IN</h2>
//         <h3 style={{ fontSize: "medium", marginRight: "auto" }}>
//           Enter Your details and Log in
//         </h3>

//         <div className={`form-group ${styles.inputGroup}`}>
//           <label>Email</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="demo@gmail.com"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           {errors.email && <span className={styles.error}>{errors.email}</span>}
//         </div>
//         <div className={`form-group ${styles.inputGroup}`}>
//           <label>Password </label>
//           <div className={styles.passwordWrapper}>
//             <input
//               type="password"
//               className="form-control"
//               placeholder="*********"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             {errors.password && (
//               <span className={styles.error}>{errors.password}</span>
//             )}
//           </div>
//         </div>
//         <button type="submit" className={`  ${styles.loginButton}`}>
//           Log in
//         </button>
//         <h3 className={styles.registerLink} style={{ fontSize: "medium" }}>
//           Don't have an account? <Link to="/SignUpForm-screen">Sign up</Link>
//         </h3>
//       </form>
//       <ToastContainer />
//     </div>
//   );
// };

// export default LoginForm;


// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import styles from "./login.module.css";
// import { Link } from "react-router-dom";
// import { useAuth } from "../../../Hooks/useAuth";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// interface LoginFormProps {
//   setAuthenticate: React.Dispatch<React.SetStateAction<boolean>>;
// }

// const LoginForm: React.FC<LoginFormProps> = ({setAuthenticate}) => {
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [errors, setErrors] = useState<any>({});
//   const [fetchedUsers, setFetchedUsers] = useState<any[]>([]);
  
//   const { setIsAuthenticated, setUser } = useAuth();
//   const navigate = useNavigate();
//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//   // Fetch user data from the API on component mount
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get(`${API_BASE_URL}/access/users`);
//         setFetchedUsers(response.data);
//       } catch (error) {
//         console.error("Error fetching users data:", error);
//         toast.error("Error fetching users. Please try again later.");
//       }
//     };
//     fetchUsers();
//   }, []);

//   // Validation function for form fields
//   const validate = () => {
//     const errors: any = {};
//     if (!email) {
//       errors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       errors.email = "Email is invalid";
//     }
//     if (!password) {
//       errors.password = "Password is required";
//     }
//     setErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   // Handle form submission
//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (validate()) {
//       if (!fetchedUsers.length) {
//         toast.error("Error fetching users. Please try again later.");
//         return;
//       }

//       const user = fetchedUsers.find(
//         (user) => user.email.toLowerCase() === email.toLowerCase()
//       );

//       if (user) {
      
//         localStorage.setItem("accessToken", "abcd");
//         setIsAuthenticated(true);
//         setAuthenticate(true)
//         setUser(user); 
//         console.log("User logged in successfully", user);

       
//         // setTimeout(() => {
//           navigate("/");
//         // }, 1000);
//         toast.success("User login successful!");
//       } else {
//         toast.error("You have no account. Please sign up.");
//         setIsAuthenticated(false);
//       }
//     }
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100">
//       <form
//         className={`form-group ${styles.loginContainer} ${styles.loginForm}`}
//         onSubmit={handleSubmit}
//       >
//         <h2>LOG IN</h2>
//         <h3 style={{ fontSize: "medium", marginRight: "auto" }}>
//           Enter your details and log in
//         </h3>

//         <div className={`form-group ${styles.inputGroup}`}>
//           <label>Email</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="demo@gmail.com"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           {errors.email && <span className={styles.error}>{errors.email}</span>}
//         </div>

//         <div className={`form-group ${styles.inputGroup}`}>
//           <label>Password</label>
//           <div className={styles.passwordWrapper}>
//             <input
//               type="password"
//               className="form-control"
//               placeholder="*********"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             {errors.password && (
//               <span className={styles.error}>{errors.password}</span>
//             )}
//           </div>
//         </div>

//         <button type="submit" className={`${styles.loginButton}`}>
//           Log in
//         </button>

//         <h3 className={styles.registerLink} style={{ fontSize: "medium" }}>
//           Don't have an account? <Link to="/SignUpForm-screen">Sign up</Link>
//         </h3>
//       </form>
//       <ToastContainer />
//     </div>
//   );
// };

// export default LoginForm;




import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./login.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../../Hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface LoginFormProps {
  setAuthenticate: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginForm: React.FC<LoginFormProps> = ({ setAuthenticate }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<any>({});
  const [fetchedUsers, setFetchedUsers] = useState<any[]>([]);

  const { setIsAuthenticated, setUser } = useAuth();
  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  // Fetch user data from the API on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/access/users`);
        setFetchedUsers(response.data);
      } catch (error) {
        console.error("Error fetching users data:", error);
        toast.error("Error fetching users. Please try again later.");
      }
    };
    fetchUsers();
  }, [API_BASE_URL]);

  // Function to generate a mock token (replace this with actual token generation logic from API)
  const generateToken = () => {
    // This is a placeholder for a JWT or token returned from an authentication API
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"; // Mock JWT token
    return token;
  };

  // Validation function for form fields
  const validate = () => {
    const errors: any = {};
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }
    if (!password) {
      errors.password = "Password is required";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission and authentication
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validate()) {
      if (!fetchedUsers.length) {
        toast.error("Error fetching users. Please try again later.");
        return;
      }

      // Check if user exists based on email
      const user = fetchedUsers.find(
        (user) => user.email.toLowerCase() === email.toLowerCase()
      );

      if (user) {
        // Generate a new token (replace with actual API call to get the token)
        const token = generateToken();
        localStorage.setItem("accessToken", token); // Store the token in localStorage

        setIsAuthenticated(true); // Mark user as authenticated
        setAuthenticate(true);    // Set parent authentication state
        setUser(user);            // Store user info in context

        console.log("User logged in successfully", user);
        toast.success("User login successful!");

        navigate("/");  // Redirect to homepage or dashboard
      } else {
        toast.error("You have no account. Please sign up.");
        setIsAuthenticated(false);
      }
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form
        className={`form-group ${styles.loginContainer} ${styles.loginForm}`}
        onSubmit={handleSubmit}
      >
        <h2>LOG IN</h2>
        <h3 style={{ fontSize: "medium", marginRight: "auto" }}>
          Enter your details and log in
        </h3>

        <div className={`form-group ${styles.inputGroup}`}>
          <label>Email</label>
          <input
            type="text"
            className="form-control"
            placeholder="demo@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </div>

        <div className={`form-group ${styles.inputGroup}`}>
          <label>Password</label>
          <div className={styles.passwordWrapper}>
            <input
              type="password"
              className="form-control"
              placeholder="*********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <span className={styles.error}>{errors.password}</span>
            )}
          </div>
        </div>

        <button type="submit" className={`${styles.loginButton}`}>
          Log in
        </button>

        <h3 className={styles.registerLink} style={{ fontSize: "medium" }}>
          Don't have an account? <Link to="/SignUpForm-screen">Sign up</Link>
        </h3>
      </form>
      <ToastContainer />
    </div>
  );
};

export default LoginForm;
