module.exports = (req, res) => {
  if (req.headers.authorization) {
    delete req.headers.authorization;
  } else {
    res.clearCookie('authorization', { domain: '.bookswallow.shop' });
  }
  res.status(205).json({ message: '로그아웃이 완료되었습니다' });
};
