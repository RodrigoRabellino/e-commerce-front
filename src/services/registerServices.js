import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

export const registerUser = async (firstName, lastName, email, password) => {
  const body = { firstName, lastName, email, password };
  try {
    const response = await axios.post(`${API_URL}/user`, body);
    console.log("request sent");
    return response.data;
  } catch (error) {
    console.log("error in registerServices", error);
  }
};
