const { User } = require('../../models');

const getCurrent = async (req, res) => {
  const { firstName, lastName, logName, station } = req.user;

  res.json({
    status: 'success',
    code: 200,
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

module.exports = getCurrent;
