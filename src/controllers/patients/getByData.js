const { NotFound } = require('http-errors');
const { Patient } = require('../../models');

const getByData = async (req, res) => {
  const { name: patientName, birthDate, cardNumber } = req.body;

  let result = [];

  result = await Patient.find(
    {
      $or: [
        { name: patientName === '' ? null : { $regex: patientName } },
        { birthDate: birthDate === '' ? null : birthDate },
        { cardNumber: cardNumber === '' ? null : cardNumber },
      ],
    },
    '-createdAt -updatedAt'
  );

  if (result.length === 0) {
    throw new NotFound(`Patient with name=${patientName} not found. Node`);
  }

  res.json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = getByData;
