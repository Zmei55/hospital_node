const express = require('express');

const { auth, ctrlWrapper } = require('../../middlewares');
const { addresses: ctrl } = require('../../controllers');

const router = express.Router();

//? POST add address
router.post('/add', auth, ctrlWrapper(ctrl.add));

//? GET address by id
router.get('/:id', auth, ctrlWrapper(ctrl.getById));

//? POST address search by filter
router.post('/', auth, ctrlWrapper(ctrl.getByData));

//? GET all addresses
router.get('/', auth, ctrlWrapper(ctrl.getAll));

//? PUT update address
router.put('/:id', auth, ctrlWrapper(ctrl.updateById));

//? DELETE address by id
router.delete('/:id', auth, ctrlWrapper(ctrl.removeById));

module.exports = router;