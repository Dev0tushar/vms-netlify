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
  const [tokenExpirationTime, setTokenExpirationTime] = useState<number | null>(
    null
  );

  const { setIsAuthenticated, setUser, logout } = useAuth();
  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

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

  useEffect(() => {
    const token = localStorage.getItem("token");
    const expiration = localStorage.getItem("tokenExpiration");

    if (token && expiration) {
      const expirationTime = parseInt(expiration, 10);

      if (isNaN(expirationTime)) {
        handleLogout();
        return;
      }

      const now = new Date().getTime();

      if (now >= expirationTime) {
        handleLogout();
      } else {
        setTokenExpirationTime(expirationTime);
        setIsAuthenticated(true);

        const timeUntilExpiration = expirationTime - now;
        const logoutTimer = setTimeout(() => {
          handleLogout();
        }, timeUntilExpiration);

        return () => clearTimeout(logoutTimer);
      }
    }
  }, [setIsAuthenticated, setTokenExpirationTime]);

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

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("tokenExpiration");
    toast.success("You have been logged out.");
    navigate("/login");
  };

  const storeToken = (userId: string) => {
    const token = `${userId}-${new Date().getTime()}`;
    const expirationTime = new Date().getTime() + 3600 * 1000;
    console.log("set token");
    localStorage.setItem("token", token);
    localStorage.setItem("tokenExpiration", expirationTime.toString());

    setTokenExpirationTime(expirationTime);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validate()) {
      if (!fetchedUsers.length) {
        toast.error("Error fetching users. Please try again later.");
        return;
      }

      const user = fetchedUsers.find(
        (user) => user.email.toLowerCase() === email.toLowerCase()
      );

      if (user) {
        setIsAuthenticated(true);

        // setAuthenticate(true);
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);

        storeToken(user.user_id);
        toast.success("User login successful!");

        navigate("/");
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
