const { NotFound } = require('http-errors');
const { Patient } = require('../../models');

const getById = async (req, res) => {
  const { id } = req.params;

  const result = await Patient.findById(id, '-createdAt -updatedAt').populate(
    'address',
    'street houseNumber city postcode -_id'
  );

  if (!result) {
    throw new NotFound(`Patient with id=${id} not found. Node`);
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
