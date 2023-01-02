const mongoose = require('mongoose')

const Appartement= new mongoose.Schema(
    {
        Adresse:{
            type:String,
            require:true
        },
        isRented:Boolean,
        client:{
            name:String,
            CIN:String,
            tele:String
        }
    },{timestamps:true}
)
module.exports=mongoose.model("appartement",Appartement)