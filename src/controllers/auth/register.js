const { Conflict } = require('http-errors');
const bcrypt = require('bcryptjs');
const { User } = require('../../models');

const register = async (req, res) => {
  const { name, username, password, workplace } = req.body;
  const user = await User.findOne({ username }, '-createdAt -updatedAt');

  if (user) {
    throw new Conflict(`User with ${username} already exist. Node`);
  }

  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

  await User.create({
    name,
    username,
    password: hashPassword,
    workplace,
  });

  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      user: {
        name,
        username,
        workplace,
      },
    },
  });
};

module.exports = register;
