import axios from "axios";
import Cookies from "js-cookie";

const apiServer = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "http://localhost:3010",
  headers: {
    Authorization: `Bearer ${Cookies.get("user_token")}`,
  },
});



export default apiServer;
