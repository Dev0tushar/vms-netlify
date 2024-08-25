// import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import styles from "./SignUp.module.css";

// const SignUpForm: React.FC = () => {
//   const [formValues, setFormValues] = useState({
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     phoneNumber: "",
//   });

//   const [formErrors, setFormErrors] = useState({
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     phoneNumber: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormValues({ ...formValues, [name]: value });
//   };

//   const validate = () => {
//     const errors: any = {};
//     if (!formValues.username) errors.username = "Username is required";
//     if (!formValues.email) {
//       errors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
//       errors.email = "Email is invalid";
//     }
//     if (!formValues.password) errors.password = "Password is required";
//     if (formValues.password !== formValues.confirmPassword) {
//       errors.confirmPassword = "Passwords do not match";
//     }
//     if (!formValues.confirmPassword)
//       errors.confirmPassword = "Confirm Password is required";
//     if (!formValues.phoneNumber)
//       errors.phoneNumber = "Phone Number is required";
//     else if (!/^\d{10}$/.test(formValues.phoneNumber)) {
//       errors.phoneNumber = "Phone Number must be 10 digits";
//     }
//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (validate()) {
//       console.log("Form submitted successfully", formValues);
//     }
//   };

//   return (
//     <div className={`${styles.container} container-fluid`}>
//       <div className={`${styles.formWrapper} row justify-content-center`}>
//         <div>
//           <form className={styles.form} onSubmit={handleSubmit}>
//             <div className={styles.formHeader}>
//               <h2>Sign Up</h2>
//             </div>
//             <div className="form-group">
//               <label htmlFor="username">Username</label>
//               <input
//                 className="form-control"
//                 type="text"
//                 name="username"
//                 id="username"
//                 value={formValues.username}
//                 onChange={handleChange}
//               />
//               {formErrors.username && (
//                 <span className={styles.error}>{formErrors.username}</span>
//               )}
//             </div>

//             <div className="form-group">
//               <label htmlFor="email">Email</label>
//               <input
//                 className="form-control"
//                 type="email"
//                 name="email"
//                 id="email"
//                 value={formValues.email}
//                 onChange={handleChange}
//               />
//               {formErrors.email && (
//                 <span className={styles.error}>{formErrors.email}</span>
//               )}
//             </div>

//             <div className="form-group">
//               <label htmlFor="password">Password</label>
//               <input
//                 className="form-control"
//                 type="password"
//                 name="password"
//                 id="password"
//                 value={formValues.password}
//                 onChange={handleChange}
//               />
//               {formErrors.password && (
//                 <span className={styles.error}>{formErrors.password}</span>
//               )}
//             </div>

//             <div className="form-group">
//               <label htmlFor="confirmPassword">Confirm Password</label>
//               <input
//                 className="form-control"
//                 type="password"
//                 name="confirmPassword"
//                 id="confirmPassword"
//                 value={formValues.confirmPassword}
//                 onChange={handleChange}
//               />
//               {formErrors.confirmPassword && (
//                 <span className={styles.error}>
//                   {formErrors.confirmPassword}
//                 </span>
//               )}
//             </div>

//             <div className="form-group">
//               <label htmlFor="phoneNumber">Phone Number</label>
//               <input
//                 className="form-control"
//                 type="text"
//                 name="phoneNumber"
//                 id="phoneNumber"
//                 value={formValues.phoneNumber}
//                 onChange={handleChange}
//               />
//               {formErrors.phoneNumber && (
//                 <span className={styles.error}>{formErrors.phoneNumber}</span>
//               )}
//             </div>

//             <button className={`${styles.btn}`} type="submit">
//               Sign Up
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUpForm;

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../../context/AuthContext";
// import { signUpUser } from "../../../api/DataApi";
// import "bootstrap/dist/css/bootstrap.min.css";
// import styles from "./SignUp.module.css";

// const SignUpForm: React.FC = () => {
//   const [formValues, setFormValues] = useState({
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     phoneNumber: "",
//   });

//   const [formErrors, setFormErrors] = useState<any>({});
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormValues({ ...formValues, [name]: value });
//   };

//   const validate = () => {
//     const errors: any = {};
//     if (!formValues.username) errors.username = "Username is required";
//     if (!formValues.email) {
//       errors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
//       errors.email = "Email is invalid";
//     }
//     if (!formValues.password) errors.password = "Password is required";
//     if (formValues.password !== formValues.confirmPassword) {
//       errors.confirmPassword = "Passwords do not match";
//     }
//     if (!formValues.confirmPassword)
//       errors.confirmPassword = "Confirm Password is required";
//     if (!formValues.phoneNumber)
//       errors.phoneNumber = "Phone Number is required";
//     else if (!/^\d{10}$/.test(formValues.phoneNumber)) {
//       errors.phoneNumber = "Phone Number must be 10 digits";
//     }
//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (validate()) {
//       try {
//         const userData = await signUpUser(formValues);
//         login({ ...formValues, userId: userData.userId });
//         console.log("User signed up successfully with ID : ", userData);
//         console.log("user data:", userData);

//         navigate("/login");
//       } catch (error) {
//         console.error("Error during sign up", error);
//       }
//     }
//   };

//   return (
//     <div className={`${styles.container} container-fluid`}>
//       <div className={`${styles.formWrapper} row justify-content-center`}>
//         <div>
//           <form className={styles.form} onSubmit={handleSubmit}>
//             <div className={styles.formHeader}>
//               <h2>Sign Up</h2>
//             </div>
//             <div className="form-group">
//               <label htmlFor="username">UserName</label>
//               <input
//                 className="form-control"
//                 type="text"
//                 name="username"
//                 id="username"
//                 value={formValues.username}
//                 onChange={handleChange}
//               />
//               {formErrors.username && (
//                 <span className={styles.error}>{formErrors.username}</span>
//               )}
//             </div>

//             <div className="form-group">
//               <label htmlFor="email">Email</label>
//               <input
//                 className="form-control"
//                 type="email"
//                 name="email"
//                 id="email"
//                 value={formValues.email}
//                 onChange={handleChange}
//               />
//               {formErrors.email && (
//                 <span className={styles.error}>{formErrors.email}</span>
//               )}
//             </div>

//             <div className="form-group">
//               <label htmlFor="password">Password</label>
//               <input
//                 className="form-control"
//                 type="password"
//                 name="password"
//                 id="password"
//                 value={formValues.password}
//                 onChange={handleChange}
//               />
//               {formErrors.password && (
//                 <span className={styles.error}>{formErrors.password}</span>
//               )}
//             </div>

//             <div className="form-group">
//               <label htmlFor="confirmPassword">Confirm Password</label>
//               <input
//                 className="form-control"
//                 type="password"
//                 name="confirmPassword"
//                 id="confirmPassword"
//                 value={formValues.confirmPassword}
//                 onChange={handleChange}
//               />
//               {formErrors.confirmPassword && (
//                 <span className={styles.error}>
//                   {formErrors.confirmPassword}
//                 </span>
//               )}
//             </div>

//             <div className="form-group">
//               <label htmlFor="phoneNumber">Phone Number</label>
//               <input
//                 className="form-control"
//                 type="text"
//                 name="phoneNumber"
//                 id="phoneNumber"
//                 value={formValues.phoneNumber}
//                 onChange={handleChange}
//               />
//               {formErrors.phoneNumber && (
//                 <span className={styles.error}>{formErrors.phoneNumber}</span>
//               )}
//             </div>

//             <button className={`${styles.btn}`} type="submit">
//               Sign Up
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUpForm;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./SignUp.module.css";
import { signUpUser } from "../../../context/AuthContext";

const SignUpForm: React.FC = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });

  const [formErrors, setFormErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = () => {
    const errors: any = {};
    if (!formValues.username) errors.username = "Username is required";
    if (!formValues.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = "Email is invalid";
    }
    if (!formValues.password) errors.password = "Password is required";
    if (formValues.password !== formValues.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    if (!formValues.confirmPassword)
      errors.confirmPassword = "Confirm Password is required";
    if (!formValues.phoneNumber)
      errors.phoneNumber = "Phone Number is required";
    else if (!/^\d{10}$/.test(formValues.phoneNumber)) {
      errors.phoneNumber = "Phone Number must be 10 digits";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await signUpUser(formValues);
        console.log("User signed up successfully", response);
        navigate("/login");
        // Redirect to login or show success message
      } catch (error) {
        console.error("Signup failed:", error);
      }
    }
  };

  return (
    <div className={`${styles.container} container-fluid`}>
      <div className={`${styles.formWrapper} row justify-content-center`}>
        <div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formHeader}>
              <h2>Sign Up</h2>
            </div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                className="form-control"
                type="text"
                name="username"
                id="username"
                value={formValues.username}
                onChange={handleChange}
              />
              {formErrors.username && (
                <span className={styles.error}>{formErrors.username}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                className="form-control"
                type="email"
                name="email"
                id="email"
                value={formValues.email}
                onChange={handleChange}
              />
              {formErrors.email && (
                <span className={styles.error}>{formErrors.email}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                className="form-control"
                type="password"
                name="password"
                id="password"
                value={formValues.password}
                onChange={handleChange}
              />
              {formErrors.password && (
                <span className={styles.error}>{formErrors.password}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                className="form-control"
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={formValues.confirmPassword}
                onChange={handleChange}
              />
              {formErrors.confirmPassword && (
                <span className={styles.error}>
                  {formErrors.confirmPassword}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                className="form-control"
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                value={formValues.phoneNumber}
                onChange={handleChange}
              />
              {formErrors.phoneNumber && (
                <span className={styles.error}>{formErrors.phoneNumber}</span>
              )}
            </div>

            <button className={`${styles.btn}`} type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
