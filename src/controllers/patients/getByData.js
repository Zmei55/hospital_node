const { NotFound } = require('http-errors');
const { Patient } = require('../../models');

const getByData = async (req, res) => {
  const { firstName, lastName, birthDate, cardNumber } = req.body;

  let result = [];

  if (
    firstName === '' &&
    lastName === '' &&
    birthDate === '' &&
    cardNumber === ''
  ) {
    result = await Patient.find({});
  } else {
    result = await Patient.find(
      {
        $or: [
          {
            firstName: firstName === '' ? null : { $in: [firstName, lastName] },
          },
          { lastName: lastName === '' ? null : { $in: [firstName, lastName] } },
          { birthDate: birthDate === '' ? null : birthDate },
          { cardNumber: cardNumber === '' ? null : cardNumber },
        ],
      },
      'firstName lastName birthDate cardNumber'
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

module.exports = getByData;
