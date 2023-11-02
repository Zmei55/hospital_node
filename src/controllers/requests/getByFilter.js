const { RequestSearch } = require('../../models');

const getByFilter = async (req, res) => {
  const { name, cardNumber, requestNumber, dateCreation } = req.body;

  let date = null;
  if (dateCreation !== undefined) date = new Date(dateCreation);

  const result = await RequestSearch.find(
    {
      $or: [
        { patientName: name === '' ? null : { $regex: name, $options: 'i' } },
        { cardNumber: cardNumber === '' ? null : cardNumber },
        {
          requestNumber: requestNumber === '' ? null : requestNumber,
        },
        { createdAt: date },
      ],
    },
    'patientName cardNumber requestNumber createdAt'
  );

  if (result.length === 0) {
    throw new NotFound(`Request not found. Node`);
  }

  res.json({
    status: 'success',
    code: 200,
    data: result,
  });
};

module.exports = getByFilter;
