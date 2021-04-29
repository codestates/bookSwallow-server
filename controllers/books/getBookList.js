const { book } = require('../../models');

module.exports = async (req, res) => {
  // res.send('book/getBookList');

  const bookList = await book.findAll();

  res.status(200).json({ data: bookList });
};
