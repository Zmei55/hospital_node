const { NotFound } = require('http-errors');
const { Address } = require('../../models');

const getByData = async (req, res) => {
  const { street, houseNumber, city, postcode } = req.body;

  let result = [];

  if (street === '' && houseNumber === '' && city === '' && postcode === '') {
    result = await Address.find({});
  } else {
    result = await Address.find(
      {
        $or: [
          { street: street === '' ? null : { $regex: street } },
          { houseNumber: houseNumber === '' ? null : birthDate },
          { city: city === '' ? null : { $regex: city } },
          { postcode: postcode === '' ? null : postcode },
        ],
      },
      '-createdAt -updatedAt'
    );
  }

  // result = await Address.find(
  //   {
  //     $or: [
  //       { street: street === '' ? null : { $regex: street } },
  //       { houseNumber: houseNumber === '' ? null : birthDate },
  //       { city: city === '' ? null : { $regex: city } },
  //       { postcode: postcode === '' ? null : postcode },
  //     ],
  //   },
  //   '-createdAt -updatedAt'
  // );

  if (result.length === 0) {
    throw new NotFound(`Address not found. Node`);
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
