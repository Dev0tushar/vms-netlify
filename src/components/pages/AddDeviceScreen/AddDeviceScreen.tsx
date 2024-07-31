import { useState, ChangeEvent, FormEvent } from "react";
import styles from "./AddDeviceScreen.module.css";
import plusIcon from "../../../assets/PlusIcon-addDevice-button.png";

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
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <div className={styles.formHeader}>
          <h2>ADD DEVICE</h2>
          <button className={styles.closeButton}>✖</button>
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="-"
            />
            {errors.name && <p className={styles.error}>{errors.name}</p>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="igrp">IGRP</label>
            <input
              type="text"
              id="igrp"
              name="igrp"
              value={formData.igrp}
              onChange={handleChange}
              placeholder="-"
            />
            {errors.igrp && <p className={styles.error}>{errors.igrp}</p>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="ipDomain">IP/Domain</label>
            <input
              type="text"
              id="ipDomain"
              name="ipDomain"
              value={formData.ipDomain}
              onChange={handleChange}
            />
            {errors.ipDomain && (
              <p className={styles.error}>{errors.ipDomain}</p>
            )}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="port">Port</label>
            <input
              type="text"
              id="port"
              name="port"
              value={formData.port}
              onChange={handleChange}
            />
            {errors.port && <p className={styles.error}>{errors.port}</p>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="id">ID</label>
            <input
              type="text"
              id="id"
              name="id"
              value={formData.id}
              onChange={handleChange}
            />
            {errors.id && <p className={styles.error}>{errors.id}</p>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className={styles.error}>{errors.password}</p>
            )}
          </div>
          <button type="submit" className={styles.addButton}>
            <img src={plusIcon} alt="" />
            Add Device
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDeviceForm;
