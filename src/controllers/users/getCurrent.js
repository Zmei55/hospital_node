const { User } = require('../../models');

const getCurrent = async (req, res) => {
  const { name, logName } = req.user;
  res.json({
    status: 'success',
    code: 200,
    data: {
      user: {
        name,
        logName,
      },
    },
  });
};

module.exports = getCurrent;
