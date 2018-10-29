const User = require("../../db/schemas/user");
const bcrypt = require('bcrypt')

const updateUser = (req, res) => {
  const user = req.body;
  const id = req.params.id;

  if (user.password) {
    user.password = bcrypt.hashSync(user.password, 10);
  }

  const sendError = () => {
    res.status(400);
    res.json({
      status: 'error',
      text: 'there is no such user'
    });
  };

  const sendResponse = (newUser) => {
    if (!newUser) {
      return sendError();
    }

    res.json({
      status: 'success',
      user: newUser
    });
  };

  User
    .findOneAndUpdate({
        _id: id
      },
      user, {
        new: true
      } // вернуть обновленный документ
    )
    .then(sendResponse)
    .catch(sendError)


}

module.exports = updateUser;