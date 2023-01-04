const app = require('../server');
 require('./ClientTest.test')(app)
 require('./PaimentTest.test')(app)
 require('./AppratementTest.test')(app)
 require('./AuthentificationController.test')(app)