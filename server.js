const express = require("express");
const app = express();
// const { sequelize, User, Post,db } = require('./models');
  const db = require("./models");
const initWebRoutes = require("./routes/web") 
// const work = require("./hand"); 

const cookieParser = require("cookie-parser");

const bodyParser = require("body-parser");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.json());
app.use(cookieParser());


// init all web routes
initWebRoutes(app);





db.sequelize.sync().then(() => {
    app.listen(3001, () => {
      console.log("SERVER RUNNING ON PORT 3001");
    });
  });
