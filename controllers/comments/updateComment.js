const { comment, user } = require('../../models');

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

    const userData = await user.findOne({
      id: req.user.id,
    });
    const returnData = {
      ...commentData.dataValues,
      user: {
        username: userData.username,
      },
    };

    res.status(200).json(returnData);
  } catch (e) {
    console.log('~');
    res.status(400).end();
  }
};
