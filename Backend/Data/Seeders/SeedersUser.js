require('dotenv').config();
const db = require('../../Config/dbconfig');
const User = require('../../Models/SyndicatModel');
const UserFactorie = require('../factories/UserFactories');
//commande :npm run user=>insert user account
User.insertMany(UserFactorie);
console.log('user created');

