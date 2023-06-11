const bcrypt = require('bcryptjs');
const { Unauthorized } = require('http-errors');
const jwt = require('jsonwebtoken');

const { User } = require('../../models');

const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { logName, password, station } = req.body;
  const user = await User.findOne({ logName }, '-createdAt -updatedAt');
  const passCompare = bcrypt.compareSync(password, user.password);

  if (!user || !passCompare || user.station !== station) {
    throw new Unauthorized('Login or password is wrong. Node');
  }

  const payload = {
    id: user._id,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });

  await User.findByIdAndUpdate(user._id, { token });

  res.json({
    status: 'success',
    code: 200,
    data: {
      user: {
        name: user.name,
        logName: user.logName,
        station: user.station,
      },
      token,
    },
  });
};

module.exports = login;
