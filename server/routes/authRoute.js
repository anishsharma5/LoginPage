const express= require('express')
const router = express.Router();
const cors = require('cors');
const {test,registerUser,loginUser} = require('../controllers/authControllers')
//middleware
router.use(
  cors({
  credentials: true,
  origin:'http://localhost:5173'
})
)

router.post('/register', registerUser)
router.post('/login',loginUser)
router.get('/', test)
module.exports = router