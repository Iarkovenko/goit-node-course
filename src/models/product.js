const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    currency: String,
    location: String,
    categories: Array,
    raiting: Number,
    likes: Number,
    forSale: Boolean,
    buyer: Number,
    seller: Number
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;