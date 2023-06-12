const { Conflict } = require('http-errors');
const bcrypt = require('bcryptjs');
const { User } = require('../../models');

const register = async (req, res) => {
  const { firstName, lastName, logName, password, station } = req.body;
  const user = await User.findOne({ logName }, '-createdAt -updatedAt');

  if (user) {
    throw new Conflict(`User with ${logName} already exist. Node`);
  }

  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

  await User.create({
    firstName,
    lastName,
    logName,
    password: hashPassword,
    station,
  });

  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      user: {
        firstName,
        lastName,
        logName,
        station,
      },
    },
  });
};

module.exports = register;
