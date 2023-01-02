import axios from "axios";
import config from "../config.json";

axios.defaults.baseURL = config.apiUrl;

function setCommonHeader(headerName, value) {
  // axios allows to set header to each request while common for all
  //eac activation axios knows the new header

  axios.defaults.headers.common[headerName] = value;
}

export const axiosPost = axios.post;

const httpService = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
  setCommonHeader,
};

export default httpService;
