const express= require('express')
const router = express.Router();
// const{ Body } = 'express-validator'
const List = require ('../models/list')
// const ListControllers = ('../controllers/lists')
const isAuth = require('../middlewares/isAuth')


// const idValidationSchemaByBody = Body('id')
// 	.isMongoId()
// 	.withMessage('Id invalida')

router.post('/', isAuth, async (req,res) =>{

    try{
        const {listName, public} = req.body;
        const userId = req.user_id;
        const newList = await List.create({
            listName,
            public,
            owner: userId
        })
     return res.status(201).json(newList);
    }catch(error){
        console.error(error);
        res.status(500).json({message: "Error del servidor"})
    }
})

router.put('/listId/song/:songId', isAuth, async (req,res) =>{
    try{
        const listId= req.params.listId;
        const songId = req.params.songId;
        const list = await List.findByIdAndUpdate(listId,{$push : {songId: songId}},{new:true})
        if(!list){
            return res.status(404).json({message: "Lista no encontrada"});
        }
        return res.json(list);
    }catch(error){
        console.error(error);
        res.status(500).json({message:"error del servidor "})
    }
})


// router.delete('/lists/:listId/song/:songId',
// isAuth,
// idValidationSchemaByBody,
// ListControllers.deleteSongFromList
// );


module.exports=router; 