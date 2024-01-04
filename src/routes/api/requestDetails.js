const express = require('express');

const { auth, ctrlWrapper } = require('../../middlewares');
const { requestDetails: ctrl } = require('../../controllers');

const router = express.Router();

//? POST add new request detail
router.post('/add', auth('TREATMENT_ROOM'), ctrlWrapper(ctrl.add));

//? GET request detail by id
router.get('/:id', auth('TREATMENT_ROOM'), ctrlWrapper(ctrl.getById));

//? PUT update request detail
router.put('/:id', auth('TREATMENT_ROOM'), ctrlWrapper(ctrl.updateById));

module.exports = router;
