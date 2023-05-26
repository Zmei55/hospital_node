const { NotFound } = require('http-errors');
const { RequestDetails } = require('../../models');

const getRequestDetailsById = async (req, res) => {
  const { id } = req.params;
  const result = await RequestDetails.findById(id);
  if (!result) {
    throw new NotFound(`RequestDetails with id=${id} not found. Node`);
  }
  res.json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = getRequestDetailsById;
