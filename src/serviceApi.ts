import axios from "axios";

const api = axios.create({
  baseURL: "",
});

export const getUserData = async (username: string) => {
  try {
    const response = await api.get(
      `http://192.168.29.241:8000/#/Users/get_access_users`
    );
    return console.log(response.data, "datata");
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
