const mongoose = require("mongoose");
// create table Payement

const paiment = new mongoose.Schema(
{
  prix:{
    type:Number,
    required: true
  }, 
  Date:{
    type: Date,
    required: true
  },
  appartementid:{
    type: mongoose.Schema.Types.ObjectId,
     ref: 'appartements',
     required: true
    }
}
)
 module.exports= mongoose.model("paiment", paiment);



