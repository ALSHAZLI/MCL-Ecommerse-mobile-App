
module.exports = async ()=>{
  const Sequelize = require('sequelize');
    
  const sequelize=require('./seq-index').sequelize;
    const bcrypt = require("bcryptjs");
    const db = require("./models");
const Users = require("./models/Users")
const orders = require("./models/Users")

Users.hasMany(Users,{foreingKey: "userId"})
orders.belongsTo(categories,{foreingKey: "userId"})


const order = async (req, res) => {
    const { name,image,price ,quantity} = req.body;
    // const  category_id = 3
    // db.orders.create({
    //     userId: user.id,
    //     name: name,
    //     image: image,
    //     price : price,
    //     quantity: quantity
    // })
    db.orders.create({
        userId: user.id,
        name: "dfdfdf",
        image: "gfgfdgfdgf.com",
        price : 222.0,
        quantity: 1
    })
    .then((result,err) => {
        if(!err){
            
            res.status(201).send("orders REGISTERED SYCCESSFLY");
        }else{
            res.status(400).send("Orders REGISTERED FILIEAR !!!!");
        }
    })
    .catch((err) => {
      if (err) {
        res.status(400).json({ error: err });
      }
    });
}



let getPageRigester =  (req, res) => {
    return res.send("profile sure : You Are Loged In");
  };


let user =  async (req, res) => {
    const { phone, fullname,password } = req.body;
      
       db.users.create({
        fullname: "lamr",
        phone: 09032903,
        password: "$10$/tJj.FjkXj3atRPxnXFWCuguaoM/Mu7qSXVY4aHVsnnJBa3Uzhuau",
      })
        .then(() => {
          return  res.status(201).send("user REGISTERED SYCCESSFLY");
          //   console.log(user);
        })
        .catch((err) => {
          if (err) {
              return  res.status(404).send("orders REGISTERED false *****");
            
          }
        });
    
  };

 const data =  await Users.findAll({where : {fullname : "lamr"},include : [ {model : orders , as : "orders"} ]}).catch((err)=>{
     console.log(err)
 });
 console.log(data);

  };