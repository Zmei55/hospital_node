const { NotFound } = require('http-errors');
const { Service } = require('../../models');

const getAll = async (req, res) => {
  const result = await Service.find({}, '-createdAt -updatedAt');
  if (!result) {
    throw new NotFound(`Services not found`);
  }
  res.json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = getAll;
