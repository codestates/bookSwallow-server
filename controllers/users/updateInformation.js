const { user } = require('../../models');
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
        del_flag: 'N',
      },
    });

    if (username) userData.username = username;
    if (password) userData.password = hashPassword(password);

    await userData.save();

    const payload = {
      id: userData.id,
      email: userData.email,
      username: userData.username,
    };

    const accessToken = generateAccessToken(payload);

    res.cookie('authorization', `Bearer ${accessToken}`, {
      // domain: 'bookswallow.shop',
      domain: 'localhost',
      path: '/',
      maxAge: 24 * 6 * 60 * 10000,
      sameSite: 'none',
      httpOnly: true,
      secure: true,
    });
    return res
      .status(200)
      .json({
        data: { accessToken: accessToken, payload: payload },
        message: 'success update',
      });
  } catch (e) {
    res.status(400).end();
  }
};
