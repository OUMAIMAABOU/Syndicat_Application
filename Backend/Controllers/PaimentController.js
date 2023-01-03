const Paiment = require("../Models/PaimentModel");
const Appratemen = require("../Models/AppratementModel");

exports.CreatePaiment = async (req, res) => {
  try {
    const { body } = req; 
      if (await Paiment.create({ ...body })) res.status(200).send("create");
      else res.status(400).json("some thing worning");
  } catch (e) {
    res.status(400).send(e.message);
  }
};

exports.UpdatePaiment = async (req, res) => {
  try {
    const { body } = req;
    if (await Paiment.updateOne({ _id: req.params.id }, { ...body }))
      res.status(200).send("update");
      else  res.status(400).send(" not update")
  } catch (e) {
    res.status(400).send(e);
  }
};
  exports.ShowPaiment=async(_,res)=>{
    try{
      res.json(await Paiment.find().populate({path:'appartementid', model: Appratemen}))
    }catch(e){
      res.status(400).send(e);
    }
   }