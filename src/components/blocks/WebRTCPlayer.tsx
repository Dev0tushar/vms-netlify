

import { useEffect, useState } from "react";
import axios from "axios";

interface Camera {
  camera_url: string | undefined;
  name: string;
}

const CameraDataFetcher = ({
  onError,
}: {
  onError: (message: string) => void;
}) => {
  const [cameraData, setCameraData] = useState<Camera[]>([]);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchCameraData = async () => {
      try {
        let response = await axios.get(`${API_BASE_URL}/config/cameras`);

        console.log("Full API response:", response?.data);

        setCameraData(response?.data);
      } catch (error) {
        onError("Error fetching camera data: " + error.message);
      }
    };

    fetchCameraData();
  }, []);
  console.log( "Full Api Response", cameraData);

  return (
    <div>
      {cameraData.map((cam, key) => (
        <div key={key}>
          <h3>{cam.name}</h3>
          <img style={{width:"100%", maxWidth:"100%", height:"100%"}} src={cam.camera_url} />
        </div>
      ))}
    </div>
  );
};

export default CameraDataFetcher;
