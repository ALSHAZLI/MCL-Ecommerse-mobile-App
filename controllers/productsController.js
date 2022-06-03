const products = require("../models/products");
// const categories = require("../models/categories");
// const products = require("../models/products");
//  const Sequelize = require('sequelize');
//  const sequelize = require('../models/index').sequelize;
// const categories = require("../models/categories");
// categories.hasMany(products,{as : "products",foreingKey: "categoriesId"})
// products.belongsTo(categories,{as : "categories",foreingKey: "categoriesId"})

const createNewProduct = async (req, res) => {
    const { name,image,categoryId,description,price } = req.body;
    // const  category_id = 3
    products.create({

        name: name,
        image: image,
        categoryId : categoryId,
        description : description,
        price : price
    })
    .then((result,err) => {
        if(!err){
            
            res.status(201).send("Product REGISTERED SYCCESSFLY");
        }else{
            res.status(400).send("Product REGISTERED FILIEAR !!!!");
        }
    })
    .catch((err) => {
      if (err) {
        res.status(400).json({ error: err });
      }
    });
}

getAllProducts = (req,res)=>{
    products.findAll({ where: {categoryId : 4}}).then(data => {
    res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while  HDJSDJSSuccess retrieving tutorials."
        });
      });
};


const getProductById = (req,res)=>{
    const id = req.params.id;

    products.findByPk(id)
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
const updateProduct = (req,res)=>{
    const id = req.params.id;
    products.update(req.body, {
        where: { id: id }
      }).then(num => {
        if (num == 1) {
          res.status(200).send({
            message: "Product was updated successfully."
          });
        } else {
          res.status(404).send({
            message: `Cannot update Product with id=${id}. Maybe Product was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Product with id=" + id
        });
      });
}

const deletProductById = (req,res)=>{
    const id = req.params.id;
    products.destroy({
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "Product was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete Product with id=${id}. Maybe Tutorial was not found!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete Product with id=" + id
          });
        });
}


module.exports = {
    createNewProduct: createNewProduct,
    getProductById: getProductById,
    updateProduct: updateProduct,
    deletProductById: deletProductById,
    getAllProducts: getAllProducts
};