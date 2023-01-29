const express = require('express');

const { auth, ctrlWrapper } = require('../../middlewares');
const { patients: ctrl } = require('../../controllers');

const router = express.Router();

//? GET всех пациентов
router.get('/', auth, ctrlWrapper(ctrl.getAll));

//? GET одного пациента по id
router.get('/:id', auth, ctrlWrapper(ctrl.getById));

//? GET одного пациента по name
router.get('/:name', auth, ctrlWrapper(ctrl.getByName));

//? POST на добавление пациента
router.post('/', auth, ctrlWrapper(ctrl.add));

//? DELETE на удаление пациента
router.delete('/:id', auth, ctrlWrapper(ctrl.removeById));

module.exports = router;
