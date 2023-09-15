import "dotenv/config";
import axios from "axios";

async function categoryMovies(req, res) {
  const TMDB_TOKEN =  process.env.MOVIE_API_TOKEN;
  const URL =  process.env.URL_TMDB;

  console.log(`tmdb_token ${TMDB_TOKEN}`);
  console.log(`URL: ${URL}`);  

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
