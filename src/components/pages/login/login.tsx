

// import  { useState } from 'react';
// import styles from './login.module.css';
// import { Link } from 'react-router-dom';

// const LoginForm = () => {
//     const [showPassword, setShowPassword] = useState(false);
  
//     const togglePasswordVisibility = () => {
//       setShowPassword(!showPassword);
//     };
  
//     return (
//       <div className={styles.loginContainer}>
//         <form className={styles.loginForm}>
//           <h2>LOG IN</h2>
//           <h3>Enter Your details and Log in</h3>
          
//           <div className={styles.inputGroup}>
//             <label>Username or Email</label>
//             <input type="text" placeholder="demo@gmail.com" />
//           </div>
//           <div className={styles.inputGroup}>
//             <label>Password</label>
//             <div className={styles.passwordWrapper}>
//               <input 
//                 type={showPassword ? 'text' : 'password'} 
//                 placeholder="****" 
//               />
//               <button 
//                 type="button" 
//                 className={styles.showPassword} 
//                 onClick={togglePasswordVisibility}
//               >
                
//               </button>
//             </div>
//           </div>
//           <div className={styles.options}>
//             <label>
//                <input  type="checkbox" />
//               Save password
//             </label>
//             <a href="/">Forget Password?</a>
//           </div>
//           <button type="submit" className={styles.loginButton}>LOG IN</button>
//           <p>Don’t have an account? 
//             <Link to="/SignUpForm-screen" >
//             <a href="/">Sign Up</a>
//             </Link>
//             </p>
//         </form>
//       </div>
//     );
//   };
  
//   export default LoginForm;


import styles from './login.module.css';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <div className={`d-flex justify-content-center align-items-center vh-100`}>
      <form className={`form-group ${styles.loginContainer} ${styles.loginForm}`}> <br />
        <h2>LOG IN</h2>
        <h3 style={{fontSize:"medium", marginRight:"auto"}}>Enter Your details and Log in</h3> <br />
        
        <div className={`form-group ${styles.inputGroup}`}>
          <label>Username or Email</label>
          <input type="text" className="form-control" placeholder="demo@gmail.com" />
        </div>
        <div className={`form-group ${styles.inputGroup}`}>
          <label>Password</label>
          <div className={styles.passwordWrapper}>
            <input 
              type="password" 
              className="form-control" 
              placeholder="****" 
            />
          </div>
        </div>
        <div className={`form-group ${styles.options}`}>
          <label>
            <input type="checkbox" />
            Save password
          </label>
          <a href="/">Forget Password?</a>
        </div>
        <button type="submit" className={styles.loginButton}>LOG IN</button>
        <p>Don’t have an account? 
          <Link to="/SignUpForm-screen">
            <a href="/">Sign Up</a>
          </Link>
        </p> <br />
      </form>
    </div>
  );
};

export default LoginForm;
