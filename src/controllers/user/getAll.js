const User = require("../../models/user");

const getAllUser = (req, res) => {
    const sendResponse = (user) => {
      res.status(200);
      res.json(user);
    };
  
    User
      .find()
      .then(sendResponse)
      .catch(err => {
        console.error(err)
      });
  };
  
  module.exports = getAllUser;