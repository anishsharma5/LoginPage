const User = require('../models/user')
const {hashPassword,comparePassword}= require("../helpers/auth")
const test = (req, res) => {
  res.json('test is working')
}
///register
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // check if name is entered
    if (!(name)) {
     return res.json({
        error:'name is required'
      })
    }
    ///check password is good

    if (!password || password.length < 6) {
      return res.json({
        error:'password is required and should atleast 6 character'
      })
    }

    /// check email

    const exist = await User.findOne({ email });
    if (exist) { 
      return res.json(
        {
        error: 'Email is already taken'
      }
      )
    }

    const hashedPassword= await hashPassword(password)
//create user in database
    const user = await User.create({
      name, email,
      password:hashedPassword,
    })
    return res.json(user)
  } catch (error) {
    console.log(error);
  }
}

///login

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body
    
    const user = await user.findOne({ email })
    if (!user) {
      return res.json({
        error: "No user found"
      })
    }
      const match = await comparePassword(password, user.password)
      if (match) {
        res.json('password match')
      }
    
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  test,
  registerUser,
  loginUser
}
