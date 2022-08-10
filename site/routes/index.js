const express = require('express')
const router = express.Router()

let {index,nosotros,} = require('../controllers/indexControllers')

router.get('/',index)
router.get('/nosotros',nosotros)

module.exports = router