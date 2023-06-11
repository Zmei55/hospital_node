const { NotFount } = require('http-errors');
const { Patient } = require('../../models'); // осуществляем запрос к БД

const updateById = async (req, res) => {
  const { id } = req.params;

  const result = await Patient.findByIdAndUpdate(id, req.body, { new: true });

  if (!result) {
    throw new NotFount(`Patient with id=${id} not found`);
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
