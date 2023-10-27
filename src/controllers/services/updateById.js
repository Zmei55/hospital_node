const { NotFount } = require('http-errors');
const { Service } = require('../../models'); // осуществляем запрос к БД

const updateById = async (req, res) => {
  const { id } = req.params;

  const result = await Service.findByIdAndUpdate(id, req.body, { new: true });

  if (!result) {
    throw new NotFount(`Service with id=${id} not found`);
  }

  res.json({
    status: 'success',
    code: 200,
    data: result,
  });
};

module.exports = updateById;
