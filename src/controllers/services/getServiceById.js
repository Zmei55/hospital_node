const { NotFound } = require('http-errors');
const { Service } = require('../../models');

const getServiceById = async (req, res) => {
  const { id } = req.params;
  const result = await Service.findById(id);
  if (!result) {
    throw new NotFound(`Service with id=${id} not found. Node`);
  }
  res.json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = getServiceById;
