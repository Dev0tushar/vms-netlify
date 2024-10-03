
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


