const allProducts = require('./products/all-products');
const mainRoute = require('./main/main');

const router = {  
  '/products': allProducts,
  '/me': mainRoute,
  default: mainRoute
};

module.exports = router;