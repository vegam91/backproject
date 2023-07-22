const List = require('../models/list');

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

module.exports = {

  deleteSongFromList
};
