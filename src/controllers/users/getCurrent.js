const { User } = require('../../models');

const getCurrent = async (req, res) => {
  const { name, username, workplace } = req.user;

  res.json({
    status: 'success',
    code: 200,
    data: {
      user: {
        name,
        username,
        workplace,
      },
    },
  });
};

module.exports = getCurrent;
