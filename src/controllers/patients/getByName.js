const { NotFound } = require('http-errors');
const { Patient } = require('../../models');

const getByName = async (req, res) => {
  const { name: patientName, birthDate, cardNumber } = req.body;

  let result = [];
  // all patients
  if (patientName === '' && birthDate === '' && cardNumber === '') {
    result = await Patient.find({}, '-createdAt -updatedAt');
  }
  // only name
  if (patientName !== '' && birthDate === '' && cardNumber === '') {
    result = await Patient.find(
      { name: { $regex: patientName } },
      '-createdAt -updatedAt'
    );
  }
  // only birthDate
  if (patientName === '' && birthDate !== '' && cardNumber === '') {
    result = await Patient.find(
      { birthDate: birthDate },
      '-createdAt -updatedAt'
    );
  }
  // only cardNumber
  if (patientName === '' && birthDate === '' && cardNumber !== '') {
    result = await Patient.find(
      { cardNumber: cardNumber },
      '-createdAt -updatedAt'
    );
  }
  // name and birthDate
  if (patientName !== '' && birthDate !== '' && cardNumber === '') {
    result = await Patient.find(
      {
        name: { $regex: patientName },
        birthDate: birthDate,
      },
      '-createdAt -updatedAt'
    );
  }
  // all fields
  if (patientName !== '' && birthDate !== '' && cardNumber !== '') {
    result = await Patient.find(
      {
        name: { $regex: patientName },
        birthDate: birthDate,
        cardNumber: cardNumber,
      },
      '-createdAt -updatedAt'
    );
  }
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

module.exports = getByName;
