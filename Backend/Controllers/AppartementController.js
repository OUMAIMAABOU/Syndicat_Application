const Appartement = require("../Models/AppratementModel");
const Client =require("../Models/ClientModel")

// // method : post => url : /api/appartement/CreateAppartement =>acces : Private
exports.CreateAppartement = async (req, res) => {
  try {
    const { body } = req;
    if (await Appartement.findOne({ numero: req.body.numero }))
      res.status(400).send("already existe");
    else {
      if (await Appartement.create({ ...body })) res.status(200).send("create");
      else res.status(400).json("some thing worning");
    }
  } catch (e) {
    res.status(400).send(e.message);
  }
};

// // method : put => url : /api/appartement/modifierAppartement/:id =>acces : Private
exports.UpdateAppartement=async(req,res)=>{
  try{
const { body}=req;
if(await Appartement.updateOne({_id:req.params.id},{...body})) res.status(200).send("update")

  }catch(e){
    res.status(400).send(e);

  }
}

// method : delete => url : /api/appartement/deleteAppartements/:id =>acces : Private
exports.DeleteAppartement = async (req, res) => {
  try {
    if(await Appartement.deleteOne({_id:req.params.id}))  res.status(200).send("delete");
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