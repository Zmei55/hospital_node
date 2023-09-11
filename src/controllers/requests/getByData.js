const { RequestSearch } = require('../../models');

const getByData = async (req, res) => {
  const { firstName, lastName, cardNumber, requestNumber, dateCreation } =
    req.body;

  const result = await RequestSearch.find(
    {
      $or: [
        {
          firstName: firstName === '' ? null : { $in: [firstName, lastName] },
        },
        { lastName: lastName === '' ? null : { $in: [firstName, lastName] } },
        { cardNumber: cardNumber === '' ? null : parseInt(cardNumber) },
        {
          requestNumber: requestNumber === '' ? null : parseInt(requestNumber),
        },
        { createdAt: dateCreation === '' ? null : dateCreation },
      ],
    },
    'firstName lastName cardNumber requestNumber createdAt'
  );

  if (result.length === 0) {
    throw new NotFound(`Request not found. Node`);
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
