const express = require('express');

const { auth, ctrlWrapper } = require('../../middlewares');
const { addresses: ctrl } = require('../../controllers');

const router = express.Router();

//? POST add address
router.post('/add', auth, ctrlWrapper(ctrl.add));

//? GET address by id
router.post('/add', auth, ctrlWrapper(ctrl.getById));

//? POST address search by filter
router.post('/add', auth, ctrlWrapper(ctrl.getByData));

//? PUT update address
router.post('/add', auth, ctrlWrapper(ctrl.updateById));

//? DELETE address by id
router.post('/add', auth, ctrlWrapper(ctrl.removeById));

module.exports = router;
