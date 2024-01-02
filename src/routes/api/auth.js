const express = require('express');

const { auth, ctrlWrapper } = require('../../middlewares');
const { auth: ctrl } = require('../../controllers');

const router = express.Router();

//? POST register
router.post('/register', ctrlWrapper(ctrl.register));

//? POST login
router.post('/login', ctrlWrapper(ctrl.login));

//? GET logout
router.get('/logout', auth('ALL'), ctrlWrapper(ctrl.logout));

module.exports = router;
