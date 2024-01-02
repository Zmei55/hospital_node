const express = require('express');

const { auth, ctrlWrapper } = require('../../middlewares');
const { addresses: ctrl } = require('../../controllers');

const router = express.Router();

//? POST add address
router.post('/add', auth('ALL'), ctrlWrapper(ctrl.add));

//? GET address by id
router.get('/:id', auth('ALL'), ctrlWrapper(ctrl.getById));

//? POST address search by filter
router.post('/', auth('ALL'), ctrlWrapper(ctrl.getByData));

//? GET all addresses
router.get('/', auth('ALL'), ctrlWrapper(ctrl.getAll));

//? PUT update address
router.put('/:id', auth('ALL'), ctrlWrapper(ctrl.updateById));

//? DELETE address by id
router.delete('/:id', auth('ALL'), ctrlWrapper(ctrl.removeById));

module.exports = router;
