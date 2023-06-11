const express = require('express');

const { auth, ctrlWrapper } = require('../../middlewares');
const { labors: ctrl } = require('../../controllers');

const router = express.Router();

//? POST add laboratory
router.post('/add', auth, ctrlWrapper(ctrl.addLabor));

//? GET laboratory by id
router.get('/:id', auth, ctrlWrapper(ctrl.getLaborById));

//? GET all laboratories
router.get('/', auth, ctrlWrapper(ctrl.getAllLabors));

module.exports = router;
