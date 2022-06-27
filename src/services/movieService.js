import http from "./httpService";

const apiMovieEndpoint = "/movies";

function getMovieUrl(id) {
  return `${apiMovieEndpoint}/${id}`;
}

export function getMovies() {
  return http.get(apiMovieEndpoint);
}

export function getMovie(id) {
  return http.get(getMovieUrl(id));
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(getMovieUrl(movie._id), body);
  }

  return http.post(apiMovieEndpoint, movie);
}

export function deleteMovie(id) {
  http.delete(getMovieUrl(id));
}
