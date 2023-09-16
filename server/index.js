const express = require("express");
const dotenv = require('dotenv').config()
const cors = require('cors')
const app = express();
const Port = 8000;
const { mongoose } = require('mongoose')
///database Connection 
mongoose.connect(process.env.MONGO_URL).then(() => console.log("database connected"))
  .catch((err) => console.log('Database is not connected'))
  //middleware
app.use(express.json())
app.use('/',require('./routes/authRoute'))
app.listen(Port,()=>console.log(`Server  is running at port ${8000}`))