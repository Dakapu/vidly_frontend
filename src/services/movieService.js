import { getGenres } from "./genreService";
import http from "./httpService";
import { apiMovieEndpoint } from "../config.json";

export function getMovies() {
  return http.get(apiMovieEndpoint);
}

export function getMovie(id) {
  return http.get(apiMovieEndpoint + "/" + id);
}

export async function saveMovie(movie) {
  let movieInDb = this.getMovie(movie._id) || {};

  movieInDb.title = movie.title;
  //movieInDb.genre = genresAPI.genres.find((g) => g._id === movie.genreId);
  const { data } = await getGenres();
  const genres = [...data];
  console.log("Genres in Movies: ", genres);

  movieInDb.genre = genres.find((g) => g._id === movie.genreId);

  console.log("Genre of movie: ", movieInDb.genre);

  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;

  if (!movieInDb._id) {
    http.post(apiMovieEndpoint + "/" + movieInDb._id);
  }

  return movieInDb;
}

export function deleteMovie(id) {
  http.delete(apiMovieEndpoint + "/" + id);
}
