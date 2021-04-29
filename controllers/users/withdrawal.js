const { user } = require('../../models');

module.exports = async (req, res) => {
  // res.send('user/withdrawal');
  // 탈퇴 로직
  if (req.user) {
    let today = new Date();
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1; // 월
    let date = today.getDate(); // 날짜
    let hours = today.getHours(); // 시
    let minutes = today.getMinutes(); // 분
    let seconds = today.getSeconds(); // 초

    let nowDay = `${year} / ${month} / ${date} ${hours}:${minutes}:${seconds}`;

    const withdrawal = await user.update(
      {
        del_flag: 'Y',
        deleted_at: nowDay,
      },
      { where: { email: req.user.email } },
    );

    if (withdrawal) {
      res.status(201).json({ message: '회원탈퇴가 완료되었습니다' });
    }
  } else {
    res.status(401).json({ message: '존재하지 않는 회원입니다' });
  }
};
