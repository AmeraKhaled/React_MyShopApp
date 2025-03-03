import axios from "axios";

const API_BASE_URL = "https://fakestoreapi.com";

export const getCategories = async () => {
  const res = await axios.get(`${API_BASE_URL}/products/categories`);
  return res.data;
};

export const getProducts = async () => {
  const res = await axios.get(`${API_BASE_URL}/products`);
  return res.data;
};

export const getProductsByCategory = async (category) => {
  const res = await axios.get(`${API_BASE_URL}/products/category/${category}`);
  return res.data;
};

export const getProductById = async (id) => {
  const res = await axios.get(`${API_BASE_URL}/products/${id}`);
  return res.data;
};
