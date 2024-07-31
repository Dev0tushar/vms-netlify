// import React from "react";
import styles from "./login.module.css";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className={styles.container}>
            <div className={styles.loginBox}>
                <div className={styles.loginDesc}>
                    <h1 className={styles.loginHeader}>LOG IN</h1>
                    <p className={styles.loginPara}>Enter your details and Log in</p>
                </div>


                <div className={styles.inputBox}>
                    <label className={styles.lebel}>Username or Email</label>
                    <input className={styles.input} type="text" />
                </div>
                <div className={styles.inputBox}>
                    <label className={styles.lebel}>Password</label>
                    <input className={styles.input} type="password" />
                </div>

                <div className={styles.saveForgetBox}>
                    <div>
                        <input className={styles.checkbox} type="checkbox" /> <span>Save Password</span>
                    </div>
                    <div>
                        <a href="google.com">Forgot Password?</a>
                    </div>
                </div>
                <div>
                    <button className={styles.loginBtn}>LOG IN</button>
                </div>

                <div className={styles.bottom}>
                    <span className={styles.dontHave}>Don't have account?</span>
                    <Link to="/SignUpForm-screen">
                    <span className={styles.signLink}>Sign Up yess</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login;