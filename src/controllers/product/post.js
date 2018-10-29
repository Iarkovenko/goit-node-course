const Product = require("../../db/schemas/product");

const createProduct = (request, response) => {
    const product = request.body;

    const productData = Object.assign({}, product)

    const newProduct = new Product(productData);

    const sendResponse = (product) => {
        response.json({
            status: "success",
            product
        })
    }
    const sendError = () => {
        response.status(400);
        response.json({
            error: 'user was not saved'
          });
    }

    newProduct.save()
        .then(sendResponse)
        .catch(sendError)

}

module.exports = createProduct;