
import axios from 'axios';

const API_BASE_URL = "http://13.200.174.209";


export const signUp = async (userData: { user_id: string; name: string; email: string }) => {
  try {
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
