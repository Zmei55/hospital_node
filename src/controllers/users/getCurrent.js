const { User } = require('../../models');

const getCurrent = async (req, res) => {
  console.log(req);
  console.log(req.user);
  const { name, username, workplace, position } = req.user;

  res.json({
    status: 'success',
    code: 200,
    data: {
      user: {
        name,
        username,
        workplace,
        position,
      },
    },
  });
};

module.exports = getCurrent;
