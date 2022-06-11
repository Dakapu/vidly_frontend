import http from "./httpService";
import { apiGenreEndpoint } from "../config.json";

export async function getGenres() {
  return await http.get(apiGenreEndpoint);
}
