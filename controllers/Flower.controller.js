"use strict";

const { flowerModel } = require("../modals/Flower.modal");

let getFavFlowers = (req, res) => {
  flowerModel.find().then((data) => {
    res.status(200).json(data);
  });
};

let createFlower = async (req, res) => {
  let flowerData = req.body;
  let newFlower = new flowerModel(flowerData);
  await newFlower.save();
  flowerModel.find().then((data) => {
    res.json(data);
  });
};

const deleteFlower = (req, res) => {
  let idFlower = req.params.id;
  flowerModel.findByIdAndDelete(idFlower).then(() => {
    flowerModel.find().then((data) => res.json(data));
  });
};

const updateFlower = async (req, res) => {
  let id = req.params.id;
  let { title, description, toUSD, image_url } = req.body;
  await flowerModel.findOne({_id: id }).then((data) => {
    data.title = title;
    data.description = description;
    data.toUSD = toUSD;
    data.image_url = image_url;
    data.save();
  });
  let updatesFlowers = await flowerModel.find();
  res.status(200).json(updatesFlowers);
};

module.exports = {
  getFavFlowers,
  createFlower,
  deleteFlower,
  updateFlower,
};
