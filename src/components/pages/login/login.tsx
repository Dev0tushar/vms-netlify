

// import { useState } from "react";
// import { useAuth } from "../../../context/AuthContext";
// import { loginUser } from "../../../api/DataApi";
// import styles from "./login.module.css";
// import { Link, useNavigate } from "react-router-dom";

// const LoginForm: React.FC = () => {
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [formErrors, setFormErrors] = useState<any>({});
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const validate = () => {
//     const errors: any = {};
//     if (!email) errors.email = "Email is required";
//     else if (!/\S+@\S+\.\S+/.test(email)) errors.email = "Email is invalid";
//     if (!password) errors.password = "Password is required";
//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   // const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
//   //   e.preventDefault();
//   //   if (validate()) {
//   //     try {
//   //       const userData = await loginUser(email, password);
//   //       if (userData.userId){
//   //         login(userData);
//   //         console.log("User logged in successfully", userData);
//   //       } else {
//   //         console.log("Login failed: No userId returned");

//   //       }

//   //     } catch (error) {
//   //       console.error("Login failed", error);
//   //     }
//   //   }
//   // };

//   const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (validate()) {
//       try {
//         const userData = await loginUser(email, password);
//         login(userData); // Store the logged-in user data in context
//         console.log("User logged in successfully", userData);
//         navigate("/"); // Redirect to the homepage after successful login
//       } catch (error) {
//         console.error("Login failed", error);
//       }
//     }
//   };

//   return (
//     <div className={`d-flex justify-content-center align-items-center vh-100`}>
//       <form className={`form-group ${styles.loginContainer}`} onSubmit={handleLogin}>
//         <h2>LOG IN</h2>
//         <h3 style={{ fontSize: "medium", marginRight: "auto" }}>
//           Enter Your details and Log in
//         </h3>

//         <div className={`form-group ${styles.inputGroup}`}>
//           <label>Username or Email</label>
//           <input
//             type="text"
//             className={`form-control ${formErrors.email ? "is-invalid" : ""}`}
//             placeholder="demo@gmail.com"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
//         </div>

//         <div className={`form-group ${styles.inputGroup}`}>
//           <label>Password</label>
//           <div className={styles.passwordWrapper}>
//             <input
//               type="password"
//               className={`form-control ${formErrors.password ? "is-invalid" : ""}`}
//               placeholder="****"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             {formErrors.password && <div className="invalid-feedback">{formErrors.password}</div>}
//           </div>
//         </div>

//         <button type="submit" className={styles.loginButton}>
//           LOG IN
//         </button>
//         <p>
//           Don’t have an account?
//           <Link to="/SignUpForm-screen">Sign Up</Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.css";
import { loginUser } from "../../../context/AuthContext";
import { Link } from "react-router-dom";

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const validate = () => {
    const errors: any = {};
    if (!email) errors.email = "Email is required";
    if (!password) errors.password = "Password is required";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await loginUser({ email, password });
        console.log("User logged in successfully", response);
        navigate("/");
        // Save token, redirect to dashboard, etc.
      } catch (error) {
        console.error("Login failed:", error);
      }
    }
  };

  return (
    <div className={`d-flex justify-content-center align-items-center vh-100`}>
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
          {formErrors.email && (
            <span className={styles.error}>{formErrors.email}</span>
          )}
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
          {formErrors.password && (
            <span className={styles.error}>{formErrors.password}</span>
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
