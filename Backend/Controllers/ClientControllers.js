const Client =require('../Models/ClientModel')

exports.CreateClient = async (req, res) => {
    try {
      const { body } = req;
      if (await Client.findOne({ CIN: req.body.CIN}))
        res.status(400).send("already existe");
      else {
        if (await Client.create({ ...body })) res.status(200).send("create");
        else res.status(400).json("some thing worning");
      }
    } catch (e) {
      res.status(400).send(e.message);
    }
  };