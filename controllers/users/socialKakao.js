const { user } = require('../../models');
const axios = require('axios');
const { generateAccessToken } = require('../../utils/userFunc');

module.exports = async (req, res) => {
  const email = req.body.email;
  const username = req.body.nickname;

  try {
    const kakaoUserInfo = await user.findOrCreate({
      where: {
        email,
        del_flag: 'N',
      },
      defaults: {
        email,
        username,
        password: '',
        social_type: 'kakao',
        del_flag: 'N',
      },
    });
    const newUserInfo = kakaoUserInfo[0].dataValues;
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
      data: {
        accessToken: accessToken,
        payload: payload,
      },
      message: 'success login',
    });
  } catch (error) {
    console.log(error);
  }
};
