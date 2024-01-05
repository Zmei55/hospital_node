const { Conflict } = require('http-errors');
const bcrypt = require('bcryptjs');
const { User } = require('../../models');

const add = async (req, res) => {
  const { name, username, password, department, workplace, position, role } =
    req.body;

  const candidate = await User.findOne({ username }, '-createdAt -updatedAt');
  if (candidate) {
    throw new Conflict(`User with username <${username}> already exist. Node`);
  }

  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

  const user = await User.create({
    name,
    username,
    password: hashPassword,
    department,
    workplaces: [workplace],
    position,
    roles: [role],
  });

  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      _id: user._id,
      name: user.name,
      username: user.username,
      department: user.department,
      workplaces: user.workplaces,
      position: user.position,
      roles: user.roles,
    },
  });
};

module.exports = add;
