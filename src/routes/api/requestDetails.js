const express = require('express');

const { auth, ctrlWrapper } = require('../../middlewares');
const { requestDetails: ctrl } = require('../../controllers');

const router = express.Router();

//? GET request detail by id
router.get('/:id', auth, ctrlWrapper(ctrl.getRequestDetailsById));

//? POST add new request detail
router.post('/add', auth, ctrlWrapper(ctrl.addRequestDetails));

module.exports = router;
