const { user } = require('../../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const ACCESS_SECRET = process.env.accessSecret;

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
    if (password) {
      const hashPassword = await bcrypt.hash(password, 10);
      userData.password = hashPassword;
    }
    await userData.save();

    const payload = {
      email: userData.email,
      username: userData.username,
    };

    const accessToken = jwt.sign(payload, ACCESS_SECRET, {
      expiresIn: '1h',
    });

    return res
      .status(200)
      .json({ data: { accessToken: accessToken }, message: 'success update' });
  } catch (e) {
    res.status(400).end();
  }
};
