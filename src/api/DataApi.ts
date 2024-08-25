// import axios from "axios";

// const API_BASE_URL = "http://192.168.29.241:8000";

// export const signUpUser = async (userData: any) => {
//   try {
//     const formData = new FormData();
//     Object.keys(userData).forEach((key) => formData.append(key, userData[key]));

//     const response = await axios.post(
//       `${API_BASE_URL}/access/users`,
//       formData,
//       {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       }
//     );

//     return response.data;
//   } catch (error) {
//     console.error("Error signing up user:", error);
//     throw error;
//   }
// };

// export const loginUser = async (loginData: {
//   email: string;
//   password: string;
// }) => {
//   try {
//     const response = await axios.post(
//       `${API_BASE_URL}/access/users`,
//       loginData,
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     return response.data;
//   } catch (error) {
//     console.error("Error logging in user:", error);
//     throw error;
//   }
// };

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://192.168.29.241:8000/access/users", // Base URL for your API
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to include the token in every request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Assuming you're storing the token in localStorage
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
