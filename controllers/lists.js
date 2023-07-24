const List = require('../models/list');
const User = require('../models/user')

const createList = async (req, res) => {
    try {
      const { listName, public } = req.body;
      const userId = req.user._id; 
      const newList = await List.create({
        listName,
        public,
        owner: userId,})
        await User.findByIdAndUpdate(userId,{$push : {userlists : newList._id}})
        return res.status(201).json(newList);
    }catch (error){
        console.log(error);
        res.status(500).json({message:'Error del servidor'})
    }
 }


  const addSongToList = async (req, res) => {
    try {
      const listId = req.params.listId;
      const songId = req.params.songId;
      const list = await List.findByIdAndUpdate(listId, { $push: { songId: songId } }, { new: true });
      if (!list) {
        return res.status(404).json({ message: "Lista no encontrada" });
      }
      return res.json(list);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error del servidor" });
    }
  };


const deleteSongFromList = async (req, res) => {
  try {
    const { listId, songId } = req.params;

    const list = await List.findById(listId);
    if (!list) {
      return res.status(404).json({ message: 'Lista no encontrada' });
    }

    const songIndex = list.songId.indexOf(songId);
    if (songIndex === -1) {
      return res.status(404).json({ message: 'Canción no encontrada en la lista' });
    }

    list.songId.splice(songIndex, 1);
    await list.save();

    return res.json({ message: 'Canción eliminada de la lista' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error del servidor' });
  }
};

const deleteList = async (req, res) => {
    try {
      const listId = req.params.id;
      const deletedList = await List.findByIdAndRemove(listId);
  
      if (!deletedList) {
        return res.status(404).json({ message: 'Lista no encontrada' });
      }
  
      return res.json({ message: 'Lista eliminada correctamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error del servidor' });
    }
  };
  const getAllLists = async (req, res) => {
    try {
      const lists = await List.find();
      return res.json(lists);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error del servidor' });
    }
  };

module.exports = {
createList,
  deleteSongFromList,
  addSongToList,
  deleteList,
  getAllLists

};
