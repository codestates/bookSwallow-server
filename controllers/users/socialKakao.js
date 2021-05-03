require('dotenv').config();
const { user } = require('../../models');
const axios = require('axios');
const { generateAccessToken } = require('../../utils/userFunc');

const { KAKAO_CLIENT_ID, REDIRECT_URI } = process.env;

module.exports = async (req, res) => {
  const { authorizationCode } = req.body;

  try {
    const kakaoRequest = await axios.post(
      `https://kauth.kakao.com/oauth/token?code=${authorizationCode}&client_id=${KAKAO_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&grant_type=authorization_code`,
    );
    const kakaoToken = kakaoRequest.data.access_token;
    const kakaoUser = await axios.get('https://kapi.kakao.com/v2/user/me', {
      headers: {
        Authorization: `Bearer ${kakaoToken}`,
      },
    });
    const username = kakaoUser.data.kakao_account.profile.nickname;
    const hasEmail = kakaoUser.data.kakao_account.has_email;
    if (!hasEmail) return res.status(400).end();
    const email = kakaoUser.data.kakao_account.email;

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
    const [result, exists] = kakaoUserInfo;

    const payload = {
      id: result.id,
      email: result.email,
      username: result.username,
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
    res
      .status(200)
      .json({
        data: { accessToken: accessToken, payload: payload },
        message: 'success login',
      });
  } catch (e) {
    res.status(500).end();
  }
};
