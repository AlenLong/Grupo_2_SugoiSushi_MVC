const express = require('express');
const router = express.Router();

const {create,edit,storeEdit,list,store,destroy,history} = require('../controllers/adminControllers')

/* Creación de producto */
router.get('/crearProducts',create)
router.post('/crearProducts',store)

router.get('/listarProducts',list)
router.get('/history',history)

/* Edición de producto */
router.get('/editarProducts/:id',edit)
router.put('/editarProducts/:id',storeEdit)

/* Eliminación de producto */
router.delete('/destroy/:id', destroy);

module.exports = router