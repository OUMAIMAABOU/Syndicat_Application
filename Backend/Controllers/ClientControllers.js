const Client = require("../Models/ClientModel");

// method : post => url : api/client/CreateAppartement =>acces : Private
exports.CreateClient = async (req, res) => {
  try {
    const { body } = req;
    if (!await Client.findOne({ CIN: req.body.CIN })){
       if (await Client.create({ ...body })) res.status(200).send("create");
      else res.status(400).json("some thing worning");  
    }
    else  res.status(400).send("already existe");

  } catch (e) {
    res.status(400).send(e.message);
  }
};

// method : put => url : api/client/update_client/:id =>acces : Private
exports.UpdateClient = async (req, res) => {
  try {
    const { body } = req;
    if (await Client.updateOne({ _id: req.params.id }, { ...body }))
      res.status(200).send("update");
  } catch (e) {
    res.status(400).send(e);
  }
};

// method : delete => url : api/client/delete_client/:id =>acces : Private
exports.DeleteClient = async (req, res) => {
    try {
      if(await Client.deleteOne({_id:req.params.id}))  res.status(200).send("delete");
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