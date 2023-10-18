import express from "express";
import { PORT, mongoDBURL } from "./config.js";
const app = express();
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import bookRoute from "./routes/booksRoute.js";
import cors from "cors";
//Middle ware for parsing request body
app.get("/", (req, res) => {
  console.log(req);
  return res.status(200).send("Welcomr to MERN stack");
});

app.use(express.json());
app.use(cors());

app.use("/books", bookRoute);

//Route

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
