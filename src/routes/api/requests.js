const express = require('express');

const { auth, ctrlWrapper } = require('../../middlewares');
const { requests: ctrl } = require('../../controllers');

const router = express.Router();

//? GET all requests
router.get('/', auth, ctrlWrapper(ctrl.getAllRequests));

//? GET request by id
router.get('/:id', auth, ctrlWrapper(ctrl.getRequestById));

//? POST add new request
router.post('/add', auth, ctrlWrapper(ctrl.addRequest));

//? POST request search by filter
router.post('/', auth, ctrlWrapper(ctrl.getRequestByData));

//? POST number of requests
router.post('/count', auth, ctrlWrapper(ctrl.getRequestsDBCount));

module.exports = router;
