const Product = require("../../models/product");

const createProduct = (request, response) => {
    const product = request.body;

    const productData = Object.assign( {}, product, 
        { seller: request.headers['x-seller-auth'] } 
    )

    const newProduct = new Product(productData);

    const sendResponse = (productData) => {
        response.json({
            status: "success",
            productData
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