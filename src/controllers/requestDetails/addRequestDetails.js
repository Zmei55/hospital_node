const { RequestDetails } = require('../../models');

const addRequestDetails = async (req, res) => {
  const { _id } = req.user;
  const result = await RequestDetails.create({
    ...req.body,
    owner: _id,
  });
  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      result,
    },
  });
};

module.exports = addRequestDetails;
