import  { useState } from "react";
import styles from "./SignUp.module.css";

const SignUpForm: React.FC = () => {
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully", formValues);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.loginDesc}>
          <h1 className={styles.loginHeader}>Sign Up</h1>
          <p className={styles.loginPara}>Enter your details and Sign up</p>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="username">
            Username
          </label>
          <input
            className={styles.input}
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

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input
            className={styles.input}
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

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="password">
            Password
          </label>
          <input
            className={styles.input}
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

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className={styles.input}
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={formValues.confirmPassword}
            onChange={handleChange}
          />
          {formErrors.confirmPassword && (
            <span className={styles.error}>{formErrors.confirmPassword}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="phoneNumber">
            Phone Number
          </label>
          <input
            className={styles.input}
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

        <button className={styles.button} type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
