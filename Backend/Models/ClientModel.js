const mongoose = require("mongoose");

const Client = new mongoose.Schema({
  fullname: {
    type:String,
    require:true
  },
  CIN:{
    type:String,
    require:true,
    unique:true
  },
  tele:String
});
module.exports = mongoose.model("client", Client);
