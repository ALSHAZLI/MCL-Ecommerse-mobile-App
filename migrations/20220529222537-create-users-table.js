'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     return queryInterface.createTable(
      "users", {
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
      }
     )
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.dropTable('users');
     
  }
};
