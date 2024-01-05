const { NotFount } = require('http-errors');
const { User } = require('../../models'); // осуществляем запрос к БД

const updateById = async (req, res) => {
  const { id } = req.params;

  const result = await User.findByIdAndUpdate(id, req.body, { new: true });

  if (!result) {
    throw new NotFount(`User with id=${id} not found`);
  }

  res.json({
    status: 'success',
    code: 200,
    data: {
      _id: result._id,
      name: result.name,
      username: result.username,
      department: result.department,
      workplaces: result.workplaces,
      position: result.position,
      roles: result.roles,
    },
  });
};

module.exports = updateById;
