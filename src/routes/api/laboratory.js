const express = require('express');

const { auth, ctrlWrapper } = require('../../middlewares');
const { labors: ctrl } = require('../../controllers');

const router = express.Router();

//? POST на добавление
router.post('/add', auth, ctrlWrapper(ctrl.addLabor));

//? GET одного пациента по id
router.get('/:id', auth, ctrlWrapper(ctrl.getLaborById));

//? POST поиск запроса по фильтру
router.get('/', auth, ctrlWrapper(ctrl.getAllLabors));

module.exports = router;
