require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { ACCESS_SECRET } = process.env;

module.exports = {
  hashPassword: (password) => {
    return bcrypt.hashSync(password.toString(), 10);
  },
  generateAccessToken: (data) => {
    return jwt.sign(data, ACCESS_SECRET, {
      expiresIn: '1d',
    });
  },
};
