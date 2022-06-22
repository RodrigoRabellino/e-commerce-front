import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

export const fetchProducts = async (page) => {
  try {
    const response = await axios.get(`${API_URL}/product`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const fetchOneProduct = async (id) => {
  try {
    const response = axios.get(`${API_URL}/product/${id}`);
    return response;
  } catch (error) {
    return error;
  }
};
