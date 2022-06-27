import http from "./httpService";

const apiUserEndpoint = "/users";

export function register(user) {
  return http.post(apiUserEndpoint, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}
