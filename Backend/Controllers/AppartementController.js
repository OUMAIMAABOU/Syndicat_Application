const Appartement = require("../Models/AppratementModel");
const Client =require("../Models/ClientModel")

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

exports.UpdateAppartement=async(req,res)=>{
  try{
const { body}=req;
if(await Appartement.updateOne({_id:req.params.id},{...body})) res.status(200).send("update")

  }catch(e){
    res.status(400).send(e);

  }
}

exports.DeleteAppartement = async (req, res) => {
  try {
    if(await Appartement.deleteOne({_id:req.params.id}))  res.status(200).send("delete");
  } catch (e) {
    res.status(400).send(e);
  }
};
 exports.ShowAppartement=async(_,res)=>{
  try{
    res.json(await Appartement.find().populate({path:"client_id",model:Client}))
  }catch(e){
    res.status(400).send(e);
  }
 }