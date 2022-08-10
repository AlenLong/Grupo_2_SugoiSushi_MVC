const express = require('express')
const router = express.Router()

let {carrito,detail} = require('../controllers/productosControllers')

router.get('/carrito',carrito)
router.get('/detail',detail)


module.exports = router