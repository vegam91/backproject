
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

const login = async (req,res) =>{


    const { password: plainTextPassword, username } = req.body

	const user = await User.findOne({ username })
	if (!user) return res.status(400).send('El usuario y contraseña no coincide')

	const isValidUser = await bcrypt.compare(plainTextPassword, user.password)

	if (!isValidUser)
		return res.status(400).send('El usuario o contraseña no coincide')

	const token = user.generateJWT()

	res.setHeader('x-auth-token', token)
	res.send('Usuario logueado')
}

const getUserProfile = async (req, res) => {
    try {
      const userId = req.user._id; 
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
  
      return res.json({
        username: user.username,
        
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error del servidor' });
    }
  };



module.exports={register,
login,
getUserProfile}





