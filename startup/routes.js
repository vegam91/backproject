

module.exports = function(app){

	app.use('./api/users', require('../routes/user'))
app.use('api/lists', require('../routes/lists'))
app.use('api/songs', require('../routes/songs'))

}



 
