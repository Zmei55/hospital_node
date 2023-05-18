const express = require('express');

const { auth, ctrlWrapper } = require('../../middlewares');
const { patients: ctrl } = require('../../controllers');

const router = express.Router();

/**
 * @swagger
 *  get:
 *    summary: Returns the list of all the patients
 *    responses:
 *      200:
 *        description: The list of the patients
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/User'
 */

//? GET всех пациентов
router.get('/', auth, ctrlWrapper(ctrl.getAll));

//? GET одного пациента по id
router.get('/:id', auth, ctrlWrapper(ctrl.getById));

//? POST поиск пациента по полю переданному в теле запроса
router.post('/', auth, ctrlWrapper(ctrl.getByName));

//? POST на добавление пациента
router.post('/add', auth, ctrlWrapper(ctrl.add));

//? DELETE на удаление пациента
router.delete('/:id', auth, ctrlWrapper(ctrl.removeById));

module.exports = router;
