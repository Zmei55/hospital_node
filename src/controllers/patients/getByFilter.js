const { NotFound } = require('http-errors');
const { Patient } = require('../../models');

const getByFilter = async (req, res) => {
  const { name, birthDate, cardNumber } = req.body;
  console.log(req.body);

  let date = null;
  if (birthDate !== '') date = new Date(birthDate);

  console.log('name: ', name);
  console.log('birthDate: ', birthDate);
  console.log('cardNumber: ', cardNumber);

  const result = await Patient.find(
    {
      $or: [
        {
          name: name === '' ? null : { $regex: name, $options: 'i' },
        },
        {
          birthDate: date,
        },
        { cardNumber: cardNumber === '' ? null : cardNumber },
      ],
    },
    'name birthDate cardNumber'
  );

  if (result.length === 0) {
    throw new NotFound(`Patient not found. Node`);
  }

  res.json({
    status: 'success',
    code: 200,
    data: result,
  });
};

module.exports = getByFilter;
