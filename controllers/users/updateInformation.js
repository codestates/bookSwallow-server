const { user } = require('../../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { hashPassword, generateAccessToken } = require('../../utils/userFunc');

module.exports = async (req, res) => {
  const { username, password } = req.body;
  if (!username && !password) {
    return res.status(400).end();
  }

  try {
    const userData = await user.findOne({
      where: {
        email: req.user.email,
      },
    });

    if (username) userData.username = username;
    if (password) userData.password = hashPassword(password);

    await userData.save();

    const payload = {
      email: userData.email,
      username: userData.username,
    };

    const accessToken = generateAccessToken(payload);

    return res
      .status(200)
      .json({ data: { accessToken: accessToken }, message: 'success update' });
  } catch (e) {
    res.status(400).end();
  }
};
