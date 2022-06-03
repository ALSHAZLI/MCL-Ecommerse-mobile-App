module.exports = ( DataTypes) => {

const categories = require("../models");

const Sequelize = require('sequelize');

const sequelize=require('../seq-index').sequelize;
const db = require("../models");



    const instanceMethods = {
        toJSON() {
            const values = Object.assign({}, this.get());
    
            return values;
        },
    };
    const products = sequelize.define("products", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        autoIncrement: true,
        primaryKey: true,
        
        
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        
      },
      price: {
        type: Sequelize.DOUBLE,
        allowNull: false,                           
        unique: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
        
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false,
       
      },
      createdAt:{
          type: Sequelize.DATE,
          defaultValue: null
      },updatedAt:{
          type: Sequelize.DATE,
          defaultValue: null
      }
    },{ instanceMethods });
    
    // categories.hasMany(products,{as : "products",foreingKey: "categoriesId"})
    // prod.belongsTo(categories,{as : "categories",foreingKey: "categoriesId"})
    return products;
  };


// // const Sequelize = require('sequelize');
// // const sequelize=require('../models/index').sequelize;

// // 'use strict';
// // const {
// //   Model
// // } = require('sequelize');
// // module.exports = (sequelize, DataTypes) => {
// //   class Categories extends Model {
// //     /**
// //      * Helper method for defining associations.
// //      * This method is not a part of Sequelize lifecycle.
// //      * The `models/index` file will call this method automatically.
// //      */
// //     static associate(models) {
// //       // define association here
// //     }
// //   }
// //   Categories.init({
// //     name: DataTypes.STRING,
// //     image: DataTypes.STRING,
// //     categoryId: DataTypes.INTEGER,
// //     description: DataTypes.STRING,
// //     price: DataTypes.DOUBLE,
// //   }, {
// //     sequelize,
// //     modelName: 'products',
// //   });
// //   return products;
// // };