const { Conflict } = require('http-errors');
const bcrypt = require('bcryptjs');
const { User } = require('../../models');

const register = async (req, res) => {
  const { name, username, password, department, workplace, position, role } =
    req.body;

  const candidate = await User.findOne({ username }, 'username');
  if (candidate) {
    throw new Conflict(`User with username <${username}> already exist. Node`);
  }

  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

  const newUser = await User.create({
    name,
    username,
    password: hashPassword,
    department,
    workplaces: [workplace],
    position,
    roles: [role],
  });

  return res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      _id: newUser._id,
      name: newUser.name,
      username: newUser.username,
      department: newUser.department,
      workplaces: newUser.workplaces,
      position: newUser.position,
      roles: newUser.roles,
    },
  });
};

module.exports = register;
