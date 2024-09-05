// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import styles from "./login.module.css";
// // import { loginUser } from "../../../context/AuthContext";
// import { Link } from "react-router-dom";

// import { useAuth } from "../../../Hooks/useAuth";
// import { logIn } from "../../../api/DataApi";

// const LoginForm: React.FC = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   // const [formErrors, setFormErrors] = useState({
//   //   email: "",
//   //   password: "",
//   // });
//   const [errors, setErrors] = useState<any>({});
//   const { login } = useAuth();

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
//       try {
//         const response = await logIn({ email, password});
//         if (response.status) {
//           console.log("User logged in successfully", response);
//           navigate("/");
//         } else {
//           alert("Please create an account or sign up first.");
//           // navigate("/SignUpForm-screen");
//         }
//       } catch (error) {
//         console.error("Login failed:", error);
//       }
//     }
//   };

//   return (
//     <div className={`d-flex justify-content-center align-items-center vh-100`}>
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
//           <label>Password</label>
//           <div className={styles.passwordWrapper}>
//             <input
//               type="password"
//               className="form-control"
//               placeholder="****"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           {errors.password && (
//             <span className={styles.error}>{errors.password}</span>
//           )}
//         </div>

//         <button
//           type="submit"
//           className={`btn btn-primary ${styles.loginButton}`}
//         >
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




import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../../Hooks/useAuth";
import { logIn } from "../../../api/DataApi";

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<any>({});
  const { login } = useAuth();

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      
      const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers") || "[]");

      const userExists = registeredUsers.some((user: any) => user.email === email);

      if (!userExists) {
        alert("Please create an account or sign up first.");
        // navigate("/SignUpForm-screen");
        return;
      }

      try {
        const response = await logIn({ email, password });
        if (!response.status) {
          console.log("User logged in successfully", response);
          navigate("/");
        } 
      } catch (error) {
        console.error("Login failed:", error);
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
          Enter Your details and Log in
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
              placeholder="****"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {errors.password && (
            <span className={styles.error}>{errors.password}</span>
          )}
        </div>

        <button
          type="submit"
          className={`btn btn-primary ${styles.loginButton}`}
        >
          Log in
        </button>
        <h3 className={styles.registerLink} style={{ fontSize: "medium" }}>
          Don't have an account? <Link to="/SignUpForm-screen">Sign up</Link>
        </h3>
      </form>
    </div>
  );
};

export default LoginForm;



// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import styles from "./login.module.css";
// import { Link } from "react-router-dom";
// import { useAuth } from "../../../Hooks/useAuth";
// import { logIn } from "../../../api/DataApi";

// const LoginForm: React.FC = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [errors, setErrors] = useState<any>({});
//   const { login } = useAuth();
//   const [showAlert, setShowAlert] = useState(false);
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
// useEffect(()=>{
//   const isSignedUp=localStorage.getItem('isSignedUp')
//   if(isSignedUp){
//     setShowAlert(false);

//   } else {
//     setShowAlert(true)
//   }
// },[])
//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (validate()) {
//       try {
//         const response = await logIn({ email, password });
//         console.log("API Response:", response);

//         if (response && response.data && response.data.success) {

//           console.log("User logged in successfully", response);
//           login(response.data.user);
//           navigate("/");
//         } else {
//           alert("Invalid account or first create an account by filling the signup form");
//         }
//       } catch (error) {
//         console.error("Login failed:", error);
//         alert("Invalid account or first create an account by filling the signup form");
//       }
//     }
//   };

//   return (
//     <div className={`d-flex justify-content-center align-items-center vh-100`}>
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
//           <label>Password</label>
//           <div className={styles.passwordWrapper}>
//             <input
//               type="password"
//               className="form-control"
//               placeholder="****"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           {errors.password && (
//             <span className={styles.error}>{errors.password}</span>
//           )}
//         </div>

//         <button
//           type="submit"
//           className={` ${styles.loginButton}`}
//         >
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
