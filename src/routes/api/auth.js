const express = require('express');

const { auth, isNotLocked, ctrlWrapper } = require('../../middlewares');
const { auth: ctrl } = require('../../controllers');

const router = express.Router();

//? POST register
router.post('/register', ctrlWrapper(ctrl.register));

//? POST login
router.post('/login', isNotLocked, ctrlWrapper(ctrl.login));

//? GET logout
router.get('/logout', auth('ALL', ['USER', 'ADMIN']), ctrlWrapper(ctrl.logout));

module.exports = router;
