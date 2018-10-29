const Product = require("../../models/product");

const getProductByParam = (req, res) => {
    const sendResponse = (product) => {
      res.status(200);
      res.json(product);
    };
  
    Product
      .find()
      .then(sendResponse)
      .catch(err => {
        console.error(err)
      });
  };
  
  module.exports = getProductByParam;