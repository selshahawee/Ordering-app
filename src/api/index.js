import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

export const getCategories = () => API.get("/categories");

export const getProducts = () => API.get("/products/seed");
