const express = require('express');

const { auth, ctrlWrapper } = require('../../middlewares');
const { requestDetails: ctrl } = require('../../controllers');

const router = express.Router();

//? GET одного по id
router.get('/:id', auth, ctrlWrapper(ctrl.getRequestDetailsById));

//? POST на добавление запроса
router.post('/add', auth, ctrlWrapper(ctrl.addRequestDetails));

module.exports = router;
