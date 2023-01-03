const router = require("express").Router();
const Paiment = require("../Controllers/PaimentController");
module.exports = app => {
  router.post("/create_paiment", Paiment.CreatePaiment);
  router.put("/update_paiment/:id", Paiment.UpdatePaiment);
  router.get("/show_paiment", Paiment.ShowPaiment);
  app.use("/api/auth/", router);
};
