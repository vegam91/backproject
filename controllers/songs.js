const Songs = require('../models/songs')

const addSong = async (req,res)=>{

    try{
        const { songName, Author}=req.body;
        const newSong = await Songs.create({songName,Author});
        res.status(201).json(newSong);
    }catch(error){
        console.error(error);
        res.status(500).json({message:'Error del servidor'});
    }
}

const updateSong = async (req, res) => {
    try {
      const { id } = req.params;
      const { songName } = req.body;
  
      const updatedSong = await Songs.findByIdAndUpdate(id, { songName }, { new: true });
  
      if (!updatedSong) {
        return res.status(404).json({ message: 'Canción no encontrada' });
      }
  
      res.json(updatedSong);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error del servidor' });
    }
  };

  const deleteSong = async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedSong = await Songs.findByIdAndDelete(id);
  
      if (!deletedSong) {
        return res.status(404).json({ message: 'Canción no encontrada' });
      }
  
      res.json({ message: 'Canción eliminada correctamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error del servidor' });
    }
  };


module.exports={
    addSong,
    updateSong,
    deleteSong
}