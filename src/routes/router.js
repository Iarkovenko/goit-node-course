const allProducts = require('./products/all-products');
// const createUser = require('./users/createUser')
// const getProductItem = require('./products/getProductItem')
const mainRoute = require('./main/main')

const router = {
  '/products': allProducts,
  // '/users/create': createUser,
  // '/products/19112831': getProductItem,
  
  default: mainRoute
};

module.exports = router;