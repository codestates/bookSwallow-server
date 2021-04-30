module.exports = (req, res) => {
  if (req.headers.authorization) {
    delete req.headers.authorization;
  } else {
    res.clearCookie('authorization');
  }
  res.status(205).json({ message: '로그아웃이 완료되었습니다' });
};
