const router = require("express").Router();
const Client = require("../Controllers/ClientControllers");
module.exports = app => {
    router.post("/CreateClient", Client.CreateClient);
  app.use("/api/auth/", router);
};
