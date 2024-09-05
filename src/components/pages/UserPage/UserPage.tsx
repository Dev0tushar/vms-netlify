import React, { useState } from "react";
import styles from "./UserPage.module.css";

const UserPage: React.FC = () => {
  const [image, setImage] = useState<string>(
    "http://ssl.gstatic.com/accounts/ui/avatar_2x.png"
  );

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

  return (
    <section>
      <div
        className={`${styles.container} rounded bg-white mt-md-5 mb-md-5 ${styles.form_bg}`}
      >
        <div className="row">
          <div className="col-md-3 border-right">
            <div className={styles.avatarUpload}>
              <div className={styles.avatarEdit}>
                <input
                  type="file"
                  id="imageUpload"
                  accept=".png, .jpg, .jpeg"
                  onChange={handleImageUpload}
                />
                <label htmlFor="imageUpload"></label>
              </div>
              <div className={styles.avatarPreview}>
                <div
                  id="imagePreview"
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
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
                    // value="John"
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
                    // value="John"
                    readOnly
                  />
                </div>
                <div className="col-md-6">
                  <label className={styles.labels}>Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    // value="Smith"
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
                    // value="98XXXXXXXX"
                    readOnly
                  />
                </div>
                <div className="col-md-6">
                  <label className={styles.labels}>Email ID</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter email id"
                    // value="john@gmail.com"
                    readOnly
                  />
                </div>
                <div className="col-md-12 mt-3">
                  <label className={styles.labels}>Address</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter address"
                    value=""
                  />
                </div>
                <div className="col-md-4 mt-3">
                  <label className={styles.labels}>City</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter city"
                    value=""
                  />
                </div>
                <div className="col-md-4 mt-3">
                  <label className={styles.labels}>State</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter State"
                    value=""
                  />
                </div>
                <div className="col-md-4 mt-3">
                  <label className={styles.labels}>Postcode</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter postcode"
                    value=""
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
                    value=""
                  />
                </div>
                <div className="col-md-6">
                  <label className={styles.labels}>State/Region</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="State"
                    value=""
                  />
                </div>
              </div>
              <div className="mt-5 text-center ">
                <button className={`${styles.button57}  `} type="button">
                  <span className={styles.text}>Save Profile</span>
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
