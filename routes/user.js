const express = require ('express')
const {param, body} = require ('express-validator')
const UserCotrollers = require('../controllers/user')
const validate = require('../middlewares/validate')
const userValidationSchemaByBody = [
	body('username')
		.notEmpty()
		.withMessage('El nombre de usuario no puede estar vacío')
		.isString()
		.withMessage('Debe proporcionar un nombre de usuario en texto'),
	body('password')
		.notEmpty()
		.withMessage('La password no puede estar vacía')
		.isString()
		.withMessage('Debe proporcionar un password en texto'),
]

const router = express.Router()

router.post(
	'/signup',
	userValidationSchemaByBody,
	validate,
	UserCotrollers.register
)

module.exports= router 