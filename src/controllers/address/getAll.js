const { NotFound } = require('http-errors');
const { Address } = require('../../models');

const getAll = async (req, res) => {
  const result = await Address.find({}, '-createdAt -updatedAt');

  if (result.length === 0) {
    throw new NotFound('Address not found. Node');
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
