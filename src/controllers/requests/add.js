const { Request } = require('../../models');
const { RequestDetails } = require('../../models');

const add = async (req, res) => {
  const { _id } = req.user;
  const { requestNumber, patientId, requestDetails } = req.body;

  let detailsArr = [];

  await Promise.all(
    requestDetails.map(async detail => {
      const resultDetail = await RequestDetails.create(detail);
      detailsArr.push(resultDetail._id);
    })
  );

  const result = await Request.create({
    requestNumber,
    patientId,
    requestDetails: detailsArr,
    owner: _id,
  });

  res.status(201).json({
    status: 'success',
    code: 201,
    data: result,
  });
};

module.exports = add;
