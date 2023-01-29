const { NotFound } = require('http-errors');
const { Patient } = require('../../models');

const getByName = async (req, res) => {
  const { name: patientName, birthDate, cardNumber } = req.body;
  console.log('patientName', req.body);
  const result = await Patient.find({
    $or: [
      { name: patientName },
      { birthDate: birthDate },
      { cardNumber: cardNumber },
    ],
  });
  console.log('result', result);
  if (!result) {
    throw new NotFound(`Patient with name=${patientName} not found`);
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
