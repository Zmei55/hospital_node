const express = require('express');

const { auth, ctrlWrapper } = require('../../middlewares');
const { patients: ctrl } = require('../../controllers');

const router = express.Router();

//? POST add patient
router.post('/add', auth, ctrlWrapper(ctrl.add));

//? GET patient by id
router.get('/:id', auth, ctrlWrapper(ctrl.getById));

//? POST patients search by filter
router.post('/', auth, ctrlWrapper(ctrl.getByData));

//? GET all patients
router.get('/', auth, ctrlWrapper(ctrl.getAll));

//? PUT update patient by id
router.put('/:id', auth, ctrlWrapper(ctrl.updateById));

//? DELETE patient by id
router.delete('/:id', auth, ctrlWrapper(ctrl.removeById));

module.exports = router;
