const { Conflict } = require('http-errors');
const bcrypt = require('bcryptjs');
const { User } = require('../../models');

const register = async (req, res) => {
  console.log(req.body);
  const { name, username, password, station, workplace, position, role } =
    req.body;

  const candidate = await User.findOne({ username }, '-createdAt -updatedAt');
  if (candidate) {
    throw new Conflict(`User with ${username} already exist. Node`);
  }

  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

  await User.create({
    name,
    username,
    password: hashPassword,
    station,
    workplaces: [workplace],
    position,
    roles: [role],
  });

  return res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      user: {
        name,
        username,
        station,
        workplace,
        position,
        role,
      },
    },
  });
};

module.exports = register;
