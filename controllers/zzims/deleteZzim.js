const { zzim } = require('../../models');

module.exports = async (req, res) => {
  // req.user 에 모든 헤더 정보 존재

  const targetZzim = await zzim.findOne({
    where: { id: req.params.id, user_id: req.user.id },
  });

  if (targetZzim) {
    await zzim
      .destroy({
        where: { id: req.params.id, user_id: req.user.id },
      })
      .then(() => {
        res
          .status(200)
          .json({ message: '해당 항목이 찜 목록에서 제거되었습니다' });
      });
  } else {
    res.status(403).send({ message: '잘못된 찜 정보입니다' });
  }
};
