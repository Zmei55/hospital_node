const { NotFound } = require('http-errors');
const { Service } = require('../../models');

const removeById = async (req, res) => {
  const { id } = req.params;
  const result = await Service.findByIdAndRemove(id);
  if (!result) {
    throw new NotFound(`Patient with id=${id} not found`);
  }
  res.json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = removeById;
