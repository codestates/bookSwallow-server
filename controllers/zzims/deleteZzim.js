const { book } = require('../../models');
const { zzim } = require('../../models');

module.exports = async (req, res) => {
  // req.user 에 모든 헤더 정보 존재

  const bookInfo = await book.findOne({
    where: {
      id: req.body.book_id,
    },
  });

  const zzimList = await zzim.findOne({
    where: { book_id: bookInfo.id },
  });
  if (zzimList) {
    await zzim
      .destroy({
        where: { book_id: bookInfo.id },
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
