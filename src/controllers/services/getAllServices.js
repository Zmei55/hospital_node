const { NotFound } = require('http-errors');
const { Service } = require('../../models');

const getAllServices = async (req, res) => {
  const result = await Service.find({}, '-createdAt -updatedAt');
  if (result.length === 0) {
    throw new NotFound('Services not found. Node');
  }
  res.json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = getAllServices;
