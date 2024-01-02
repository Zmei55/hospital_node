const express = require('express');

const { auth, ctrlWrapper } = require('../../middlewares');
const { users: ctrl } = require('../../controllers');

const router = express.Router();

//? POST add new user
router.post('/add', auth('ALL', 'ADMIN'), ctrlWrapper(ctrl.addUser));

//? GET current user
router.get('/current', auth('ALL'), ctrlWrapper(ctrl.getCurrent));

//?GET user by id
router.get('/:id', auth('ALL', 'ADMIN'), ctrlWrapper(ctrl.getById));

//? PUT update user
router.put('/:id', auth('ALL', 'ADMIN'), ctrlWrapper(ctrl.updateById));

//? DELETE remove
router.delete('/:id', auth('ALL', 'ADMIN'), ctrlWrapper(ctrl.removeById));

module.exports = router;
