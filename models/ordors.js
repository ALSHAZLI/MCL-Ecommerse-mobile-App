
// 'use strict'
// const { Model } = require('sequelize')
// module.exports = (sequelize, DataTypes) => {
//   class Order extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate({ User }) {
//       // define association here
     
//       this.belongsTo(User, { foreignKey: 'userId', as: 'user' })
//        userId
//     }

//     toJSON() {
//       return { ...this.get(), id: undefined, userId: undefined }
//     }
//   }
//   Order.init(
//     {
//       uuid: {
//         type: DataTypes.UUID,
//         defaultValue: DataTypes.UUIDV4,
//       },
//       name: {
//                     type: DataTypes.STRING(255),
//                     allowNull: false,
                    
//                   },
//                   image: {
//                     type: DataTypes.STRING(885),
//                     allowNull: false,
                    
//                   },
//                   quantity: {
//                     type: DataTypes.INTEGER(11),
//                     allowNull: false,
//                   },
//                   price: {
//                     type: DataTypes.DOUBLE,
//                     allowNull: false,                           
                    
//                   },
//                   createdAt:{
//                       type: DataTypes.DATE,
//                       defaultValue: null
//                   },updatedAt:{
//                       type: DataTypes.DATE,
//                       defaultValue: null
//                   }
//     },
//     {
//       sequelize,
//       tableName: 'orders',
//       modelName: 'Order',
//     }
//   )
//   return Order
// }


module.exports = ( DataTypes) => {
 
    
    const Sequelize = require('sequelize');
    
    const sequelize=require('../seq-index').sequelize;
    
    
    
    
        const instanceMethods = {
            toJSON() {
                const values = Object.assign({}, this.get());
        
                return values;
            },
        };
        const orders = sequelize.define("orders", {
            // userId: {
            //     type: Sequelize.INTEGER(11),
            //     allowNull: true,        
            //   },
          id: {
            type: Sequelize.INTEGER(11),
            allowNull: true,
            autoIncrement: true,
            primaryKey: true,
            
            
          },
          name: {
            type: Sequelize.STRING(255),
            allowNull: false,
            
          },
          image: {
            type: Sequelize.STRING(885),
            allowNull: false,
            
          },
          quantity: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
          },
          price: {
            type: Sequelize.DOUBLE,
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
        
      
        return orders;
      };
    
    
//     // const Sequelize = require('sequelize');
//     // const sequelize=require('../models/index').sequelize;
    
//     // 'use strict';
//     // const {
//     //   Model
//     // } = require('sequelize');
//     // module.exports = (sequelize, DataTypes) => {
//     //   class Categories extends Model {
//     //     /**
//     //      * Helper method for defining associations.
//     //      * This method is not a part of Sequelize lifecycle.
//     //      * The `models/index` file will call this method automatically.
//     //      */
//     //     static associate(models) {
//     //       // define association here
//     //     }
//     //   }
//     //   Categories.init({
//     //     name: DataTypes.STRING,
//     //     image: DataTypes.STRING,
//     //     categoryId: DataTypes.INTEGER,
//     //     description: DataTypes.STRING,
//     //     price: DataTypes.DOUBLE,
//     //   }, {
//     //     sequelize,
//     //     modelName: 'products',
//     //   });
//     //   return products;
//     // };