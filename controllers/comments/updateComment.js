const { comment } = require('../../models');

module.exports = async (req, res) => {
  // path parameter -> comments id
  if (!req.params.id || !req.user.id || !req.body.content) {
    return res.status(400).end();
  }

  try {
    const commentData = await comment.findOne({
      where: {
        id: parseInt(req.params.id),
      },
    });
    commentData.content = req.body.content;
    await commentData.save();
    res.status(200).json(commentData);
  } catch (e) {
    console.log('~');
    res.status(400).end();
  }
};
