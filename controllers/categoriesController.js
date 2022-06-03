
// const db = require("../models");
 const categories = require("../models/categories");
// const Sequelize = require('sequelize');
// const sequelize = require('../models/index').sequelize;
// const categories = require("./seq2-index");
 const products = require("../models/products");

const createNewCat = async (req, res) => {
    const { name,image } = req.body;
    categories.create({

        name: name,
        image: image,
    })
    .then((result,err) => {
        if(!err){
            // res.json("CATEGORIES REGISTERED SYCCESS *****");
            res.status(201).send("CATEGORIES REGISTERED SYCCESS *****");
        }else{
            res.status(400).send("CATEGORIES REGISTERED FILIEAR !!!!");
        }
    })
    .catch((err) => {
      if (err) {
        res.status(400).json({ error: err });
      }
    });
}

getAllCat = (req,res)=>{
    categories.findAll().then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
        // const title = req.query.title;
        // var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
        // Tutorial.findAll({ where: condition })
        //   .then(data => {
        //     res.send(data);
        //   })
        //   .catch(err => {
        //     res.status(500).send({
        //       message:
        //         err.message || "Some error occurred while retrieving categories."
        //     });
        //   });
};


const getCatById = (req,res)=>{
    const id = req.params.id;

    categories.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find categories with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving categories with id=" + id
      });
    });
}


//update
const updateCat = (req,res)=>{
    const id = req.params.id;
    categories.update(req.body, {
        where: { id: id }
      }).then(num => {
        if (num == 1) {
          res.status(200).send({
            message: "categories was updated successfully."
          });
        } else {
          res.status(404).send({
            message: `Cannot update categories with id=${id}. Maybe categories was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating categories with id=" + id
        });
      });
}

const deletCatById = (req,res)=>{
    const id = req.params.id;
    categories.destroy({
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "categories was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete categories with id=${id}. Maybe Tutorial was not found!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete categories with id=" + id
          });
        });
}


module.exports = {
    createNewCat: createNewCat,
    getAllCat: getAllCat,
    updateCat: updateCat,
    deletCatById: deletCatById,
    getCatById: getCatById
};