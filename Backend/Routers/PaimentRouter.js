const {verifyToken}=require('../Middleware/Authentification')
const router = require("express").Router();
const Paiment = require("../Controllers/PaimentController");
module.exports = app => {
  router.post("/",Paiment.CreatePaiment,verifyToken());
  router.put("/:id", Paiment.UpdatePaiment);
  router.get("/",verifyToken(),Paiment.ShowPaiment);
  app.use("/api/paiment", router);
};
