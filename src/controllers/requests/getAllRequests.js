const { NotFound } = require('http-errors');
const { Request } = require('../../models');

const getAllRequests = async (req, res) => {
  const result = await Request.find({}, '-createdAt -updatedAt');
  if (result.length === 0) {
    throw new NotFound('Requests not found. Node');
  }
  res.json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = getAllRequests;
