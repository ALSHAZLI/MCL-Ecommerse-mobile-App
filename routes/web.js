const express = require('express');
const categoriesController = require('../controllers/categoriesController');
const ordersController = require('../controllers/ordersController');
const productsController = require('../controllers/productsController');
const loginController = require('../controllers/loginController');
const profileController = require('../controllers/profile.controller');
const registerController = require('../controllers/registerController');
// const categoriesProducts = require('../controllers/categoriesProducts');

const { createTokens, validateToken } = require("../JWT");

// const { createTokens, validateToken } = require("../services/JWT");


const router = express.Router();


let initWebRoutes = (app) => {
    // router.get("/", loginController.checkLoggedIn, homePageController.handleHelloWorld,validateToken);
    
    //profile
    router.get("/profile",profileController.getPageProfile,validateToken);

    //login
    router.get("/login",loginController.getPageLogin);
    router.post("/login",loginController.handleLogin);

    //register
    router.get("/register",registerController.getPageRigester);
    router.post("/register",registerController.createNewUser);

    //Products
    router.post("/products",productsController.createNewProduct);
    router.get("/products/:id",productsController.getProductById);
    router.patch("/products/:id",productsController.updateProduct);
    router.delete("/products/:id",productsController.deletProductById);
    //Hear we get all product thats belongs to spsific catigoresId getAllProducts
    router.get("/products",productsController.getAllProducts);

    //Orders
    router.post("/orders",ordersController.createNewOrders);
    router.get("/orders/:id",ordersController.getOrdersById);
    router.patch("/orders/:id",ordersController.updateOrders);
    router.delete("/orders/:id",ordersController.deletOrdersById);
    //Hear we get all product thats belongs to spsific catigoresId getAllProducts
    router.get("/orders",ordersController.getAllOrders);

    //categories
    router.post("/categories",categoriesController.createNewCat);
    router.get("/categories",categoriesController.getAllCat);
    router.patch("/categories/:id",categoriesController.updateCat);
    router.delete("/categories/:id",categoriesController.deletCatById);
    router.get("/categories/:id",categoriesController.getCatById);

    // router.post("/login",loginController.handleLogin);
    // router.post("/login",async (req, res) => {

    //     const { phone, password } = req.body;

    //     let user = await findUserByEmail(phone);
    //     if (user) {

    //     await bcrypt.compare(password, user.password).then((isMatch) => {
    //         if (isMatch) {
    //             // resolve(true);
    //             const accessToken = createTokens(user);

    //             res.cookie("access-token", accessToken, {
    //                 maxAge: 60 * 60 * 24 * 30 * 1000,
    //                 httpOnly: true,
    //              });

    //              res
    //              .status(201)
    //              .json({ token: accessToken });
    //         } else {
    //             // reject(`The password that you've entered is incorrect`);
    //             res
    //                 .status(400)
    //                 .json({ error: "Wrong phone and Password Combination!" });
    //         }
    //     });

    //   }  else {
    //     res.status(401).json({
    //         message:"Fillera 222222 !!!!",
            
    //     })
    //     // reject(`This user email "${phone}" doesn't exist`);
    //     console.log(`This user email "${phone}" doesn't exist`);
    // }  
    // }
    // );

    // router.post("/cat",catController.createNewCat);
    // router.get("/cat",catController.getCat);
    
    // router.get("/register",RegisterController.getPageRegister);
    // router.post("/register",
    //      RegisterController.createNewUser
    //     );
    // router.post("/logout", loginController.postLogOut);
 
    return app.use('/',router);
    };

    module.exports = initWebRoutes;