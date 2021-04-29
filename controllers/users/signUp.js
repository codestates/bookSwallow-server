const { user } = require('../../models');
const bcrypt = require('bcrypt');

module.exports = async (req, res) => {
  const { email, username, password } = req.body;

  if (!email || !username || !password) {
    return res.status(400).end();
  }

  try {
    const hashPassword = await bcrypt.hash(password, 10);
    await user
      .findOrCreate({
        where: {
          email,
        },
        defaults: {
          email,
          username,
          password: hashPassword,
          social_type: '',
          del_flag: 'N',
        },
      })
      .then(([result, exists]) => {
        if (!exists) {
          return res.status(409).send({ message: 'already exists' });
        }
        res.status(201).end(); // created
      })
      .catch((error) => {
        res.status(500).end(); // server error
      });
  } catch (e) {
    res.status(400).end();
  }
};
