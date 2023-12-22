import axios from "axios";

const API_BASE_URL = "https://dr-phone-back.onrender.com/api/";

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_BASE_URL}user/login`, credentials);
    localStorage.setItem("token", response.data.token);
    return response;
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

export const fetchUser = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}products`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}categories`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchCategoryById = async (categoryId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}categories/${categoryId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchProductById = async (productId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}products/${productId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getSecretClientKey = async (amount) => {
  try {
    const response = await axios.post(
      "https://dr-phone-back.onrender.com/create-payment-intent",
      { amount }
    );
    return response.data.clientSecret;
  } catch (error) {
    throw error;
  }
};

export const updateProduct = async (product) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}products/${product._id}`,
      product
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateCategory = async (category) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}categories/${category._id}`,
      category
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteProduct = async (productId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}products/${productId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteCategory = async (categoryId) => {
  try {
    const response = await axios.delete(
      `${API_BASE_URL}categories/${categoryId}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createProduct = async (product) => {
  try {
    const response = await axios.post(`${API_BASE_URL}products`, product);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createCategory = async (category) => {
  try {
    const response = await axios.post(`${API_BASE_URL}categories`, category);
    return response.data;
  } catch (error) {
    throw error;
  }
};
