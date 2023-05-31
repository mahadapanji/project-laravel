import axios from "axios";

const CONFIG_URL = "http://127.0.0.1";
const CONFIG_PORT = ":8000";

const appAxios = axios.create({
  baseURL: CONFIG_URL + CONFIG_PORT,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export default appAxios;
