const express = require('express');

const { auth, ctrlWrapper } = require('../../middlewares');
const { services: ctrl } = require('../../controllers');

const router = express.Router();

//? POST add service
router.post('/add', auth, ctrlWrapper(ctrl.addService));

//? GET service by id
router.get('/:id', auth, ctrlWrapper(ctrl.getServiceById));

//? POST services search by filter (req.body)
router.post('/', auth, ctrlWrapper(ctrl.getServicesByName));

//? GET all services
router.get('/', auth, ctrlWrapper(ctrl.getAllServices));

module.exports = router;
