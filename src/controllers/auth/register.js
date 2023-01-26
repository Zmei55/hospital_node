const { Conflict } = require('http-errors');
const bcrypt = require('bcryptjs');
const { User } = require('../../models');

const register = async (req, res) => {
  const { name, logName, password } = req.body;
  const user = await User.findOne({ logName });
  if (user) {
    throw new Conflict(`User with ${logName} already exist`);
  }
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  await User.create({ name, logName, password: hashPassword });
  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      user: {
        name,
        logName,
      },
    },
  });
};

module.exports = register;
