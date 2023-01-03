const router = require("express").Router();
const Client = require("../Controllers/ClientControllers");
module.exports = app => {
  router.post("/create_client", Client.CreateClient);
  router.put("/update_client/:id", Client.UpdateClient);
  router.delete("/delete_client/:id", Client.DeleteClient);
  router.get("/show_client", Client.ShowClient);
  app.use("/api/auth/", router);
};
