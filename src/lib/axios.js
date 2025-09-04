import axios from "axios";

const Axios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 30000, // 30 seconds timeout
});

export default Axios;
