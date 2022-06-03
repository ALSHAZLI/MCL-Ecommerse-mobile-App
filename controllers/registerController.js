
const bcrypt = require("bcryptjs");
const users = require("../models/Users");


let getPageRigester =  (req, res) => {
    return res.send("profile sure : You Are Loged In");
  };


let createNewUser =  async (req, res) => {
    const { phone, fullname,password } = req.body;
      bcrypt.hash(password, 10).then((hash) => {
       users.create({
        fullname: fullname,
        phone: phone,
        password: hash,
      })
        .then(() => {
          return res.redirect(201,"/login");
          //   console.log(user);
        })
        .catch((err) => {
          if (err) {
              return res.redirect(404,"/register");
            
          }
        });
    });
  };

  module.exports = {
    getPageRigester: getPageRigester,
    createNewUser : createNewUser
  };