import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://ileader.cloud/api/",
});

export default axiosClient;
