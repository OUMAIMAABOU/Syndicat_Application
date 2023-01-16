const Paiment = require("../Models/PaimentModel");
const Appratemen = require("../Models/AppratementModel");
const Client = require("../Models/ClientModel");

// method : post => url : /api/paiment/create_paiment =>acces : Private
exports.CreatePaiment = async (req, res) => {
  try {
    const { body } = req;
     (await Paiment.create({ ...body }))?
      res.status(200).send("The Paiment was add successfully"):
     res.status(400).json("The Paiment wasn't add successfully");
  } catch (e) {
    res.status(400).send(e.message);
  }
};

// method : put => url : /api/paiment/update_paiment/:id =>acces : Private
exports.UpdatePaiment = async (req, res) => {
  try {
    const { body } = req;
    if (
      (await Paiment.updateOne({ _id: req.params.id }, { ...body }))
        .modifiedCount
    )
      res.status(200).send("The Paiment was update successfully");
    else res.status(400).send("The Paiment wasn't update successfully");
  } catch (e) {
    res.status(400).send(e);
  }
};

// method : get => url : /api/paiment/show_paiment =>acces : Private
exports.ShowPaiment = async (_, res) => {
  try {
    res
      .status(200)
      .json(
        await Paiment.find().populate({
          path: "appartementid",
          model: Appratemen,
          populate: { path: "client_id", model: Client },
        })
      );
  } catch (e) {
    res.status(400).send(e);
  }
};
