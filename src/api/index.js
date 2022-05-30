import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

export const getCategories = () => API.get("/categories");

export const getProducts = () => API.get("/products");

export const addOrder = (values) => API.post(`/order/sendorder`, values);

export const getOrders = () => API.get(`/order`);

export const orderStatus = (updatedOrder, id) => API.patch(`/order/${id}`, updatedOrder);
