const { NotFound } = require('http-errors');
const { Request } = require('../../models');

const getRequestById = async (req, res) => {
  const { id } = req.params;
  const result = await Request.findById(id, '-createdAt -updatedAt');
  if (!result) {
    throw new NotFound(`Request with id=${id} not found. Node`);
  }
  res.json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = getRequestById;
