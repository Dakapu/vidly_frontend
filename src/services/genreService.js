import http from "./httpService";

const apiGenreEndpoint = "/genres";

export async function getGenres() {
  return await http.get(apiGenreEndpoint);
}
