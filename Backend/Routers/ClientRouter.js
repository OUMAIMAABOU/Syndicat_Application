const {verifyToken}=require('../Middleware/Authentification')
const router = require("express").Router();
const Client = require("../Controllers/ClientControllers");
module.exports = app => {
  router.post("/create_client",verifyToken(),Client.CreateClient);
  router.put("/update_client/:id",verifyToken(),Client.UpdateClient);
  router.delete("/delete_client/:id",verifyToken(),Client.DeleteClient);
  router.get("/show_client",verifyToken(),Client.ShowClient);
  app.use("/api/client", router);
};
