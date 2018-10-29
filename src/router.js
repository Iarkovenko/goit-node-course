const express = require('express');

const auth = require('./../modules/auth')
const verifyToken = require('./../modules/verifyToken')

const postUser = require('./user/post')
const postProduct = require('./product/post')

const deleteUser = require('./user/delete')

const getAllUsers = require('./user/getAll')
const getUser = require('./user/get')
const getProduct = require('./product/get')

const updateUser = require('./user/update')
const updateProduct = require('./product/update')

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
