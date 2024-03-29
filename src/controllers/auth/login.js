const bcrypt = require('bcryptjs');
const { Unauthorized } = require('http-errors');
const jwt = require('jsonwebtoken');

const { User } = require('../../models');

const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username }, '-updatedAt');
  const passCompare = bcrypt.compareSync(password, user.password);

  if (!user || !passCompare) {
    throw new Unauthorized('Login or password is wrong. Node');
  }

  const payload = {
    id: user._id,
    roles: user.roles,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });

  await User.findByIdAndUpdate(user._id, { token });

  res.json({
    status: 'success',
    code: 200,
    data: {
      user: {
        _id: user._id,
        name: user.name,
        username: user.username,
        department: user.department,
        workplaces: user.workplaces,
        position: user.position,
        roles: user.roles,
      },
      token,
    },
  });
};

module.exports = login;
