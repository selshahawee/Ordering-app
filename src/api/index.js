import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:7000" });

export const getCategories = () => API.get("/categories");

export const getProducts = () => API.get("/products");

export const addOrder = (values) => API.post(`/order/sendorder`, values);

export const getOrders = () => API.get(`/order`);


