const { NotFound } = require('http-errors');
const { Patient } = require('../../models');

const getByData = async (req, res) => {
  const { firstName, lastName, birthDate, cardNumber } = req.body;

  const result = await Patient.find(
    {
      $or: [
        {
          firstName: firstName === '' ? null : { $in: [firstName, lastName] },
        },
        { lastName: lastName === '' ? null : { $in: [firstName, lastName] } },
        { birthDate: birthDate === '' ? null : birthDate },
        { cardNumber: cardNumber === '' ? null : parseInt(cardNumber) },
      ],
    },
    'firstName lastName birthDate cardNumber'
  );

  if (result.length === 0) {
    throw new NotFound(`Patient not found. Node`);
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
