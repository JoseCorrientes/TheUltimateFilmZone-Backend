import { Schema, model } from "mongoose";

const favoriteSchema = new Schema({
  id: {
    type: Number,
    require: true,
  },
  backdrop_path: {
    type: String,
  },
  genre_ids: {
    type: [Number],
  },
  original_title: {
    type: String,
    require: true,
  },
  overview: {
    type: String,
    require: true,
  },
  poster_path: {
    type: String,
  },
  release_date: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  video: {
    type: Boolean,
    default: false,
  },
  adult: {
    type: Boolean,
    default: false,
  },
});

const Favorite = model("Favorites", favoriteSchema);
export default Favorite;
