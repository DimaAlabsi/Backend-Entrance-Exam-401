"use strict";
const mongoose=require("mongoose");
let flowerSchema= new mongoose.Schema({
    title:String,
    description: String,
    toUSD: String,
    image_url: String

})
const flowerModel=mongoose.model("flowersses",flowerSchema );

let seedData=()=>{
    let data= new flowerModel({
        title:"v.salvatore7.gs@gmail.com",
        description:"dema.yaser8@gmail.com",
        toUSD:"",
        image_url:""
    });
    data.save();
}
seedData();
module.exports={
    flowerModel
}