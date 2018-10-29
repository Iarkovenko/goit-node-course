const jwt = require('jsonwebtoken');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const app = require('../modules/app')

const errorResp = {
  success: false,
  message: 'Authentication failed. User not found.',
  // user: user
};

const passwMatches = (passw1, hash) => bcrypt.compareSync(passw1, hash);

const generateToken = payload => {
  const secretKey = app.get('superSecret');

  return jwt.sign(payload, secretKey, {
    expiresIn: 60 * 60 * 24
  })
};

const authenticate = (req, res) => {
  User.findOne({ userName: req.body.userName })
  .select('password')
  .exec(onFind)
  
  function onFind(err, user) {
    if (err) throw err;
    if (!user || !passwMatches(req.body.password, user.password)) {
      res.json(errorResp);
      return;
    }
    const payload = {
      admin: true,
    };

    const token = generateToken(payload);

    res.json({
      success: true,
      message: 'Enjoy your token!',
      token: token,
    });

  }
};

module.exports = authenticate;
