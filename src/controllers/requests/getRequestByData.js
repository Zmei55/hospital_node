const { RequestSearch } = require('../../models');

const getRequestByData = async (req, res) => {
  const { name, cardNumber, requestNumber, dateCreation } = req.body;

  let result = [];

  result = await RequestSearch.find(
    {
      $or: [
        { patientName: name === '' ? null : { $regex: name } },
        { cardNumber: cardNumber === '' ? null : cardNumber },
        { requestNumber: requestNumber === '' ? null : requestNumber },
        { createdAt: dateCreation === '' ? null : dateCreation },
      ],
    },
    '-updatedAt'
  );

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
