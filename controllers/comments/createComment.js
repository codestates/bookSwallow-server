const { comment } = require('../../models');

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
    res.status(201).json(commentData);
  } catch (e) {
    res.status(400).end();
  }
};
