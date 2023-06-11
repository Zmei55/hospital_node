const { NotFound } = require('http-errors');
const { Address } = require('../../models');

const getById = async (req, res) => {
  const { id } = req.params;
  console.log('getById ~ id:', id);

  console.log(Address.findById(id, '-createdAt -updatedAt'));
  const result = await Address.findById(id, '-createdAt -updatedAt');
  console.log('getById ~ result:', result);

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
