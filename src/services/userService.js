import http from "./httpService";
import { apiUserEndpoint } from "../config.json";

export function register(user) {
  return http.post(apiUserEndpoint, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}
