const getAllProducts = require("./products/all-products");
const getProduct = require("./products/getProdcts");
const postNewUser = require("./users/postNewUser");
const postNewProduct = require("./products/postNewProduct");
const postNewCategories = require("./categoires/postNewCategories")
const mainRoute = require("./main/main");

const router = {
  GET: {
    "/products": getAllProducts,
    "/product/19112831": getProduct,
    "/me": mainRoute,
    default: mainRoute
  },
  POST: {
    "/categories": postNewCategories,
    "/products": postNewProduct,
    "/users": postNewUser,
    "/me": mainRoute,
    default: mainRoute
  }
};

module.exports = router;
