const Client = require("../Models/ClientModel");

exports.CreateClient = async (req, res) => {
  try {
    const { body } = req;
    if (await Client.findOne({ CIN: req.body.CIN }))
      res.status(400).send("already existe");
    else {
      if (await Client.create({ ...body })) res.status(200).send("create");
      else res.status(400).json("some thing worning");
    }
  } catch (e) {
    res.status(400).send(e.message);
  }
};

exports.UpdateClient = async (req, res) => {
  try {
    const { body } = req;
    if (await Client.updateOne({ _id: req.params.id }, { ...body }))
      res.status(200).send("update");
  } catch (e) {
    res.status(400).send(e);
  }
};

exports.DeleteClient = async (req, res) => {
    try {
      if(await Client.deleteOne({_id:req.params.id}))  res.status(200).send("delete");
    } catch (e) {
      res.status(400).send(e);
    }
  };
