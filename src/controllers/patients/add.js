const { customAlphabet } = require('nanoid');
const { Patient } = require('../../models');

const nanoid = customAlphabet('1234567890', 9);

const add = async (req, res) => {
  const result = await Patient.create({ ...req.body, cardNumber: nanoid() });

  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      result,
    },
  });
};

module.exports = add;
