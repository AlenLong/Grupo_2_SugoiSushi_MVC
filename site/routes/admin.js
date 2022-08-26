const express = require('express');
const router = express.Router();

const {create,edit,list,store,destroy,history} = require('../controllers/adminControllers')

/* Creación de producto */
router.get('/crearProducts',create)
router.post('/crearProducts',store)

router.get('/listarProducts',list)
router.get('/history',history)

router.get('/editarProducts',edit)

/* Eliminación de producto */
router.delete('/destroy/:id', destroy);

module.exports = router