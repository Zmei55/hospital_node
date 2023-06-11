const express = require('express');

const { auth, ctrlWrapper } = require('../../middlewares');
const { services: ctrl } = require('../../controllers');

const router = express.Router();

//? POST add service
router.post('/add', auth, ctrlWrapper(ctrl.add));

//? GET service by id
router.get('/:id', auth, ctrlWrapper(ctrl.getById));

//? POST services search by filter (req.body)
router.post('/', auth, ctrlWrapper(ctrl.getByName));

//? PUT update service
router.put('/:id', auth, ctrlWrapper(ctrl.updateById));

//? GET all services
router.get('/', auth, ctrlWrapper(ctrl.getAll));

module.exports = router;
