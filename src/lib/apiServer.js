import axios from "axios";
import Cookies from "js-cookie";

const domainUrl = {
  loaclHost: "http://localhost:3010",
  cloud: "https://portfolio-server-9ly0.onrender.com",
  vercel: "https://portfolio-server-pink-seven.vercel.app",
};

const apiServer = axios.create({
  baseURL: domainUrl.vercel,
  headers: {
    Authoriaztion: `Bearer ${Cookies.get("user_token")}`,
  },
});



export default apiServer;
