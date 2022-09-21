const express = require('express')
const router = express.Router()

let {carrito,detail} = require('../controllers/productosControllers')

router.get('/carrito',carrito)
router.get('/detail/:id',detail)


module.exports = router