const { NotFount } = require('http-errors');
const { Labor } = require('../../models'); // осуществляем запрос к БД

const updateById = async (req, res) => {
  const { id } = req.params;

  const result = await Labor.findByIdAndUpdate(id, req.body, { new: true });

  if (!result) {
    throw new NotFount(`Laboratory with id=${id} not found`);
  }

  res.json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = updateById;
