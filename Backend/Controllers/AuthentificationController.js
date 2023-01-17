const Admin = require("../Models/SyndicatModel");
const bcryptjs = require("bcryptjs");
const localstorage=require('local-storage')
const jwt = require('jsonwebtoken')
const Paiment = require("../Models/PaimentModel");
// // method : post => url : api/auth/login =>acces : Public
exports.Login = async (req, res) => {
  try {
    const users = await Admin.findOne({ email: req.body.email });
    const payload={userId:users._id,username:users.fullname}
    if (users) {
      if (await bcryptjs.compare(req.body.password, users.password)) {
        localstorage('token', jwt.sign(payload,process.env.ACCESS_TOKEN,{expiresIn:"120m"}))
        res.status(200).json({token:localstorage('token'),username:users.fullname});
      } else res.status(400).json("password invalide");
    } else res.status(400).json("can't find this user");
  } catch (e) {
    return res.status(400).json({ message: e });
  }
};


