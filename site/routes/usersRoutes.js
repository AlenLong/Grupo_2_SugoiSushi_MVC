const express = require('express')
const router = express.Router()


let {login,register,registerPost} = require('../controllers/userControllers')

router.get('/register',register)
router.post('/register',registerPost)
router.get('/login',login)
router.post('/login',login)

module.exports = router