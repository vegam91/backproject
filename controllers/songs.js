const Songs = require('../models/songs')

const addSong = async (req,res)=>{

    try{
        const {songID, songName, Author}=req.body;
        const newSong = await Songs.create({songID,songName,Author});
        res.status(201).json(newSong);
    }catch(error){
        console.error(error);
        res.status(500).json({message:'Error del servidor'});
    }
}

module.exports={
    addSong
}