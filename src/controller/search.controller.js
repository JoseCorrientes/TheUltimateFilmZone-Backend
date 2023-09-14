import "dotenv/config";
import axios from "axios";

const searchTrailerMovie = async (req, res) => {
  const TMDB_TOKEN = process.env.MOVIE_API_TOKEN;
  const URL = process.env.URL_TMDB;

  const options = {
    method: "GET",
    url: `${URL}movie/${req.query.movieId}/videos`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TMDB_TOKEN}`,
    },
  };

  axios
    .request(options)
    .then((resolve) => {
      return res
        .status(200)
        .json({ status: "Ok", message: "", data: resolve.data.results });
    })
    .catch((error) => {
      return res
        .status(200)
        .json({ status: "Error", message: error.message, data: error.code });
    });
};

const searchCastMovie = async (req, res) => {
  const TMDB_TOKEN = process.env.MOVIE_API_TOKEN;
  const URL = process.env.URL_TMDB;

  const options = {
    method: "GET",
    url: `${URL}movie/${req.query.movieId}/credits`,
    headers: {
      accept: `application/json`,
      Authorization: `Bearer ${TMDB_TOKEN}`,
    },
  };

  axios
    .request(options)
    .then((resolve) => {
      return res
        .status(200)
        .json({ status: "Ok", message: "", data: resolve.data });
    })
    .catch((error) => {
      console.log(error);
      return res
        .status(200)
        .json({ status: "Error", message: "Error recuperando Cast", data: "" });
    });
};

const searchList = async (req, res) => {
  const TMDB_TOKEN = process.env.MOVIE_API_TOKEN;
  const URL = process.env.URL_TMDB;

  const options = {
    method: "GET",
    url: `${URL}search/movie?query=${req.query.searchString}&include_adult=false&page=${req.query.page}`,
    params: {
      searchString: req.query.searchString,
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TMDB_TOKEN}`,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      return res
        .status(200)
        .json({ status: "Ok", message: "", data: response.data });
    })
    .catch(function (error) {
      return res
        .status(200)
        .json({
          status: "Error",
          message: "Error recuperando movies de OMDB",
          data: "",
        });
    });
};

export { searchList, searchCastMovie, searchTrailerMovie };
