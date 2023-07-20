
const bcrypt = require ('bcrypt')
const User= require('../models/user')



const register = async (req, res) =>{
    const {password: plainTextPassword, ...userDetails}= req.body
    const salt = await bcrypt.genSalt(10)
	const password = await bcrypt.hash(plainTextPassword, salt)
    const user = await User.create({...userDetails, password})
    
    const token = user.generateJWT()
    res.setHeader('x-auth-token', token)
    res.send ('Usuario registrado')
    
 
}

module.exports={register}





