

import { useState, ChangeEvent, FormEvent } from "react";
import styles from "./AddDeviceScreen.module.css";
import plusIcon from "../../../assets/PlusIcon-addDevice-button.png";
import "bootstrap/dist/css/bootstrap.min.css";
import CrosIcon from "../../../assets/CrossIcon.png";

type FormData = {
  name: string;
  igrp: string;
  ipDomain: string;
  port: string;
  id: string;
  password: string;
};

const initialFormData: FormData = {
  name: "",
  igrp: "",
  ipDomain: "192.168.1.1",
  port: "554",
  id: "admin",
  password: "",
};

const AddDeviceForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = (): Partial<FormData> => {
    const newErrors: Partial<FormData> = {};
    const ipRegex = /^\d{1,3}(\.\d{1,3}){3}$/;
    const portRegex = /^\d+$/;

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.igrp) newErrors.igrp = "IGRP is required";
    if (!formData.ipDomain || !ipRegex.test(formData.ipDomain))
      newErrors.ipDomain = "Invalid IP address";
    if (!formData.port || !portRegex.test(formData.port))
      newErrors.port = "Port must be a number";
    if (!formData.id) newErrors.id = "ID is required";
    if (!formData.password) newErrors.password = "Password is required";

    return newErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      console.log(formData);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className={`${styles.container} container-fluid`}>
      <div className={`${styles.formWrapper} row justify-content-center`}>
        <div>
          <div className={styles.formHeader}>
            <h2>ADD DEVICE</h2>
            <button className={styles.closeButton}>
              <img src={CrosIcon} alt="" className={styles.CrosIcon} />{" "}
            </button>
          </div>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                placeholder="-"
              />
              {errors.name && <p className={styles.error}>{errors.name}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="igrp">IGRP</label>
              <input
                type="text"
                id="igrp"
                name="igrp"
                value={formData.igrp}
                onChange={handleChange}
                className="form-control"
                placeholder="-"
              />
              {errors.igrp && <p className={styles.error}>{errors.igrp}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="ipDomain">IP/Domain</label>
              <input
                type="text"
                id="ipDomain"
                name="ipDomain"
                value={formData.ipDomain}
                onChange={handleChange}
                className="form-control"
              />
              {errors.ipDomain && (
                <p className={styles.error}>{errors.ipDomain}</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="port">Port</label>
              <input
                type="text"
                id="port"
                name="port"
                value={formData.port}
                onChange={handleChange}
                className="form-control"
              />
              {errors.port && <p className={styles.error}>{errors.port}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="id">ID</label>
              <input
                type="text"
                id="id"
                name="id"
                value={formData.id}
                onChange={handleChange}
                className="form-control"
              />
              {errors.id && <p className={styles.error}>{errors.id}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control"
              />
              {errors.password && (
                <p className={styles.error}>{errors.password}</p>
              )}
            </div>
            <button
              type="submit"
              className={`${styles.addButton} btn btn-warning`}
            >
              <img src={plusIcon} alt="" />
              Add Device
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDeviceForm;
