const { NotFound } = require('http-errors');
const { Request } = require('../../models');

const getRequestsDBCount = async (req, res) => {
  const result = await Request.countDocuments();

  res.json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = getRequestsDBCount;
