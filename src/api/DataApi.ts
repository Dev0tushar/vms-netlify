
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const signUp = async (userData: { user_id: string; name: string; email: string }) => {
  try {
    console.log("check base url", API_BASE_URL);
    const response = await axios.post(`${API_BASE_URL}/access/users`, userData);
    return response.data;

  } catch (error) {
    console.error("Error during signup API:", error);
    throw error;
  }
};


export const logIn = async (credentials: { email: string;}) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/access/users`, credentials);
    return response.data;
  } catch (error) {
    console.error("Error during login API:", error);
    throw error;
  }
};



// import axios from 'axios';

// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// // Function to decode JWT token and get payload
// const decodeToken = (token :any) => {
//   const payload = token.split('.')[1];
//   return JSON.parse(atob(payload));
// };

// // Function to check if token is expired
// const isTokenExpired = (token : any) => {
//   if (!token) return true;
//   const decoded = decodeToken(token);
//   const expirationDate = new Date(decoded.exp * 1000);  // exp is in seconds
//   return expirationDate < new Date();
// };

// // Function to generate token and store in localStorage
// const storeToken = (token : any) => {
//   localStorage.setItem('authToken', token);
// };

// // Function to remove token from localStorage
// const removeToken = () => {
//   localStorage.removeItem('authToken');
// };

// // Function to get the current token from localStorage
// const getToken = () => {
//   return localStorage.getItem('authToken');
// };

// // Function to authenticate user (login) and generate a token
// export const logIn = async (credentials: { email: string }) => {
//   try {
//     const response = await axios.get(`${API_BASE_URL}/access/users`, { params: credentials });
//     const token = response.data.accessToken;  // Assuming the token is returned as accessToken
//     storeToken(token);  // Store the token in localStorage
//     return response.data;  // Return user data
//   } catch (error) {
//     console.error("Error during login API:", error);
//     throw error;
//   }
// };

// // Function to sign up user and generate token
// export const signUp = async (userData: { user_id: string; name: string; email: string }) => {
//   try {
//     const response = await axios.post(`${API_BASE_URL}/access/users`, userData);
//     const token = response.data.accessToken;
//     storeToken(token);  // Store the token in localStorage
//     return response.data;
//   } catch (error) {
//     console.error("Error during signup API:", error);
//     throw error;
//   }
// };

// // Function to log out the user and expire the token
// export const logOut = () => {
//   removeToken();  // Remove token from localStorage
//   console.log("User logged out successfully, token expired.");
// };

// // Function to check if the user is authenticated
// export const isAuthenticated = () => {
//   const token = getToken();
//   if (!token || isTokenExpired(token)) {
//     return false;  // Not authenticated if token is missing or expired
//   }
//   return true;  // Token is valid
// };

// // Function to refresh the token if expired
// export const refreshTokenIfNeeded = async () => {
//   const token = getToken();
//   if (!token || isTokenExpired(token)) {
//     console.log("Token expired or missing, generating a new token...");
    
//     // Here you would make an API call to generate a new token
//     try {
//       // Assuming you have an endpoint to refresh or generate a new token
//       const response = await axios.post(`${API_BASE_URL}/access/refresh-token`, { token });
//       const newToken = response.data.accessToken;
//       storeToken(newToken);  // Store the new token
//       return newToken;
//     } catch (error) {
//       console.error("Error refreshing token:", error);
//       throw error;
//     }
//   }
//   console.log("Token is still valid.");
//   return token;  // Return the existing valid token
// };
