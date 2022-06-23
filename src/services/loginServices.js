import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

export const loginUser = async (email, password) => {
  try {
    const response = await axios.get(`${API_URL}/login/user`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const loginAdmin = async (email, password) => {
  try {
    const response = await axios.get(`${API_URL}/login/admin`);
    return response.data;
  } catch (error) {
    return error;
  }
};
