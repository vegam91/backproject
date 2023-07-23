const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
// const config = require('config')
const { ObjectId } = mongoose.Schema.Types
const UserSchema = new mongoose.Schema( {
    username: { type: String, 
        required: true, 
        unique: true }, 

    password: { type: String, 
        required: true }, 

    isAdmin : Boolean,
    userlists:[{type: String, 
        ref:'List'}]
    })

    UserSchema.methods.generateJWT = function () {
        return jwt.sign({_id: this._id, 
            username: this.username, 
            isAdmin: this.isAdmin,
            }, 
            
            
            process.env.jwtPrivateKey)
    }
    
    const User = mongoose.model('User', UserSchema)

module.exports= User 