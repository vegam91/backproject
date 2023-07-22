const express = require('express')
require('dotenv').config()
const app = express()

module.exports = function(app){

	app.use('./api/users', require('../routes/user'))
app.use('api/lists', require('../routes/lists'))

}



 
