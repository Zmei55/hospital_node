const express = require('express');

const { auth, ctrlWrapper } = require('../../middlewares');
const { patients: ctrl } = require('../../controllers');

const router = express.Router();

//? GET all patients
router.get('/', auth, ctrlWrapper(ctrl.getAll));

//? GET patient by id
router.get('/:id', auth, ctrlWrapper(ctrl.getById));

//? POST patient search by field in the request body поиск пациента по полю переданному в теле запроса
router.post('/', auth, ctrlWrapper(ctrl.getByData));

//? POST add patient
router.post('/add', auth, ctrlWrapper(ctrl.add));

//? DELETE patient by id
router.delete('/:id', auth, ctrlWrapper(ctrl.removeById));

module.exports = router;
