const express = require('express');
const multer = require('multer');

const { auth, ctrlWrapper } = require('../../middlewares');
const { auth: ctrl } = require('../../controllers');

const router = express.Router();

const upload = multer({
  dest: 'uploads/',
});

//? POST register
router.post('/register', upload.none(), ctrlWrapper(ctrl.register));

//? POST login
router.post('/login', upload.none(), ctrlWrapper(ctrl.login));

//? GET logout
router.get('/logout', auth, ctrlWrapper(ctrl.logout));

module.exports = router;
