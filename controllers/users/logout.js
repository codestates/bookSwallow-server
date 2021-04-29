module.exports = (req, res) => {
  // res.send('user/logout');
  req.headers.authorization = undefined;
  // delete req.headers.authorization;
  console.log(req.headers);
  res.status(205).json({ message: '로그아웃이 완료되었습니다' });
};
