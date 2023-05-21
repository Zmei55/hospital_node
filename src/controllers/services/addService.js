const { Service } = require('../../models');

const addService = async (req, res) => {
  const result = await Service.create({ ...req.body });
  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      result,
    },
  });
};

module.exports = addService;
