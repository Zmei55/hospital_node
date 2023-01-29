const { NotFound } = require('http-errors');
const { Patient } = require('../../models');

const getByName = async (req, res) => {
  const { name, birthDate, cardNumber } = req.params;
  const result = await Patient.find({ $text: { $search: name } });
  if (!result) {
    throw new NotFound(`Patient with name=${name} not found`);
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
