import axios from "axios";
import { toast } from "react-toastify";
import logger from "./logger";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

//use(success, error)
axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status <= 500;

  if (!expectedError) {
    logger.log(error);
    toast.error("Something failed while deleting a post!");
  }
  return Promise.reject(error);
});

function setJWT(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJWT,
};
