const Appartement = require("../Models/AppratementModel");

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
    res.status(400).send(e);
  }
};

exports.DeleteAppartement = async (req, res) => {
  try {
    if(await Appartement.deleteOne({_id:req.params.id}))  res.status(200).send("delete");
  } catch (e) {
    res.status(400).send(e);
  }
};
