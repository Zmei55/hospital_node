const express = require('express');

const { auth, ctrlWrapper } = require('../../middlewares');
const { requests: ctrl } = require('../../controllers');

const router = express.Router();

//? GET получение списка всех запросов
router.get('/', auth, ctrlWrapper(ctrl.getAllRequests));

//? GET одного запроса по id
router.get('/:id', auth, ctrlWrapper(ctrl.getRequestById));

//? POST на добавление запроса
router.post('/add', auth, ctrlWrapper(ctrl.addRequest));

//? POST поиск запроса по фильтру
router.post('/', auth, ctrlWrapper(ctrl.getRequestByData));

//? GET на кол-во документов в коллекции requests
router.get('/count', auth, ctrlWrapper(ctrl.getRequestsDBCount));

module.exports = router;
