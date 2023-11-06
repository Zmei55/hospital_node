const { RequestSearch } = require('../../models');

const getByFilter = async (req, res) => {
  const { patientName, cardNumber, requestNumber, requestDate } = req.body;

  const minDateOfSearch = new Date(requestDate);
  const maxDateOfSearch = new Date(minDateOfSearch);
  maxDateOfSearch.setDate(minDateOfSearch.getDate() + 1);

  const result = await RequestSearch.find(
    {
      $or: [
        {
          patientName:
            patientName === '' ? null : { $regex: patientName, $options: 'i' },
        },
        { cardNumber: cardNumber === '' ? null : parseInt(cardNumber) },
        {
          requestNumber: requestNumber === '' ? null : parseInt(requestNumber),
        },
        {
          createdAt:
            requestDate === ''
              ? null
              : {
                  $gte: minDateOfSearch,
                  $lte: maxDateOfSearch,
                },
        },
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
