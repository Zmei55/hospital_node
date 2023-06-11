const express = require('express');

const { auth, ctrlWrapper } = require('../../middlewares');
const { requestDetails: ctrl } = require('../../controllers');

const router = express.Router();

//? POST add new request detail
router.post('/add', auth, ctrlWrapper(ctrl.addRequestDetails));

//? GET request detail by id
router.get('/:id', auth, ctrlWrapper(ctrl.getRequestDetailsById));

//? PUT update request detail
router.put('/:id', auth, ctrlWrapper(ctrl.updateById));

module.exports = router;
