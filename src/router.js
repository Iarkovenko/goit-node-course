const express = require('express');

const auth = require('./controllers/auth')
const verifyToken = require('./controllers/verifyToken')

const postUser = require('./controllers/user/post')
const postProduct = require('./controllers/product/post')

const deleteUser = require('./controllers/user/delete')

const getAllUsers = require('./controllers/user/getAll')
const getUser = require('./controllers/user/get')
const getProduct = require('./controllers/product/get')

const updateUser = require('./controllers/user/update')
const updateProduct = require('./controllers/product/update')

const apiRoutes = express.Router();

apiRoutes
  .post('/authenticate', auth)
  .use(verifyToken)
  .post('/user', postUser)
  .post('/product', postProduct)

  .delete('/user/:id', deleteUser)

  .get('/users', getAllUsers)
  .get('/user/:id', getUser)
  .get('/product/:id', getProduct)

  .put('/user/:id', updateUser)
  .put('/product/:id', updateProduct)
  
module.exports = apiRoutes;
