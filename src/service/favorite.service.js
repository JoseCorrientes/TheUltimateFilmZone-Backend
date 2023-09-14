import Favorite from "../models/Favorite.model.js";

const deleteFavoritesDB = async (id) => {
  const result = await Favorite.deleteOne({ id });
  return result;
};

const getFavoritesDB = async () => {
  const result = await Favorite.find();
  console.log(" el resultado de la db es");
  console.log(result);
  return result;
};

const createFavoriteDB = async (data) => {
  let result = [];
  const favoriteFound = await Favorite.find({ id: data.id });
  if (favoriteFound.length < 1) {
    result = await Favorite.create(data);
  } else return false;
  return result;
};

export { createFavoriteDB, getFavoritesDB, deleteFavoritesDB };
