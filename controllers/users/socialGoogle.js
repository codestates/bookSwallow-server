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
    res.cookie('authorization', `Bearer ${accessToken}`);
    res
      .status(200)
      .json({ accessToken: accessToken, message: 'success login' });
  }
};

/*

클라에서 해 주셔야 할 일들

0. 클라이언트 환경 변수에 GOOGLE_LOGIN_URL과 GOOGLE_CLIENT_ID 생성


1. window.location.assign(GOOGLE_LOGIN_URL) 로 구글 로그인 과정 진행

GOOGLE_LOGIN_URL = "https://accounts.google.com/o/oauth2/v2/auth?client_id=125914028971-j6htog6luhhume79kpi5g8nlp23g1731.apps.googleusercontent.com&redirect_uri=http://localhost:3000/login/google&response_type=token&scope=https://www.googleapis.com/auth/userinfo.email+https://www.googleapis.com/auth/userinfo.profile";

"https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token&scope=https://www.googleapis.com/auth/userinfo.email+https://www.googleapis.com/auth/userinfo.profile";


2. 1 과정 진행 후

const url = new URL(window.location.href);
    let hash = url.hash;
    if (url.hash.length !== 0) {
      hash = hash.split("=")[1].split("&")[0];
      const authorizationCode = hash;
      if (authorizationCode) {
        axios.post('서버구글로그인엔드포인트', {
          accessToken: authorizationCode 
        });
      }
    }

    진행
    -> 진행 시 서버의 구글로그인 부분에서 req.body.accessToken으로 구글인증 후 받아온 엑세스토큰 활용해서 DB 핸들링 가능

 */
