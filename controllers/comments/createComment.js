const { comment, user } = require('../../models');

module.exports = async (req, res) => {
  if (!req.params.id || !req.user.id || !req.body.content) {
    return res.status(400).end();
  }

  try {
    const commentData = await comment.create({
      user_id: req.user.id,
      book_id: req.params.id,
      content: req.body.content,
    });
    const userData = await user.findOne({
      id: req.user.id,
    });
    const returnData = {
      ...commentData.dataValues,
      user: {
        username: userData.username,
      },
    };
    res.status(201).json(returnData);
  } catch (e) {
    res.status(400).end();
  }
};
