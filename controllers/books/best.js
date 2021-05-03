const { book, like, sequelize } = require('../../models');

module.exports = async (req, res) => {
  const mostFiveBooks = await book.findAll({
    order: [['like_count', 'DESC']],
    limit: 5,
    // offset: 5,
  });

  //   console.log(mostFiveBooks);

  res.status(200).json({ data: mostFiveBooks, message: 'load success' });
};
