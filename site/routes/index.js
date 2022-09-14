const express = require('express')
const router = express.Router()

let {index,nosotros,detail,carrito,register,login} = require('../controllers/indexControllers')

router.get('/',index)
router.get('/nosotros',nosotros)
router.get('/detail',detail)
router.get('/carrito',carrito)
/* router.get('/register',register)
router.get('/login',login) */

module.exports = router