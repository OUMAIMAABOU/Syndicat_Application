const Appartement = require("../Models/AppratementModel");
const Client =require("../Models/ClientModel")

// // method : post => url : /api/appartement/CreateAppartement =>acces : Private
exports.CreateAppartement = async (req, res) => {
  try {
    const { body } = req;
     (await Appartement.findOne({ numero: req.body.numero }))?
      res.status(400).json("Appartement number already exist")
   :(await Appartement.create({ ...body }))? res.status(200).send("The Appartement was created successfully"):
       res.status(400).json("The Appartement wasn't created successfully")
    
  } catch (e) {
    res.status(400).send(e.message);
  }
};

// // method : put => url : /api/appartement/modifierAppartement/:id =>acces : Private
exports.UpdateAppartement=async(req,res)=>{
  try{
const { body}=req;
((await Appartement.updateOne({_id:req.params.id},{...body})).modifiedCount)? res.status(200).send("The Appartement was updated successfully")
 :res.status(400).send("The Appartement wasn't updated successfully");
  }catch(e){
    res.status(400).send(e);

  }
}

// method : delete => url : /api/appartement/deleteAppartements/:id =>acces : Private
exports.DeleteAppartement = async (req, res) => {
  try {
    ((await Appartement.deleteOne({_id:req.params.id})).deletedCount)? res.status(200).send("The apartment was Deleted successfully.")
    : res.status(400).send("The apartment wasn't Deleted");

  } catch (e) {
    res.status(400).send(e);
  }
};

 // method : get => url : /api/appartement/showAppartements =>acces : Private
 exports.ShowAppartement=async(_,res)=>{
  try{
    res.status(200).json(await Appartement.find().populate({path:"client_id",model:Client}))
  }catch(e){
    res.status(400).send(e);
  }
 }