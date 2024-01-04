const express = require('express');

const { auth, ctrlWrapper } = require('../../middlewares');
const { patients: ctrl } = require('../../controllers');

const router = express.Router();

//? POST add patient
router.post('/add', auth('ALL', ['USER', 'ADMIN']), ctrlWrapper(ctrl.add));

//? GET patient by id
router.get('/:id', auth('ALL'), ctrlWrapper(ctrl.getById));

//? POST patients search by filter
router.post('/', auth('ALL'), ctrlWrapper(ctrl.getByFilter));

//? GET all patients
router.get('/', auth('ALL'), ctrlWrapper(ctrl.getAll));

//? PUT update patient by id
router.put(
  '/:id',
  auth('ALL', ['USER', 'ADMIN']),
  ctrlWrapper(ctrl.updateById)
);

//? DELETE patient by id
router.delete('/:id', auth('ALL', 'ADMIN'), ctrlWrapper(ctrl.removeById));

module.exports = router;
