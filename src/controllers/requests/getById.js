const { NotFound } = require('http-errors');
const { Request } = require('../../models');

const getById = async (req, res) => {
  const { id } = req.params;

  const result = await Request.findById(id, '-createdAt -updatedAt').populate(
    'requestDetails',
    '_id serviceId laborId completed createdAt'
  );

  if (!result) {
    throw new NotFound(`Request with id=${id} not found. Node`);
  }

  res.json({
    status: 'success',
    code: 200,
    data: result,
  });
};

module.exports = getById;
