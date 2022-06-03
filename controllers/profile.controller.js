
const express =require("express");

let getPageProfile =  (req, res) => {
    return res.send("profile sure : You Are Loged In");
  };

  module.exports = {
    getPageProfile: getPageProfile,
  };