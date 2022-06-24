import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login/user`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const loginAdmin = async (email, password) => {
  const body = { email, password };
  try {
    const response = await axios.post(`${API_URL}/login/admin`, body);
    return response.data;
  } catch (error) {
    return error;
  }
};
