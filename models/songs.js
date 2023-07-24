const mongoose = require('mongoose')


const SongSchema = new mongoose.Schema({
    songName: {type: String, required:true},
    Author:{type:String, required: true}
    })
    const Songs = mongoose.model('Songs', SongSchema)

module.exports= Songs