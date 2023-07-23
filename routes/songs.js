const express = require('express');
const {param,body} = require ('express-validator')
const router = express.Router();
const validate = require('../middlewares/validate')
const isAdmin = require('../middlewares/isAdmin')
const songController = require('../controllers/songs')
const isAuth = require('../middlewares/isAuth')
const ValidationSchemaByBody = [
	body('songName')
		.notEmpty()
		.withMessage('El título no puede estar vacío')
		.isString()
		.withMessage('Debe proporcionar un título de texto'),
		body('Author')
		.notEmpty()
		.withMessage('El nombre del autor no puede estar vacío')
		.isString()
		.withMessage('Debe proporcionar un nombre de autor de texto'),
	
	]

const ValidationSchemaByParam = [
			param('id').notEmpty().withMessage('El ID no puede estar vacío').isMongoId().withMessage('ID inválido'),
		  ];
 const deleteValidationSchemaByParam = [
			param('id').notEmpty().withMessage('El ID no puede estar vacío').isMongoId().withMessage('ID inválido'),
		  ];
router.put('/songs/:id', isAuth, isAdmin, ValidationSchemaByParam, ValidationSchemaByBody, validate, songController.updateSong);

router.post('/songs', isAuth, isAdmin,ValidationSchemaByBody, validate, songController.addSong);

router.delete('/songs/:id', isAuth, isAdmin, deleteValidationSchemaByParam, validate, songController.deleteSong);


module.exports= router