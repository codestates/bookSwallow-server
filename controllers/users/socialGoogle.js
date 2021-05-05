const { user } = require('../../models');
const axios = require('axios');
const { generateAccessToken } = require('../../utils/userFunc');
require('dotenv').config();
const { GOOGLE_CLIENT_ID, REDIRECT_URI } = process.env;

module.exports = async (req, res) => {
  if (!req.body.accessToken) {
    res.status(500).end();
  } else {
    const googleUser = await axios.get(
      `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${req.body.accessToken}`,
      {
        headers: {
          Authorization: `Bearer ${req.body.accessToken}`,
        },
      },
    );

    const username = googleUser.data.name;
    const hasEmail = googleUser.data.verified_email;
    if (!hasEmail) return res.status(400).end();
    const email = googleUser.data.email;

    const googleUserInfo = await user.findOrCreate({
      where: {
        email,
        del_flag: 'N',
        social_type: 'google',
      },
      defaults: {
        email,
        username,
        password: '',
        social_type: 'google',
        del_flag: 'N',
      },
    });

    const newUserInfo = googleUserInfo[0].dataValues;

    const payload = {
      id: newUserInfo.id,
      email: newUserInfo.email,
      username: newUserInfo.username,
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
      data: { accessToken: accessToken, payload: payload },
      message: 'success login',
    });
  }
};
