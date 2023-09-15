import "dotenv/config";
import axios from "axios";

async function categoryMovies(req, res) {
  const TMDB_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGE5ZTJjNjQ0Mzk3ZDYxOWZmZDU3ODNlMmNlMmQ0YSIsInN1YiI6IjY0Y2NmMmU0NDNjZDU0MDExYzhkZTkxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t9tfab1Q0G4PkmrJP4a0R5qUmWa4ArR3u_N2JgF2tQ8'|| process.env.MOVIE_API_TOKEN;
  const URL = 'https://api.themoviedb.org/3/' || process.env.URL_TMDB;

  const options = {
    method: "GET",
    url: `${URL}genre/movie/list`,
    headers: {
      Authorization: `Bearer ${TMDB_TOKEN}`,
      accept: "application/json",
    },
  };

  axios
    .request(options)
    .then((response) => {
      return res
        .status(200)
        .json({ status: "Ok", message: "", data: response.data.genres });
    })
    .catch((error) => {
      return res
        .status(200)
        .json({
          status: "Error",
          message: "Error recuperando categories de movies en OMDB",
          data: "",
        });
    });
}

export { categoryMovies };
