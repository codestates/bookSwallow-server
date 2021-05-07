const { book } = require('../../models');
const { user } = require('../../models');
const { zzim } = require('../../models');

module.exports = async (req, res) => {
  // req.user 에 모든 헤더 정보 존재

  const userInfo = await user.findOne({
    where: {
      id: req.user.id,
    },
  });

  const bookInfo = await book.findOne({
    where: {
      id: req.body.book_id,
    },
  });

  if (!userInfo) {
    res.status(403).send({ message: '유저 정보가 없습니다' });
  } else if (!bookInfo) {
    res.status(404).send({ message: '잘못된 책 정보입니다' });
  } else {
    const alreadyZzim = await zzim.findOne({
      where: {
        user_id: userInfo.id,
        book_id: bookInfo.id,
      },
    });

    if (alreadyZzim) {
      res.status(200).json({ message: '이미 찜하신 책입니다' });
    } else {
      await zzim
        .create({
          user_id: userInfo.id,
          book_id: bookInfo.id,
        })
        .then(() => {
          res.status(201).json({ message: '찜하셨습니다' });
        });
    }
  }
};
