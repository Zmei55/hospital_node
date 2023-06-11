const { NotFound } = require('http-errors');
const { Service } = require('../../models');

const getByName = async (req, res) => {
  const { filter } = req.body;

  let result = [];
  result = await Service.find(
    { serviceName: { $regex: filter } },
    '-createdAt -updatedAt'
  );

  if (result.length === 0) {
    throw new NotFound(`Services with name=${serviceName} not found. Node`);
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
