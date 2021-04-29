const { book } = require('../../models');
// const sequelize = require('sequelize');
// const Op = sequelize.Op;

module.exports = async (req, res) => {
  // res.send('book/getBookSearch');

  // console.log(req.params.id);

  // const bookInfo = await book.findAll({
  //   where: {
  //     title: { [Op.like]: '%' + req.params.id + '%' },
  //   },
  // });

  const bookInfo = await book.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!bookInfo) {
    res.status(404).json({ message: '해당하는 정보를 찾을 수 없습니다' });
  } else {
    res.status(200).json({ data: bookInfo, message: '검색에 성공하였습니다' });
  }
};
