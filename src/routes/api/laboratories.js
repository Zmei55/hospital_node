const express = require('express');

const { auth, ctrlWrapper } = require('../../middlewares');
const { labors: ctrl } = require('../../controllers');

const router = express.Router();

//? POST add laboratory
router.post('/add', auth, ctrlWrapper(ctrl.add));

//? GET laboratory by id
router.get('/:id', auth, ctrlWrapper(ctrl.getById));

//? GET all laboratories
router.get('/', auth, ctrlWrapper(ctrl.getAll));

//? PUT update laboratory
router.put('/:id', auth, ctrlWrapper(ctrl.updateById));

module.exports = router;
