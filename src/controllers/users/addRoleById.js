const { NotFound, Conflict } = require('http-errors');

const { User } = require('../../models');

const addRoleById = async (req, res) => {
  const { id } = req.params;
  const { role } = req.body;

  const user = await User.findById(id, 'roles -_id');
  if (!user) {
    throw new NotFound(`User with id <${_id}> not found. Node`);
  }

  let newUser = null;
  if (!user.roles.includes(role)) {
    const newRolesArr = [...user.roles, role];
    newUser = await User.findByIdAndUpdate(
      id,
      { roles: newRolesArr },
      { new: true }
    );
  } else {
    throw new Conflict('User has this role. Node');
  }
  if (!newUser) {
    throw new Conflict('User roles were not updated. Node');
  }

  res.status(200).json({
    status: 'success',
    code: 200,
    data: {
      _id: newUser._id,
      name: newUser.name,
      username: newUser.username,
      department: newUser.department,
      workplaces: newUser.workplaces,
      position: newUser.position,
      roles: newUser.roles,
    },
  });
};

module.exports = addRoleById;
