const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  telephone: String,
  nickName: String,
  location: String,
  password: String,
  email: String,
  favoriteCategories: Array,
  products: Array,
  viewedProducts: Array
});

const User = mongoose.model('User', userSchema);

module.exports = User;