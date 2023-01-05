const {verifyToken}=require('../Middleware/Authentification')
const router = require("express").Router();
const Client = require("../Controllers/ClientControllers");
module.exports = app => {
  router.post("/",verifyToken(),Client.CreateClient);
  router.put("/:id",verifyToken(),Client.UpdateClient);
  router.delete("/:id",verifyToken(),Client.DeleteClient);
  router.get("/",verifyToken(),Client.ShowClient);
  app.use("/api/client", router);
};
