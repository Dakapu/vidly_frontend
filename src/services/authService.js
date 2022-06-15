import http from "./httpService";
import jwtDecode from "jwt-decode";
import { apiAuthEndpoint } from "../config.json";

const tokenKey = "token";

http.setJWT(getJwt());

export async function login(email, password) {
  const { data: jwt } = await http.post(apiAuthEndpoint, { email, password });
  localStorage.setItem(tokenKey, jwt);
}

export async function loginWithJWT(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export default {
  login,
  logout,
  getCurrentUser,
  loginWithJWT,
  getJwt,
};
