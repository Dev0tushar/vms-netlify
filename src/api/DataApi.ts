import axios from "axios";

const Api_Base_Url = "http://127.0.0.1:8000";
export const fetchData = async () => {
  try {
    const response = await axios.get(`${Api_Base_Url}/access/users`);
    return response.data;
  } catch (error) {
    console.log("error fetching data:", error);
    throw error;
  }
};
