const Product = require("../../models/product");

const updateProduct = (req, res) => {
    const product = req.body;
    const id = req.params.id;

    const sendError = () => {
        res.status(400);
        res.json({
            status: 'error',
            text: 'there is no such product'
        });
    };

    const sendResponse = (newProduct) => {
        if (!newProduct) {
            return sendError();
        }

        res.json({
            status: 'success',
            product: newProduct
        });
    };

    Product
        .findOneAndUpdate({
                _id: id
            },
            product, {
                new: true
            } // вернуть обновленный документ
        )
        .then(sendResponse)
        .catch(sendError)


}

module.exports = updateProduct;