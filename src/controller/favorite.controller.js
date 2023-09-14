import {
  createFavoriteDB,
  deleteFavoritesDB,
  getFavoritesDB,
} from "../service/favorite.service.js";

const getFavorites = async (req, res) => {
  try {
    let result = await getFavoritesDB();
    return res.status(200).json({ status: "Ok", message: "", founded: result });
  } catch (e) {
    return res.status(200).json({ status: "Error", message: e, founded: [] });
  }
};

const addFavorites = async (req, res) => {
  try {
    const data = req.body;
    const result = await createFavoriteDB(data);
    if (result != false) {
      return res
        .status(200)
        .json({ status: "Ok", message: "Added", added: result });
    } else
      return res
        .status(200)
        .json({
          status: "Error",
          message: "Favorite already Exist",
          added: [],
        });
  } catch (e) {
    console.log("Error al guardar Favorito en la DB");
    return res.status(200).json({ message: "Internal Server Error" });
  }
};

const deleteFavorites = async (req, res) => {
  try {
    let id = req.query.id;
    let result = await deleteFavoritesDB(id);
    if (result.deletedCount == 1)
      return res
        .send(200)
        .json({ status: "Ok", message: "Deleted", deleted: 1 });
    else
      return res
        .status(404)
        .json({
          status: "Error",
          message: "Favorite wasn't Deleted",
          deleted: 0,
        });
  } catch (e) {
    console.log("Error borrando un registro de la DB");
  }
};

export { addFavorites, getFavorites, deleteFavorites };
