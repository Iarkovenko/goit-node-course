const express = require('express');
const postUser = require('./user/post')

const apiRoutes = express.Router();

apiRoutes
  .post('/user', postUser);


module.exports = apiRoutes;