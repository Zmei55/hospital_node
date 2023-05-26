const { NotFound } = require('http-errors');
const { Labor } = require('../../models');

const getLaborById = async (req, res) => {
  const { id } = req.params;
  const result = await Labor.findById(id);
  if (!result) {
    throw new NotFound(`Labor with id=${id} not found. Node`);
  }
  res.json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = getLaborById;
