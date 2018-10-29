const Product = require("../../models/product");

const getProduct = (req, res) => {
    const id = req.params.id;

    const sendResponse = (user) => {
        res.status(200);
        res.json(user);
      };
      
      Product
      .findById(id)
      .then(sendResponse)
      .catch(err => {
          console.log(err)
      })
}

module.exports = getProduct