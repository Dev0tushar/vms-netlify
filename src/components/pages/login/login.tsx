// // import React from "react";
// import styles from "./login.module.css";
// import { Link } from "react-router-dom";

// function Login() {
//     return (
//         <div className={styles.container}>
//             <div className={styles.loginBox}>
//                 <div className={styles.loginDesc}>
//                     <h1 className={styles.loginHeader}>LOG IN</h1>
//                     <p className={styles.loginPara}>Enter your details and Log in</p>
//                 </div>


//                 <div className={styles.inputBox}>
//                     <label className={styles.lebel}>Username or Email</label>
//                     <input className={styles.input} type="text" />
//                 </div>
//                 <div className={styles.inputBox}>
//                     <label className={styles.lebel}>Password</label>
//                     <input className={styles.input} type="password" />
//                 </div>

//                 <div className={styles.saveForgetBox}>
//                     <div>
//                         <input className={styles.checkbox} type="checkbox" /> <span>Save Password</span>
//                     </div>
//                     <div>
//                         <a href="google.com">Forgot Password?</a>
//                     </div>
//                 </div>
//                 <div>
//                     <button className={styles.loginBtn}>LOG IN</button>
//                 </div>

//                 <div className={styles.bottom}>
//                     <span className={styles.dontHave}>Don't have account?</span>
//                     <Link to="/SignUpForm-screen">
//                     <span className={styles.signLink}>Sign Up yess</span>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Login;

import  { useState } from 'react';
import styles from './login.module.css';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  
    return (
      <div className={styles.loginContainer}>
        <form className={styles.loginForm}>
          <h2>LOG IN</h2>
          <h3>Enter Your details and Log in</h3>
          
          <div className={styles.inputGroup}>
            <label>Username or Email</label>
            <input type="text" placeholder="demo@gmail.com" />
          </div>
          <div className={styles.inputGroup}>
            <label>Password</label>
            <div className={styles.passwordWrapper}>
              <input 
                type={showPassword ? 'text' : 'password'} 
                placeholder="****" 
              />
              <button 
                type="button" 
                className={styles.showPassword} 
                onClick={togglePasswordVisibility}
              >
                
              </button>
            </div>
          </div>
          <div className={styles.options}>
            <label>
               <input  type="checkbox" />
              Save password
            </label>
            <a href="/">Forget Password?</a>
          </div>
          <button type="submit" className={styles.loginButton}>LOG IN</button>
          <p>Don’t have an account? 
            <Link to="/SignUpForm-screen" >
            <a href="/">Sign Up</a>
            </Link>
            </p>
        </form>
      </div>
    );
  };
  
  export default LoginForm;