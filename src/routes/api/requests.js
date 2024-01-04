const express = require('express');

const { auth, ctrlWrapper } = require('../../middlewares');
const { requests: ctrl } = require('../../controllers');

const router = express.Router();

//? POST add new request
router.post('/add', auth('TREATMENT_ROOM'), ctrlWrapper(ctrl.add));

//? GET request by id
router.get('/:id', auth('TREATMENT_ROOM'), ctrlWrapper(ctrl.getById));

//? POST request search by filter
router.post('/', auth('TREATMENT_ROOM'), ctrlWrapper(ctrl.getByFilter));

//? GET all requests
router.get('/', auth('TREATMENT_ROOM'), ctrlWrapper(ctrl.getAll));

//? PUT update request
router.put('/:id', auth('TREATMENT_ROOM'), ctrlWrapper(ctrl.updateById));

//? POST number of requests
router.post(
  '/count',
  auth('TREATMENT_ROOM'),
  ctrlWrapper(ctrl.getRequestsDBCount)
);

module.exports = router;
