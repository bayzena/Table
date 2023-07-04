import axios from "axios";
import { api } from "./endpoint";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API,
});

export const getDevelopersData = () => axiosInstance.get(api);
