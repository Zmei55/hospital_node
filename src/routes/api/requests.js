const express = require('express');

const { auth, ctrlWrapper } = require('../../middlewares');
const { requests: ctrl } = require('../../controllers');

const router = express.Router();

//? POST add new request
router.post('/add', auth, ctrlWrapper(ctrl.add));

//? GET request by id
router.get('/:id', auth, ctrlWrapper(ctrl.getById));

//? POST request search by filter
router.post('/', auth, ctrlWrapper(ctrl.getByFilter));

//? GET all requests
router.get('/', auth, ctrlWrapper(ctrl.getAll));

//? PUT update request
router.put('/:id', auth, ctrlWrapper(ctrl.updateById));

//? POST number of requests
router.post('/count', auth, ctrlWrapper(ctrl.getRequestsDBCount));

module.exports = router;
