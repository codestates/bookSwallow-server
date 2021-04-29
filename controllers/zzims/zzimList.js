const { zzim } = require('../../models');

module.exports = async (req, res) => {
  // req.user 에 모든 헤더 정보 존재

  const zzimList = await zzim.findAll({
    where: { user_id: req.user.id },
  });

  res.status(200).json({ data: zzimList, message: '찜 목록을 로드하였습니다' });
};
