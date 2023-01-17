const router = require("express").Router();
const Authentification = require("../Controllers/AuthentificationController.js");
module.exports = app =>
{    
  router.post('/login',Authentification.Login)
  app.use('/api/auth', router);
};