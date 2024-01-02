const { NotFound } = require('http-errors');
const { Address } = require('../../models');

const getByFilter = async (req, res) => {
  const { street, houseNumber, city, postcode } = req.body;

  const result = await Address.find(
    {
      $or: [
        { street: street === '' ? null : { $regex: street } },
        { houseNumber: houseNumber === '' ? null : parseInt(houseNumber) },
        { city: city === '' ? null : { $regex: city } },
      ],
    },
    '-createdAt -updatedAt'
  );

  if (result.length === 0) {
    throw new NotFound(`Address not found. Node`);
  }

  res.json({
    status: 'success',
    code: 200,
    data: result,
  });
};

module.exports = getByFilter;
