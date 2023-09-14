import mongoose from "mongoose";

const DB_URI = process.env.DB_URI;

export const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(DB_URI);
    console.log("** Succesful Connection to the DB **");
  } catch (e) {
    console.log("** Error Connecting to DataBase **");
  }
};
