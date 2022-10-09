const express = require('express');
const router = express.Router();
const adminCheck = require('../middlewares/adminCheck')
const {create,edit,storeEdit,list,store,destroy,history} = require('../controllers/adminControllers')
/* const multer = require('multer') */

/* Creación de producto */
router.get('/crearProducts',adminCheck, create)
router.post('/crearProducts',adminCheck,store)

router.get('/listarProducts',adminCheck,list)
router.get('/history',adminCheck,history)

/* Edición de producto */
router.get('/editarProducts/:id',adminCheck,edit)
router.put('/editarProducts/:id',adminCheck, storeEdit)

/* Eliminación de producto */
router.delete('/destroy/:id',adminCheck, destroy);

module.exports = router