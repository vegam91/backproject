const express= require('express')
const router = express.Router();
const {param, body } = require('express-validator');
// const List = require('../models/list');
const ListControllers = require('../controllers/lists');
const isAuth = require('../middlewares/isAuth');

const idValidationSchemaByBody = body('id').isMongoId().withMessage('Id invalida');
const idValidationSchemaByParams = param('id').isMongoId().withMessage('Id invalida');

// idValidationSchemaByParams
router.post('/', isAuth, ListControllers.createList);

router.put('/:listId/song/:songId', isAuth, ListControllers.addSongToList);


router.delete('/lists/:listId/song/:songId', isAuth, idValidationSchemaByBody, ListControllers.deleteSongFromList);


router.delete('/:id', isAuth, idValidationSchemaByParams, ListControllers.deleteList);

router.get('/', ListControllers.getAllLists);


module.exports = router;
