const mongoose = require('mongoose')


const SongSchema = new mongoose.Schema({
    songID: { type : String, required:true},
    songName: {type: String, required:true},
    Author:{type:String, required: true}
    })
    const Songs = mongoose.model('Songs', SongSchema)

module.exports= Songs