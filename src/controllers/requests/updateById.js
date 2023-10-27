const { NotFount } = require('http-errors');
const { Request } = require('../../models'); // осуществляем запрос к БД

const updateById = async (req, res) => {
  const { id } = req.params;

  const result = await Request.findByIdAndUpdate(id, req.body, { new: true });

  if (!result) {
    throw new NotFount(`Request with id=${id} not found`);
  }

  res.json({
    status: 'success',
    code: 200,
    data: result,
  });
};

module.exports = updateById;
