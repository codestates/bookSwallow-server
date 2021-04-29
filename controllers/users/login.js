const { user } = require('../../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const ACCESS_SECRET = process.env.accessSecret;

module.exports = async (req, res) => {
  const userInfo = await user.findOne({
    where: {
      email: req.body.email,
    },
  });

  if (!userInfo) {
    res.status(403).send({ message: '유저 정보가 없습니다' });
  } else {
    // userInfo 존재 시 PW 비교 가능
    const normalPw = req.body.password; // 암호화 x PW

    if (userInfo.del_flag === 'Y') {
      return res.status(403).json({ message: '유저 정보가 없습니다' });
    }

    try {
      const result = await bcrypt.compare(normalPw, userInfo.password);
      if (!result) {
        return res
          .status(401)
          .json({ message: '비밀번호가 일치하지 않습니다' });
      }
      const payload = {
        email: userInfo.email,
        username: userInfo.username,
      };
      const accessToken = jwt.sign(payload, ACCESS_SECRET, {
        expiresIn: '1h',
      });
      res.cookie('authorization', `Bearer ${accessToken}`);
      res
        .status(200)
        .json({ data: { accessToken: accessToken }, message: 'success login' });
    } catch (e) {
      res.status(400).end();
    }
  }
};

/*
// 비크립트 제외 로직

const { user } = require('../../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const ACCESS_SECRET = process.env.accessSecret;
const REFRESH_SECRET = process.env.refreshSecret;

module.exports = async (req, res) => {
  const userInfo = await user.findOne({
    where: {
      email: req.body.email,
    },
  });

  if (!userInfo) {
    res.status(403).send({ message: '유저 정보가 없습니다' });
  } else {
    const normalPw = req.body.password; // 암호화 x PW

    const hashPw = userInfo.dataValues.password;
    if (normalPw !== hashPw) {
      res.status(401).json({ message: '비밀번호가 일치하지 않습니다' });
    } else {
      if (userInfo.del_flag === 'Y') {
        res.status(403).json({ message: '탈퇴한 회원입니다' });
      } else {
        const payload = {
          email: userInfo.dataValues.email,
          username: userInfo.dataValues.username,
        };

        const accessToken = jwt.sign(payload, ACCESS_SECRET, {
          expiresIn: '1h',
        });
        const refreshToken = jwt.sign(payload, REFRESH_SECRET, {
          expiresIn: '6h',
        });
        res
          .status(200)
          .cookie('refreshToken', refreshToken, {
            sameSite: 'None',
            secure: true,
            HttpOnly: false,
          })
          .json({
            data: { accessToken: accessToken },
            message: '로그인에 성공하였습니다',
          });
      }
    }
  }
};
*/
