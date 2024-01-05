const { Unauthorized } = require('http-errors');

const { User } = require('../models');

const userIsNotLocked = async (req, res, next) => {
  if (req.method === 'OPTIONS') {
    next();
  }
  const { username } = req.body;

  try {
    const user = await User.findOne({ username }, 'isNotLocked');

    if (!user.isNotLocked) {
      throw new Unauthorized('User is locked');
    }

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = userIsNotLocked;
