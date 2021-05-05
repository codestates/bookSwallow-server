const { user } = require('../../models');
const { generateAccessToken } = require('../../utils/userFunc');

module.exports = async (req, res) => {
  if (!req.params.id || req.params.id < 0) {
    return res.status(400).end();
  }
  const id = req.params.id;
  try {
    const data = await user.findOne({
      where: {
        id,
        del_flag: 'N',
      },
    });
    if (!data) {
      return res.json({ data: null, message: 'no exist' });
    }
    delete data.dataValues.password;

    const payload = {
      id: data.id,
      email: data.email,
      username: data.username,
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
    res.status(200).json({
      data: { accessToken: accessToken, payload: data },
      message: 'find data',
    });
  } catch (e) {
    res.status(400).end();
  }
};
