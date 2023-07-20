const mongoose = require('mongoose')
const { on } = require('../models/user')

module.exports = function(){
    mongoose
    .connect(process.env.MONGO_URI)
    .then(()=> console.log('MongoDB on...'))
    .catch(console.log)
}