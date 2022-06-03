
// 'use strict'
// const { Model } = require('sequelize')
// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate({ orders }) {
//       // define association here
//       this.hasMany(orders, { foreignKey: 'userId', as: 'orders' })
//     }

//     toJSON() {
//       return { ...this.get(), id: undefined }
//     }
//   }
//   User.init(
//     {
//       uuid: {
//         type: DataTypes.UUID,
//         defaultValue: DataTypes.UUIDV4,
//       },
//       fullname: {
//         type: DataTypes.STRING(152),
//         allowNull: false,
//       },
//       phone: {
//               type: DataTypes.INTEGER(15),
//                allowNull: false,
//                unique: true,
               
        
//       },
//       password: {
//                type: DataTypes.STRING(266),
//                allowNull: false,
               
        
//     },
// createdAt:{
//              type: DataTypes.DATE,
//              defaultValue: null
//          },updatedAt:{
//              type: DataTypes.DATE,
//              defaultValue: null
//          }
// },
//     {
//       sequelize,
//       tableName: 'users',
//       modelName: 'User',
//     }
//   )
//   return User
// }


module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define("users", {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      autoIncrement: true,
      primaryKey: true,
      defaultValue: 0
      
    },
    phone: {
      type: DataTypes.INTEGER(15),
      allowNull: false,
      unique: true,
      defaultValue: 0111111111
    },
    fullname: {
      type: DataTypes.STRING(152),
      allowNull: false,
      defaultValue: "kasem"
    },
    password: {
      type: DataTypes.STRING(266),
      allowNull: false,
      defaultValue: "password11"
    },createdAt:{
        type: DataTypes.DATE,
        defaultValue: null
    },updatedAt:{
        type: DataTypes.DATE,
        defaultValue: null
    }
  });
  return users;
};
