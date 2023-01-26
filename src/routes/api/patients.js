const express = require('express');

const { auth, ctrlWrapper } = require('../../middlewares');
const { patients: ctrl } = require('../../controllers');

const router = express.Router();

//? GET всех пациентов
router.get('/', auth, ctrlWrapper(ctrl.getAll));

//? GET одного пациента
router.get('/:id', auth, ctrlWrapper(ctrl.getById));

//? POST на добавление пациента
router.post('/', auth, ctrlWrapper(ctrl.add));

//? DELETE на удаление пациента
router.delete('/:id', auth, ctrlWrapper(ctrl.removeById));

module.exports = router;
