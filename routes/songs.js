const express = require('express');
const {body} = require ('express-validator')
const router = express.Router();
const validate = require('../middlewares/validate')
const adminMiddleware = require('../middlewares/isAdmin')
const songController = require('../controllers/songs')

const listValidationSchemaByBody = [
	body('title')
		.notEmpty()
		.withMessage('El título no puede estar vacío')
		.isString()
		.withMessage('Debe proporcionar un título de texto'),]


router.post('/songs', adminMiddleware,listValidationSchemaByBody, validate, songController.addSong);

module.exports= router