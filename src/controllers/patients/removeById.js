const { NotFound } = require('http-errors');
const { Patient } = require('../../models');

const removeById = async (req, res) => {
  const { id } = req.params;
  const result = await Patient.findByIdAndRemove(id);
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

module.exports = removeById;
