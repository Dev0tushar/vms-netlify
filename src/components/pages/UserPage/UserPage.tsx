
import React, { useState, useEffect } from "react";
import styles from "./UserPage.module.css";
import avtar from "../../../assets/avtar.png";
import userimage from "../../../assets/side_bg.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../../Hooks/useAuth';

const UserPage: React.FC = () => {
  const [image, setImage] = useState<string>(avtar);
  const [address, setAddress] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [postcode, setPostcode] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [stateRegion, setStateRegion] = useState<string>("");

  const navigate = useNavigate();
  const { isAuthenticated , logout} = useAuth();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    // const currentUser = localStorage.getItem("user");
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    // localStorage.removeItem("token");
   
    // localStorage.removeItem('token_expiration');
    // localStorage.removeItem("user");
    // console.log("hii");
    // setIsAuthenticated(false);
    logout()
    navigate("/login");
  };

  const handleChange = (setter: React.Dispatch<React.SetStateAction<string>>) => 
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setter(event.target.value);
    };

  return (
    <section>
      <div
        className={`${styles.container} container-fluid rounded bg-white mt-md-5 ${styles.form_bg}`}
      >
        <div className="row my-3">
          <div
            className="col-md-3 border-right"
            style={{
              backgroundImage: `url(${userimage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className={styles.avatarUpload}>
              <div className={styles.avatarPreview}>
                <div id="imagePreview">
                  <img src={image} alt="" />
                </div>
              </div>
              <div className={styles.avatarEdit}>
                <input
                  type="file"
                  id="imageUpload"
                  accept=".png, .jpg, .jpeg"
                  onChange={handleImageUpload}
                />
                <label htmlFor="imageUpload"></label>
              </div>
            </div>
            <div>
              <div className="text-center">
                <h2>John Smith</h2>
              </div>
              <div className={`${styles.details} mt-4 p-3`}>
                <div className={styles.proDetails}>
                  <i className="fa-regular fa-user"></i>
                  <p>@john12</p>
                </div>
                <div className={styles.proDetails}>
                  <i className="fa-regular fa-envelope"></i>
                  <p>john@gmail.com</p>
                </div>
                <div className={styles.proDetails}>
                  <i className="fa-solid fa-phone"></i>
                  <p>98XXXXXXXX</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Profile Settings</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-12">
                  <label className={styles.labels}>Username</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    readOnly
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <label className={styles.labels}>First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    readOnly
                  />
                </div>
                <div className="col-md-6">
                  <label className={styles.labels}>Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    readOnly
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <label className={styles.labels}>Mobile Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter mobile number"
                    readOnly
                  />
                </div>
                <div className="col-md-6">
                  <label className={styles.labels}>Email ID</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter email id"
                    readOnly
                  />
                </div>
                <div className="col-md-12 mt-3">
                  <label className={styles.labels}>Address</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter address"
                    value={address}
                    onChange={handleChange(setAddress)}
                  />
                </div>
                <div className="col-md-4 mt-3">
                  <label className={styles.labels}>City</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter city"
                    value={city}
                    onChange={handleChange(setCity)}
                  />
                </div>
                <div className="col-md-4 mt-3">
                  <label className={styles.labels}>State</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter State"
                    value={state}
                    onChange={handleChange(setState)}
                  />
                </div>
                <div className="col-md-4 mt-3">
                  <label className={styles.labels}>Postcode</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter postcode"
                    value={postcode}
                    onChange={handleChange(setPostcode)}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <label className={styles.labels}>Country</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Country"
                    value={country}
                    onChange={handleChange(setCountry)}
                  />
                </div>
                <div className="col-md-6">
                  <label className={styles.labels}>State/Region</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="State"
                    value={stateRegion}
                    onChange={handleChange(setStateRegion)}
                  />
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="my-4 text-center" style={{ gap: "10px", display: "flex", justifyContent: 'center' }}>
                <button className={`${styles.button57}`} type="button">
                  <span className={styles.text}>Save Profile</span>
                </button>
                <button className={`${styles.button57}`} type="button">
                  <span className={styles.text} onClick={handleLogout}>
                    LogOut
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserPage;
