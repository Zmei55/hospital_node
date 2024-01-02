const express = require('express');

const { auth, ctrlWrapper } = require('../../middlewares');
const { services: ctrl } = require('../../controllers');

const router = express.Router();

//? POST add service
router.post('/add', auth('ALL', 'ADMIN'), ctrlWrapper(ctrl.add));

//? GET service by id
router.get('/:id', auth('TREATMENT_ROOM'), ctrlWrapper(ctrl.getById));

//? POST services search by filter (req.body)
router.post('/', auth('TREATMENT_ROOM'), ctrlWrapper(ctrl.getByName));

//? PUT update service
router.put('/:id', auth('ALL', 'ADMIN'), ctrlWrapper(ctrl.updateById));

//? GET all services
router.get('/', auth('TREATMENT_ROOM'), ctrlWrapper(ctrl.getAll));

module.exports = router;
