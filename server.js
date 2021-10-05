"use strict";
const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
app.use(cors());
app.use(express.json());
const axios = require("axios");
const PORT = process.env.PORT;
const MONGO_SERVER = process.env.MONGO_SERVER;
mongoose.connect(`${MONGO_SERVER}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const {
  getFavFlowers,
  createFlower,
  deleteFlower,
  updateFlower,
} = require("./controllers/Flower.controller");
app.listen(PORT, () => {
  console.log(`Listening to the ${PORT}`);
});

const getFlowers = (req, res) => {
  let url = `https://watches-world.herokuapp.com/watches-list`;
  axios.get(url).then((i) => {
    let Flower = i.data.map((item) => {
      return item;
    });
    res.send(Flower);
  });
};
app.get("/getData", getFlowers);
app.get("/getFav", getFavFlowers);
app.post("/postFlower", createFlower);
app.delete("/deleteFlowers/:id", deleteFlower);
app.put("/updateFlowers/:id", updateFlower);
