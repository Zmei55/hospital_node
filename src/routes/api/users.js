const express = require('express');

const { auth, ctrlWrapper } = require('../../middlewares');
const { users: ctrl } = require('../../controllers');

const router = express.Router();

//? GET current
router.get('/current', auth, ctrlWrapper(ctrl.getCurrent));

//? DELETE remove
router.delete('/:id', auth, ctrlWrapper(ctrl.removeById));

module.exports = router;
