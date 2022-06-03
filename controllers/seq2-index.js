'use strict';
const sequelize = require('./seq-index').sequelize;
const categories = require("../models/categories");
const products = require("../models/products");
// const Client = require('./client');


categories.hasMany(products,{as : "products",foreingKey: "categoriesId"});
products.belongsTo(categories,{as : "categories",foreingKey: "categoriesId"});

sequelize.sync({force: false}).then(function () {
    console.log("Database Configured");
});
module.exports = {categories, products};