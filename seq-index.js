const Sequelize = require('sequelize');
const dbconfig=require('./config/config.json');

const sequelize = new Sequelize('mysql://' + "vandeek" + ":" +     "van123" + "@" + "127.0.0.1" + ":3306/" + "auth", {
host: "127.0.0.1",
dialect: "mysql",
pool: {
    min: 0,
    max: 5,
    idle: 1000
     }
});

 module.exports={sequelize};