const { user } = require('../../models');

module.exports = async (req, res) => {
  const userData = await user.findOne({
    where: {
      email: req.user.email,
      del_flag: 'N',
    },
  });

  if (userData) {
    delete userData.dataValues.password;
    res.status(200).json(userData);
  } else {
    res.status(404).send({ message: 'not exists' });
  }
};
