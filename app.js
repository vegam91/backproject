const express = require('express')
require('dotenv').config()
// const User= require('./models/user')
// const List = require ('./models/list')
const app = express()
const userRoutes = require ('./routes/user')
const listRoutes = require ('./routes/lists')

app.use('./api/users', userRoutes)
app.use('api/lists', listRoutes)

require('./startup/db')()

 
// endpoints user 

// 1.Registrar User
// app.post('/singup', async (req,res) =>{
  
//     const newUser= await User.create(req.body)
//     res.json(newUser);

// });

// //2. Acceso cuenta 
// app.post('singin', async (req,res))  

// // Endpoints lista 

// app.post('/list', async (req,res) => {
// const newList =  await List.create(req.body)
// // const listname = await List.find(req.body)
// // User.listName.push()
// res.json(newList)
// })

// // 3.Editar lista 
// app.put('/list/:id', async (req,res) =>{
// const updateList = await List.findByIdAndUpdate(req.params.id,
//     {$set:req.body},
// 		{new:true})
// res.json(updateList)
// })

app.listen(3000, () => console.log('Server on...'))