const allProducts = require('./products/all-products');
const mainRoute = require('./main/main');

const router = {  
  '/products': allProducts,
  '/^[0-9]{0}$': mainRoute, // использовать регулярку для имени свойства?
  default: mainRoute
};

module.exports = router;