const express = require('express');

const { auth, ctrlWrapper } = require('../../middlewares');
const { patients: ctrl } = require('../../controllers');

const router = express.Router();

//? GET всех пациентов
router.get('/', auth, ctrlWrapper(ctrl.getAll));

//? GET одного пациента по id
router.get('/:id', auth, ctrlWrapper(ctrl.getById));

//? POST поиск пациента по полю переданному в теле запроса
router.post('/', auth, ctrlWrapper(ctrl.getByName));

//? POST на добавление пациента
router.post('/add', auth, ctrlWrapper(ctrl.add));

//? DELETE на удаление пациента
router.delete('/:id', auth, ctrlWrapper(ctrl.removeById));

module.exports = router;
