const express = require('express')
const router = express.Router()

let {create,edit,list} = require('../controllers/adminControllers')

router.get('/listar',list)
router.get('/editar',edit)
router.get('/crear',create)

module.exports = router