const { comment, user } = require('../../models');

module.exports = async (req, res) => {
  if (!req.params.id || req.params.id < 0) {
    return res.status(400).end();
  }
  const book_id = req.params.id;
  try {
    const data = await comment.findAll({
      include: [
        {
          model: user,
          attributes: ['username'],
        },
      ],
      where: {
        book_id,
      },
    });
    res.status(200).json(data);
  } catch (e) {
    res.status(400).end();
  }
};
