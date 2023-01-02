const mongoose = require("mongoose");
// create table user

const Syndique = new mongoose.Schema(
{
  fullname:{
    type: String,
    required: true
  }, 
  email:{
    type: String,
    required: true,
    unique: true
  },
  password:String,
},{timestamps:true})

 module.exports= mongoose.model("syndique", Syndique);

