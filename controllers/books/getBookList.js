const { book } = require('../../models');

module.exports = async (req, res) => {
  const bookList = await book.findAll();

  res.status(200).json({ data: bookList });
};
