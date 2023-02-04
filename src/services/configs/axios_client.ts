import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default httpClient;
