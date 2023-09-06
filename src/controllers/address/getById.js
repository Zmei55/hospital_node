const { NotFound } = require('http-errors');
const { Address } = require('../../models');

const getById = async (req, res) => {
  const { id } = req.params;

  const result = await Address.findById(id, '-createdAt -updatedAt');

  if (!result) {
    throw new NotFound(`Address with id=${id} not found. Node`);
  }

  res.json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = getById;
