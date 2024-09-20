import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./SignUp.module.css";
import { signUp } from "../../../api/DataApi";
import { log } from "console";

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

  const [signUpMessage, setSignUpMessage] = useState<string | null>(null);

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

  // Function to generate a unique user ID
  const generateUserId = () => {
    const currentCount = parseInt(localStorage.getItem("userCount") || "0", 10);
    const newCount = currentCount + 1;
    localStorage.setItem("userCount", newCount.toString());
    return newCount.toString().padStart(2, "0");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validate()) {
      try {
        const { username, email } = formValues;

        const response = await signUp({
          user_id: generateUserId(),
          name: username,
          email,
        });

        if (!response.success) {
          setSignUpMessage("Signup successful!",);
          console.log("signup", response);
          
          navigate("/login");
        } else {
          setSignUpMessage("Signup failed. Please try again.");
        }
      } catch (error) {
        console.error("Signup failed:", error);
        setSignUpMessage("Signup failed. Please try again.");
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

            {signUpMessage && (
              <div
                className={
                  signUpMessage.includes("successful")
                    ? styles.successMessage
                    : styles.errorMessage
                }
              >
                {signUpMessage}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                className="form-control"
                type="text"
                name="username"
                id="username"
                placeholder="Enter user name"
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
                placeholder="Enter Mail"
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
                placeholder="Enter your password "
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
                placeholder="Confirm Password"
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
                placeholder="phone number"
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
