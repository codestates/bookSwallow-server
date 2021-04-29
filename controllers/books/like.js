const { book, user, like } = require('../../models');
const sequelize = require('sequelize');

module.exports = async (req, res) => {
  // 미들웨어에서 req.user로 현재 유저정보 가지고 있다
  // !!!req.user에 req.user.id도 존재함!!!

  //userInfo 가 req.user 기반이기 때문에 바디값을 받아 테스트하는 포스트맨으로는 정상적인 테스트 불가능
  //일단 가능하게 바꿔 놓음

  if (req.user) {
    //헤더에 유저정보 들어왔을 때 (정상적인 로그인 상태일 때)
    const userInfo = await user.findOne({
      where: {
        id: req.body.user_id,
      },
    });
    const bookInfo = await book.findOne({
      where: {
        id: req.body.book_id,
      },
    });

    if (!bookInfo) {
      res.status(404).json({ message: '존재하지 않는 책 정보입니다' });
    } else {
      await like
        .findOne({
          user_id: userInfo.id,
          book_id: bookInfo.id,
          isLike: true,
        })
        .then(async (data) => {
          // console.log(data);
          if (data !== null) {
            // 좋아요가 있을 시
            await like
              .destroy({
                where: { user_id: data.dataValues.user_id },
              })
              .then(async () => {
                await book.update(
                  { like_count: sequelize.literal('like_count - 1') },
                  {
                    where: {
                      id: bookInfo.id,
                    },
                  },
                );
              });
            res.status(200).json({ message: '좋아요가 해제되었습니다' });
          } else {
            // 아직 좋아요가 없을 시
            await like
              .create({
                user_id: userInfo.id,
                book_id: bookInfo.id,
                isLike: true,
              })
              .then(async () => {
                await book.update(
                  { like_count: sequelize.literal('like_count + 1') },
                  {
                    where: {
                      id: bookInfo.id,
                    },
                  },
                );
                res.status(201).json({ message: '좋아요를 눌렀습니다' });
              });
          }
        });
    }
  } else {
    res.status(401).json({ message: '유저 정보가 올바르지 않습니다' });
  }
};
