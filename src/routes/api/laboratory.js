const express = require('express');

const { auth, ctrlWrapper } = require('../../middlewares');
const { labors: ctrl } = require('../../controllers');

const router = express.Router();

//? POST на добавление запроса
router.post('/add', auth, ctrlWrapper(ctrl.addLabor));

//? POST поиск запроса по фильтру
router.get('/', auth, ctrlWrapper(ctrl.getAllLabors));

module.exports = router;
