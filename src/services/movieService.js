import { getGenres } from "./genreService";
import http from "./httpService";
import { apiMovieEndpoint } from "../config.json";

export function getMovies() {
  return http.get(apiMovieEndpoint);
}

export function getMovie(id) {
  return http.get(apiMovieEndpoint + "/" + id);
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(apiMovieEndpoint + "/" + movie._id, body);
  }

  return http.post(apiMovieEndpoint, movie);
}

export function deleteMovie(id) {
  http.delete(apiMovieEndpoint + "/" + id);
}
