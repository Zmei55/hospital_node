const { NotFound } = require('http-errors');
const { Service } = require('../../models');

const getByName = async (req, res) => {
  const { filter } = req.body;

  let result = [];

  if (filter === '') {
    result = await Service.find({ isActive: true });
  } else {
    result = await Service.find(
      { $and: [{ name: { $regex: filter } }, { isActive: true }] },
      '-createdAt -updatedAt'
    );
  }

  if (result.length === 0) {
    throw new NotFound(`Services with name=${filter} not found. Node`);
  }

  res.json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = getByName;
