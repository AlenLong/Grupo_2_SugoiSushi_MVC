const express = require('express')
const router = express.Router()


let {login,register} = require('../controllers/userControllers')

router.get('/register',register)
router.post('/register',register)
router.get('/login',login)
router.post('/login',login)

module.exports = router