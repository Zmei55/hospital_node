const { RequestSearch } = require('../../models');

const getByData = async (req, res) => {
  const { firstName, lastName, cardNumber, requestNumber, dateCreation } =
    req.body;

  let result = [];

  if (
    firstName === '' &&
    lastName === '' &&
    cardNumber === '' &&
    requestNumber === '' &&
    dateCreation === ''
  ) {
    result = await RequestSearch.find({});
  } else {
    result = await RequestSearch.find(
      {
        $or: [
          {
            firstName: firstName === '' ? null : { $in: [firstName, lastName] },
          },
          { lastName: lastName === '' ? null : { $in: [firstName, lastName] } },
          { cardNumber: cardNumber === '' ? null : cardNumber },
          { requestNumber: requestNumber === '' ? null : requestNumber },
          { createdAt: dateCreation === '' ? null : dateCreation },
        ],
      },
      '-updatedAt'
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
