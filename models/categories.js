// module.exports = ( DataTypes) => {
  
  
//   const Sequelize = require('sequelize');
  
//   const sequelize=require('../seq-index').sequelize;
//   const products = require("../models");
//   // const categories = require("../models");
  
  
  
//       const instanceMethods = {
//           toJSON() {
//               const values = Object.assign({}, this.get());
      
//               return values;
//           },
//       };
//       const categories = sequelize.define("categories", {
//         id: {
//           type: Sequelize.INTEGER,
//           allowNull: true,
//           autoIncrement: true,
//           primaryKey: true,
          
          
//         },
//         name: {
//           type: Sequelize.STRING(255),
//           allowNull: false,
          
//         },
//         image: {
//           type: Sequelize.STRING(255),
//           allowNull: false,
         
//         },
//         createdAt:{
//             type: Sequelize.DATE,
//             defaultValue: null
//         },updatedAt:{
//             type: Sequelize.DATE,
//             defaultValue: null
//         }
//       },{ instanceMethods });
      
//       // categories.hasMany(products,{as : "products",foreingKey: "categoriesId"})
//       // User.hasMany(Foto,{as: 'fotos', foreignKey: 'userId'})
//       // products.belongsTo(categories,{as : "categories",foreingKey: "categoriesId"})
//       return categories;
//     };
  
  
  // const Sequelize = require('sequelize');
  // const sequelize=require('../models/index').sequelize;
  
  // 'use strict';
  // const {
  //   Model
  // } = require('sequelize');
  // module.exports = (sequelize, DataTypes) => {
  //   class Categories extends Model {
  //     /**
  //      * Helper method for defining associations.
  //      * This method is not a part of Sequelize lifecycle.
  //      * The `models/index` file will call this method automatically.
  //      */
  //     static associate(models) {
  //       // define association here
  //     }
  //   }
  //   Categories.init({
  //     name: DataTypes.STRING,
  //     image: DataTypes.STRING,
  //     categoryId: DataTypes.INTEGER,
  //     description: DataTypes.STRING,
  //     price: DataTypes.DOUBLE,
  //   }, {
  //     sequelize,
  //     modelName: 'products',
  //   });
  //   return products;
  // };



const Sequelize = require('sequelize');

const sequelize=require('../seq-index').sequelize;
const db = require("../models");

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Categories.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'categories',
  });
  
  return Categories;
};

