const express = require('express')
const router = express.Router()

let {create,edit,list} = require('../controllers/adminControllers')

router.get('/listarProducts',list)
router.get('/editarProducts',edit)
router.get('/crearProducts',create)

module.exports = router