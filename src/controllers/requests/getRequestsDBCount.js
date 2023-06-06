const { NotFound } = require('http-errors');
const { Request } = require('../../models');

const getRequestsDBCount = async (req, res) => {
  const result = await Request.countDocuments();

  if (!result) {
    throw new NotFound('RequestsCount not found. Node');
  }

  res.json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = getRequestsDBCount;
