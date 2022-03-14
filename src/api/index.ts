import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL,
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
});

export { api };
