const User = require("../../models/user");

const getUser = (req, res) => {
    const id = req.params.id;

    const sendResponse = (user) => {
        res.status(200);
        res.json(user);
      };
      
    User
      .findById(id)
      .then(sendResponse)
      .catch(err => {
          console.log(err)
      })
}

module.exports = getUser