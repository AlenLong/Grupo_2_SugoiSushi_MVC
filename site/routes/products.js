const express = require('express')
const router = express.Router()

let {carrito,detail,listado} = require('../controllers/productosControllers')

router.get('/carrito',carrito)
router.get('/detail/:id',detail)
router.get('/listado',listado)

module.exports = router