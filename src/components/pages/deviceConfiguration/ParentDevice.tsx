




// import React, { createContext, useContext, useState, useEffect } from "react";

// type Device = {
//   camera_id: string;
//   serial_number: string;
//   name: string;
//   camera_make_model: string;
//   status: string;
//   location_id: string;
//   username: string;
//   password: string;
//   is_nvr: string;
//   camera_url: string;
// };

// type DeviceContextType = {
//   devices: Device[];
//   addDevice: (device: Device) => void;
//   removeDevice: (id: string) => void;
// };

// const DeviceContext = createContext<DeviceContextType | undefined>(undefined);

// export const useDevice = () => {
//   const context = useContext(DeviceContext);
//   if (!context) {
//     throw new Error("useDevice must be used within a DeviceProvider");
//   }
//   return context;
// };

// export const DeviceProvider: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const [devices, setDevices] = useState<Device[]>([]);

//   useEffect(() => {
//     const storedDevices = localStorage.getItem("devices");
//     if (storedDevices) {
//       try {
//         const parsedDevices = JSON.parse(storedDevices);
//         if (Array.isArray(parsedDevices)) {
//           setDevices(parsedDevices);
//         }
//       } catch (error) {
//         console.error("Failed to parse devices from local storage", error);
//       }
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("devices", JSON.stringify(devices));
//   }, [devices]);

//   const addDevice = (device: Device) => {
//     setDevices((prevDevices) => [...prevDevices, device]);
//   };

//   const removeDevice = (id: string) => {
//     setDevices((prevDevices) =>
//       prevDevices.filter((device) => device.camera_id !== id)
//     );
//   };
//   const updateDevice = (updatedDevice: Device) => {
//     setDevices(
//       devices.map((device) =>
//         device.camera_id === updatedDevice.camera_id ? updatedDevice : device
//       )
//     );
//   };
//   return (
//     <DeviceContext.Provider value={{ devices, addDevice, removeDevice, updateDevice }}>
//       {children}
//     </DeviceContext.Provider>
//   );
// };

import { createContext, useContext, useState } from "react";

interface Device {
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
}

interface DeviceContextType {
  devices: Device[];
  addDevice: (device: Device) => void;
  removeDevice: (camera_id: string) => void;
  updateDevice: (updatedDevice: Device) => void;
}

const DeviceContext = createContext<DeviceContextType | undefined>(undefined);

export const useDevice = () => {
  const context = useContext(DeviceContext);
  if (!context) {
    throw new Error("useDevice must be used within a DeviceProvider");
  }
  return context;
};

export const DeviceProvider: React.FC = ({ children }) => {
  const [devices, setDevices] = useState<Device[]>([]);

  const addDevice = (device: Device) => {
    setDevices((prev) => [...prev, device]);
  };

  const removeDevice = (camera_id: string) => {
    setDevices((prev) => prev.filter((device) => device.camera_id !== camera_id));
  };

  const updateDevice = (updatedDevice: Device) => {
    setDevices((prev) =>
      prev.map((device) =>
        device.camera_id === updatedDevice.camera_id ? updatedDevice : device
      )
    );
  };

  return (
    <DeviceContext.Provider
      value={{ devices, addDevice, removeDevice, updateDevice }}
    >
      {children}
    </DeviceContext.Provider>
  );
};
