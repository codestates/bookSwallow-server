const { user } = require('../../models');

module.exports = async (req, res) => {
  if (!req.params.id || req.params.id < 0) {
    return res.status(400).end();
  }
  const id = req.params.id;
  try {
    const data = await user.findOne({
      where: {
        id,
      },
    });
    if (!data) {
      return res.json({ data: null, message: 'no exist' });
    }
    delete data.dataValues.password;
    res.status(200).json({ data: data, message: 'find data' });
  } catch (e) {
    res.status(400).end();
  }
};
