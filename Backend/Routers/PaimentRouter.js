const {verifyToken}=require('../Middleware/Authentification')
const router = require("express").Router();
const Paiment = require("../Controllers/PaimentController");
module.exports = app => {
  router.post("/create_paiment",Paiment.CreatePaiment,verifyToken());
  router.put("/update_paiment/:id", Paiment.UpdatePaiment);
  router.get("/show_paiment",verifyToken(),Paiment.ShowPaiment);
  app.use("/api/paiment", router);
};
