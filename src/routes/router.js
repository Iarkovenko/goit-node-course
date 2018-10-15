const express = require('express');

const getAllProducts = require("./products/all-products");
const getProduct = require("./products/getProdcts");
const postNewUser = require("./users/postNewUser");
const postNewProduct = require("./products/postNewProduct");
const postNewCategories = require("./categoires/postNewCategories")
const postNewImages = require("./images/postNewImages")
const mainRoute = require("./main/main");

const apiRoutes = express.Router();

// const middlewear

apiRoutes
  .get('/' || '/me', mainRoute)
  .get('/products', getAllProducts)
  .get('/product/:id', getProduct)

  .post('/images', postNewImages)
  .post('/categories', postNewCategories)
  .post('/product', postNewProduct)
  .post('/user', postNewUser)
  // .post('/' || '/me', )

module.exports = apiRoutes;
