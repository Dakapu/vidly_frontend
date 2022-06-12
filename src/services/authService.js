import http from "./httpService";
import { apiAuthEndpoint } from "../config.json";

export default function login(email, password) {
  return http.post(apiAuthEndpoint, { email, password });
}
