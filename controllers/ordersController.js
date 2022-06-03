
const orders = require("../models/ordors");
// const u = require("./registerController")

// const categories = require("../models/categories");
// const products = require("../models/products");
// const Sequelize = require('sequelize');
// const sequelize = require('../models/index').sequelize;
// const categories = require("../models/categories");
// categories.hasMany(products,{as : "products",foreingKey: "categoriesId"})
// products.belongsTo(categories,{as : "categories",foreingKey: "categoriesId"})

const createNewOrders = async (req, res) => {
    const { name,image,price ,quantity} = req.body;
    const  category_id = 3
    orders.create({
        userId: user.id,
        name: name,
        image: image,
        price : price,
        quantity: quantity
    })
    // db.orders.create({
    //     userId: u.user.id,
    //     name: "dfdfdf",
    //     image: "gfgfdgfdgf.com",
    //     price : 222.0,
    //     quantity: 1
    // })
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

getAllOrders = (req,res)=>{
    orders.findAll({ where: {userId : user.id}}).then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while  HDJSDJSSuccess retrieving tutorials."
        });
      });
};


const getOrdersById = (req,res)=>{
    const id = req.params.id;

    orders.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Product with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Products with id=" + id
      });
    });
}


//update
const updateOrders = (req,res)=>{
    const id = req.params.id;
    orders.update(req.body, {
        where: { id: id }
      }).then(num => {
        if (num == 1) {
          res.status(200).send({
            message: "Orders was updated successfully."
          });
        } else {
          res.status(404).send({
            message: `Cannot update Orders with id=${id}. Maybe Orders was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Orders with id=" + id
        });
      });
}

const deletOrdersById = (req,res)=>{
    const id = req.params.id;
    orders.destroy({
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "Orders was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete Orders with id=${id}. Maybe Orders was not found!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete Orders with id=" + id
          });
        });
}


module.exports = {
    createNewOrders: createNewOrders,
    getOrdersById: getOrdersById,
    updateOrders: updateOrders,
    deletOrdersById: deletOrdersById,
    getAllOrders: getAllOrders
};