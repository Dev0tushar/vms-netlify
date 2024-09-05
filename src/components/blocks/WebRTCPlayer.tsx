



// import React, { useEffect, useState } from "react";

// interface VideoStreamProps {
//   rtspUrl: string;
// }

// const VideoStream: React.FC<VideoStreamProps> = ({ rtspUrl }) => {
//   const [httpUrl, setHttpUrl] = useState<string | null>(null);

//   useEffect(() => {

//     const convertToHttp = () => {
//       const httpLinks = [
//         "http://66.76.193.12:8000/mjpg/video.mjpg",
//         "http://181.57.169.89:8080/mjpg/video.mjpg",
//         "http://64.77.205.67/mjpg/video.mjpg",
//       ];

//       setHttpUrl(httpLinks[Math.floor(Math.random() * httpLinks.length)]);
//     };

//     convertToHttp();
//   }, [rtspUrl]);

//   if (!httpUrl) {
//     return 
//   }

//   return <img src={httpUrl} autoPlay controls style={{ height: "100%", width: "100%" }} />;
// };

// export default VideoStream;




// import { useState, useEffect } from "react";
// import axios from "axios";

// interface Camera {
//   id: string;
//   title: string;
//   rtspLink: string;
// }

// interface CameraData {
//   cameras: Camera[];
// }

// const CameraDataFetcher = ({ onDataFetched }: { onDataFetched: (data: Camera[]) => void }) => {
//   useEffect(() => {
//     const fetchCameraData = async () => {
//       try {
//         const response = await axios.get<CameraData>("http://127.0.0.1:8000/config/cameras");
//         onDataFetched(response.data.cameras);
//       } catch (error) {
//         console.error("Error fetching camera data:", error);
//       }
//     };

//     fetchCameraData();
//   }, []);

//   return null;
// };

// export default CameraDataFetcher;



import { useEffect } from "react";
import axios from "axios";

interface Camera {
  id: string;
  title: string;
  rtspLink: string;
}

interface CameraData {
  cameras: Camera[];
}

const CameraDataFetcher = ({
  onDataFetched,
  onError,
}: {
  onDataFetched: (data: Camera[]) => void;
  onError: (message: string) => void;
}) => {
  useEffect(() => {
    const fetchCameraData = async () => {
      try {
        const response = await axios.get<CameraData>("http://127.0.0.1:8000/config/cameras");
        onDataFetched(response.data.cameras);
      } catch (error) {
        onError("Error fetching camera data: " , error.message);
      }
    };

    fetchCameraData();
  }, [onDataFetched, onError]);

  return 
  ;
};

export default CameraDataFetcher;
