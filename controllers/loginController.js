const bcrypt = require("bcryptjs");
const users = require("../models/Users");
const { createTokens, validateToken } = require("../JWT");
let getPageLogin =  (req, res) => {
    return res.send("THIS IS LOGIN PAGE");
  };

let handleLogin = async (req, res) => {
    try {
        if (!req.body.phone || !req.body.password) {
          return res.status(400).send("Phone and password is required");
        }
    
        const { phone, password } = req.body;
    
        let user = await users.findOne({ where: { phone } });
    
        if (!user) {
          console.log("user Phone not found");
          return res.status(401).json({ message: "Authentication failed ---- user Phone not found" });
        }
    
        const validPassword = await bcrypt.compare(password, user.get("password"));
    
        if (!validPassword) {
          console.log("Password is not valid");
          return res.status(401).json({ message: "Authentication failed" });
        }
        const accessToken = createTokens(user);
    
          res.cookie("access-token", accessToken, {
            maxAge: 60 * 60 * 24 * 30 * 1000,
            httpOnly: true,
          });
          console.log(user.dataValues);
         return res.redirect(200,"/profile");
        //   return res.status(201).json({
        //     message:`Authorization granted!  !!!!`,
        //     token : accessToken
            
        // });
    
        // return res.status(200).json({ message: "Authorization granted!" });
      } catch (err) {
        console.log("Err: ", err);
        res.status(500).json({ error: err });
      }
}

  module.exports = {
    getPageLogin: getPageLogin,
    handleLogin : handleLogin
  };