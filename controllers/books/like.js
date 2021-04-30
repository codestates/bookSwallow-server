const { book, like, sequelize } = require('../../models');

module.exports = async (req, res) => {
  if (!req.body.book_id || !req.user.id) {
    return res.status(400).end();
  }
  const book_id = req.body.book_id;
  const user_id = req.user.id;
  const bookData = await book.findOne({
    where: {
      id: req.body.book_id,
    },
  });
  const likeData = await like.findOne({
    where: {
      user_id,
      book_id,
      isLike: true,
    },
  });
  if (!likeData) {
    // 좋아요없을시
    try {
      const result = await sequelize.transaction(async (t) => {
        await like.create(
          {
            user_id,
            book_id,
            isLike: true,
          },
          { transaction: t },
        );
        bookData.like_count += 1;
        await bookData.save({ transaction: t });
        return bookData;
      });
      res
        .status(201)
        .json({ data: result.like_count, message: '좋아요를 눌렀습니다' });
    } catch (e) {
      res.status(400).end();
    }
  } else {
    // 좋아요있을시
    try {
      const result = await sequelize.transaction(async (t) => {
        await like.destroy(
          {
            where: {
              id: likeData.id,
            },
          },
          { transaction: t },
        );
        bookData.like_count -= 1;
        await bookData.save({ transaction: t });
        return bookData;
      });
      res.status(200).json({
        data: result.like_count,
        message: '좋아요가 해제되었습니다',
      });
    } catch (e) {
      res.status(400).end();
    }
  }
};
