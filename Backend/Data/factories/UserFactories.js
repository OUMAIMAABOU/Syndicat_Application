const bcryptjs = require("bcryptjs");
// create user accout
const hash =bcryptjs.hashSync("admin",10)
const Users = [
  {
    fullname: "OUMAIMA ABOU EL HAITAM",
    email: "Admin@gmail.com",
    password: hash,
  },
];

module.exports = Users;
