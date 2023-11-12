import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/';

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_BASE_URL}user/login`, credentials);
    localStorage.setItem('token', response.data.token);
  } catch (error) {
    throw error;
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}user/register`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// give me the code for fetching products

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}products`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const fetchProductById = async (productId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}products/${productId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
