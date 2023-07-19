const express = require('express')
const User= require('./models/user')
const List = require ('./models/list')
const app = express()
const mongoose = require('mongoose');
app.use(express.json())
mongoose.connect('mongodb://127.0.0.1:27017/music')

app.get('/ping', (req, res) => {
	res.json({pong: true})
}) 
// endpoints user 
app.post('/singin', async (req,res) =>{
  
    const newUser= await User.create(req.body)
    res.json(newUser);

});

app.post('/createlist', async (req,res) => {
const newList =  await List.create(req.body)
res.json(newList)

})


app.listen(3000, () => console.log('Server on...'))