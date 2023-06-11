const express = require('express');

const { auth, ctrlWrapper } = require('../../middlewares');
const { users: ctrl } = require('../../controllers');

const router = express.Router();

//? POST add new user
router.post('/add', auth, ctrlWrapper(ctrl.addUser));

//?GET user by id
router.get('/:id', auth, ctrlWrapper(ctrl.getById));

//? GET current user
router.get('/current', auth, ctrlWrapper(ctrl.getCurrent));

//? PUT update user
router.put('/:id', auth, ctrlWrapper(ctrl.updateById));

//? DELETE remove
router.delete('/:id', auth, ctrlWrapper(ctrl.removeById));

module.exports = router;
