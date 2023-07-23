const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types
const ListSchema = new mongoose.Schema( { 
    songId: [{type: ObjectId, ref: 'Songs'}], 
    listName: { type: String, required: true } ,
     public: Boolean,
    owner: {type:String, ref : 'username'}
       })
       
       
    const List = mongoose.model('List', ListSchema)

module.exports= List