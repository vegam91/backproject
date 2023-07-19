const SongSchema = new mongoose.Schema({
    songID: {Required:true},
    songName: {type: String, required:true},
    Author:{type:String, required: true}
    })
    const Songs = mongoose.model('Songs', SongSchema)

module.exports= Songs