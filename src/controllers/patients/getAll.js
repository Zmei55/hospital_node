const { NotFound } = require('http-errors');
const { Patient } = require('../../models');

const getAll = async (req, res) => {
  const result = await Patient.find({}, '-createdAt -updatedAt');
  if (result.length === 0) {
    throw new NotFound(`Patients not found. Node`);
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
