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
//   roleid:{
//     type: mongoose.Schema.Types.ObjectId,
//      ref: 'roles'
//     }
 
}
)

 module.exports= mongoose.model("paiment", paiment);



