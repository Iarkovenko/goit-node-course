const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  userName: {
    type: String,
    required: true
  },
  firstName: String,
  lastName: String,
  telephone: String,
  location: String,
  password: {
    type: String,
    required: true,
    select: false
  },
  email: String,
  favoriteCategories: Array,
  products: Array,
  viewedProducts: Array
});

const User = mongoose.model('User', userSchema);

module.exports = User;