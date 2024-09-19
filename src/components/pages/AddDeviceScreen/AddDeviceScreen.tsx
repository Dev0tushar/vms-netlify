

import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import axios from "axios";
import styles from "./AddDeviceScreen.module.css";
import plusIcon from "../../../assets/PlusIcon-addDevice-button.png";
import "bootstrap/dist/css/bootstrap.min.css";
import CrosIcon from "../../../assets/CrossIcon.png";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useDevice } from "../deviceConfiguration/ParentDevice";

type FormData = {
  camera_id: string;
  serial_number: string;
  name: string;
  camera_make_model: string;
  status: string;
  location_id: string;
  username: string;
  password: string;
  is_nvr: string;
  camera_url: string;
};
type Location = {
  location_id: string;
  name: string;
};

const initialFormData: FormData = {
  camera_id: "",
  serial_number: "",
  name: "",
  camera_make_model: "",
  status: "",
  location_id: "",
  username: "",
  password: "",
  is_nvr: "",
  camera_url: "",
};

const AddDeviceForm: React.FC = () => {
  const { addDevice, devices, updateDevice } = useDevice();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [locations, setLocations] = useState<Location[]>([]);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [success, setSuccess] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const editId = searchParams.get("edit");
    if (editId) {
      const deviceToEdit = devices.find((d) => d.camera_id === editId);
      if (deviceToEdit) {
        setFormData(deviceToEdit);
      }
    }
  }, [searchParams, devices]);


  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/config/locations");
        setLocations(response.data);
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };
    fetchLocations();
  }, [])

  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = (): Partial<FormData> => {
    const newErrors: Partial<FormData> = {};
  //   if (!formData.camera_id) newErrors.camera_id = "Camera ID is required";
  //   if (!formData.serial_number)
  //     newErrors.serial_number = "Serial number is required";
  //   if (!formData.name) newErrors.name = "Name is required";
  //   if (!formData.camera_make_model)
  //     newErrors.camera_make_model = "Camera Make/Model is required";
  //   if (!formData.status) newErrors.status = "Status is required";
  //   if (!formData.location_id)
  //     newErrors.location_id = "Location ID is required";
  //   if (!formData.username) newErrors.username = "Username is required";
  //   if (!formData.password) newErrors.password = "Password is required";
  //   if (!formData.is_nvr) newErrors.is_nvr = "is_nvr is required";
  //   return newErrors;
  // };

  const duplicateDevice = devices.find(
    (device) =>
      device.camera_id === formData.camera_id &&
      device.location_id === formData.location_id &&
      device.camera_id !== (searchParams.get("edit") || "")
  );

  if (!formData.camera_id) newErrors.camera_id = "Camera ID is required";
  if (!formData.serial_number)
    newErrors.serial_number = "Serial number is required";
  if (!formData.name) newErrors.name = "Name is required";
  if (!formData.camera_make_model)
    newErrors.camera_make_model = "Camera Make/Model is required";
  if (!formData.status) newErrors.status = "Status is required";
  if (!formData.location_id)
    newErrors.location_id = "Location ID is required";
  if (!formData.username) newErrors.username = "Username is required";
  if (!formData.password) newErrors.password = "Password is required";
  if (!formData.is_nvr) newErrors.is_nvr = "is_nvr is required";

  if (duplicateDevice) {
    newErrors.camera_id = "This Camera ID is already used in this location.";
  }

  return newErrors;
};

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await axios.post(
          "http://13.200.174.209/config/cameras",
          formData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 201) {
          const editId = searchParams.get("edit");
          if (editId) {
            updateDevice(formData); // Update existing device
          } else {
            addDevice(formData); // Add new device
          }
          addDevice(formData);
          setSuccess(true);
          navigate("/device-config");
        } else {
          setSuccess(false);
          console.error("Failed to submit form data.");
        }
      } catch (error) {
        setSuccess(false);
        console.error("Error submitting form:", error);
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className={`${styles.container} container-fluid`}>
      <div
        className={`${styles.formWrapper} row justify-content-center`}
        style={{ marginTop: "250px" }}
      >
        <div>
          <div className={styles.formHeader}>
            <h2>
              {/* ADD DEVICE */}

              {searchParams.get("edit") ? "EDIT DEVICE" : "ADD DEVICE"}
            </h2>
            <button className={styles.closeButton}>
              <Link to="/device-config" className={styles.linkButton}>
                <img src={CrosIcon} alt="Close" className={styles.CrosIcon} />
              </Link>
            </button>
          </div>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className="form-group">
              <label htmlFor="camera_id">Camera ID</label>
              <input
                type="text"
                id="camera_id"
                name="camera_id"
                value={formData.camera_id}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter Camera ID"
              />
              {errors.camera_id && (
                <p className={styles.error}>{errors.camera_id}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="camera_url">Camera URL</label>
              <input
                type="text"
                id="camera_url"
                name="camera_url"
                value={formData.camera_url}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter Camera URL"
              />
              {errors.camera_url && (
                <p className={styles.error}>{errors.camera_url}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="serial_number">Serial Number</label>
              <input
                type="text"
                id="serial_number"
                name="serial_number"
                value={formData.serial_number}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter Serial Number"
              />
              {errors.serial_number && (
                <p className={styles.error}>{errors.serial_number}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter Name"
              />
              {errors.name && <p className={styles.error}>{errors.name}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="camera_make_model">Camera Make/Model</label>
              <input
                type="text"
                id="camera_make_model"
                name="camera_make_model"
                value={formData.camera_make_model}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter Camera Make/Model"
              />
              {errors.camera_make_model && (
                <p className={styles.error}>{errors.camera_make_model}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="status">Status</label>
              <input
                type="text"
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter Status"
              />
              {errors.status && <p className={styles.error}>{errors.status}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="location_id">Location ID</label>
              <input
                type="text"
                id="location_id"
                name="location_id"
                value={formData.location_id}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter Location ID"
              />
              {errors.location_id && (
                <p className={styles.error}>{errors.location_id}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter Username"
              />
              {errors.username && (
                <p className={styles.error}>{errors.username}</p>
              )}
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
                placeholder="Enter Password"
              />
              {errors.password && (
                <p className={styles.error}>{errors.password}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="is_nvr">Is Nvr</label>
              <input
                type="text"
                id="is_nvr"
                name="is_nvr"
                value={formData.is_nvr}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter Nvr"
              />
              {errors.is_nvr && <p className={styles.error}>{errors.is_nvr}</p>}
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                type="submit"
                className={`${styles.addButton} btn btn-primary`}
              >
                <img src={plusIcon} alt="Plus" className={styles.plusIcon} />
                {/* Add */}
                {searchParams.get("edit") ? "Update Device" : "Add Device"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDeviceForm;
