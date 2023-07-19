const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types
const UserSchema = new mongoose.Schema( {
    username: { type: String, 
        required: true, 
        unique: true }, 

    password: { type: String, 
        required: true }, 

    isAdmin : Boolean,
    userlists:[{type: String, 
        ref:'listName'}]
    })
    
    const User = mongoose.model('User', UserSchema)

module.exports= User 