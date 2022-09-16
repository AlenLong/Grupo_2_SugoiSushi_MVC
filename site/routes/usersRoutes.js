const express = require('express')
const router = express.Router()
const upload= require('../middlewares/multerUsuarios')

let {login,processRegister,register} = require('../controllers/userControllers')

router.get('/register',register)
router.post('/register',upload.single('imagen'),processRegister)
router.get('/login',login)
router.post('/login',login)

module.exports = router