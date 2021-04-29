const { comment } = require('../../models');

module.exports = async (req, res) => {
  // path parameter -> comments id
  if (!req.params.id || !req.user.id) {
    return res.status(400).end();
  }

  try {
    const checkData = await comment.findOne({
      where: {
        id: req.params.id,
      },
    });
    // 댓글 작성자와 로그인된 사용자가 다를 경우
    if (checkData.user_id !== req.user.id) {
      return res.status(403).json({ message: 'different user' });
    }

    await comment.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(204).end();
  } catch (e) {
    res.status(400).end();
  }
};
