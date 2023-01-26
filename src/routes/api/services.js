const express = require('express');

const { auth, ctrlWrapper } = require('../../middlewares');
const { services: ctrl } = require('../../controllers');

const router = express.Router();

//? GET всех услуг
router.get('/', auth, ctrlWrapper(ctrl.getAll));

//? GET одной услуги
router.get('/:id', auth, ctrlWrapper(ctrl.getById));

//? POST на добавление услуги
router.post('/', auth, ctrlWrapper(ctrl.add));

//? DELETE на удаление услуги
router.delete('/:id', auth, ctrlWrapper(ctrl.removeById));

module.exports = router;
