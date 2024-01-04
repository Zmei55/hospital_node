const { User } = require('../../models');

const getCurrent = async (req, res) => {
  const { name, username, station, workplaces, position, roles } = req.user;

  res.json({
    status: 'success',
    code: 200,
    data: {
      user: {
        name,
        username,
        station,
        workplaces,
        position,
        roles,
      },
    },
  });
};

module.exports = getCurrent;
