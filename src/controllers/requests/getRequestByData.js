const { Request } = require('../../models');

const getRequestByData = async (req, res) => {
  const { name: patientName, birthDate, cardNumber, requestNumber } = req.body;

  let result = [];
  // all requests
  if (
    patientName === '' &&
    birthDate === '' &&
    cardNumber === '' &&
    requestNumber === ''
  ) {
    result = await Patient.find({});
  }
  // only patientName
  if (
    patientName !== '' &&
    birthDate === '' &&
    cardNumber === '' &&
    requestNumber === ''
  ) {
    result = await Patient.find({ name: { $regex: patientName } });
  }
  // only birthDate
  if (
    patientName === '' &&
    birthDate !== '' &&
    cardNumber === '' &&
    requestNumber === ''
  ) {
    result = await Patient.find({ birthDate: birthDate });
  }
  // only cardNumber
  if (
    patientName === '' &&
    birthDate === '' &&
    cardNumber !== '' &&
    requestNumber === ''
  ) {
    result = await Patient.find({ cardNumber: cardNumber });
  }
  // only requestNumber
  if (
    patientName === '' &&
    birthDate === '' &&
    cardNumber === '' &&
    requestNumber !== ''
  ) {
    result = await Patient.find({ requestNumber: requestNumber });
  }
  // name and birthDate
  if (
    patientName !== '' &&
    birthDate !== '' &&
    cardNumber === '' &&
    requestNumber === ''
  ) {
    result = await Patient.find({
      name: { $regex: patientName },
      birthDate: birthDate,
    });
  }
  // all fields
  if (
    patientName !== '' &&
    birthDate !== '' &&
    cardNumber !== '' &&
    requestNumber !== ''
  ) {
    result = await Patient.find({
      name: { $regex: patientName },
      birthDate: birthDate,
      cardNumber: cardNumber,
      requestNumber: requestNumber,
    });
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

module.exports = getRequestByData;
