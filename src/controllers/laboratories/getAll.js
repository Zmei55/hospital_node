const { Labor } = require('../../models');

const getAll = async (req, res) => {
  const result = await Labor.find({}, '-createdAt -updatedAt');

  if (result.length === 0) {
    throw new NotFound('Labors not found. Node');
  }

  res.json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = getAll;
