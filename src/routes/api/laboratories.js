const express = require('express');

const { auth, ctrlWrapper } = require('../../middlewares');
const { labors: ctrl } = require('../../controllers');

const router = express.Router();

//? POST add laboratory
router.post('/add', auth('ALL', 'ADMIN'), ctrlWrapper(ctrl.add));

//? GET laboratory by id
router.get(
  '/:id',
  auth('TREATMENT_ROOM', ['USER', 'ADMIN']),
  ctrlWrapper(ctrl.getById)
);

//? GET all laboratories
router.get(
  '/',
  auth('TREATMENT_ROOM', ['USER', 'ADMIN']),
  ctrlWrapper(ctrl.getAll)
);

//? PUT update laboratory
router.put('/:id', auth('ALL', 'ADMIN'), ctrlWrapper(ctrl.updateById));

module.exports = router;
