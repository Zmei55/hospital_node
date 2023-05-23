const express = require('express');

const { auth, ctrlWrapper } = require('../../middlewares');
const { services: ctrl } = require('../../controllers');

const router = express.Router();

//? POST на добавление услуги
router.post('/add', auth, ctrlWrapper(ctrl.addService));

//? POST поиск услуг по фильтру
router.post('/', auth, ctrlWrapper(ctrl.getServicesByName));

//? GET получить список всех услуг
router.get('/', auth, ctrlWrapper(ctrl.getAllServices));

module.exports = router;
