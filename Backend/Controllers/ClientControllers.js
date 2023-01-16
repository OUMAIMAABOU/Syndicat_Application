const Client = require("../Models/ClientModel");
const {verificationTelephone,verificationCIN} =require("../Utils/Email.Utils")

// method : post => url : api/client/CreateAppartement =>acces : Private
exports.CreateClient = async (req, res) => {
  try {
    const { body } = req;
    if(verificationCIN(body.CIN) && verificationTelephone(body.tele)){
      (!await Client.findOne({ CIN: req.body.CIN }))?
      ((await Client.create({ ...body }))? res.status(200).send("The Client was created successfully")
      : res.status(400).json("The Client wasn't created successfully")):  
      res.status(400).send("CIN already existe")
    }else res.status(400).send("Telephone or CIN invalide");
    

  } catch (e) {
    res.status(400).send(e.message);
  }
};

// method : put => url : api/client/update_client/:id =>acces : Private
exports.UpdateClient = async (req, res) => {
  try {
    const { body } = req;
    (verificationCIN(body.CIN) && verificationTelephone(body.tele))?
      (((await Client.updateOne({ _id: req.params.id }, { ...body })).modifiedCount)?res.status(200).send("The Client was Updated successfully"):
       res.status(400).send("The Client wasn't Updated successfully")):
       res.status(400).send("Telephone or CIN invalide");
    } catch (e) {
      res.status(400).send(e);
    }
   
};

// method : delete => url : api/client/delete_client/:id =>acces : Private
exports.DeleteClient = async (req, res) => {
    try {
     ((await Client.deleteOne({_id:req.params.id})).deletedCount)?res.status(200).send("The Client was Deleted successfully")
      : res.status(400).send("The Client wasn't Deleted successfully")
    } catch (e) {
      res.status(400).send(e);
    }
  };

  // method : get => url : /api/client/show_client =>acces : Private
  exports.ShowClient=async(_,res)=>{
    try{
      res.status(200).json(await Client.find())
    }catch(e){
      res.status(400).send(e);
    }
   }