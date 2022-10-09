const {login,register,registerPost,loginPost, profileUser, logout} = require('../controllers/userControllers');
const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multerUsers');
const registerValidator = require('../validations/registerValidation');
const loginValidator = require('../validations/loginValidation');
const userAccessCheck = require('../middlewares/userAccessCheck')

router.get('/register',register);
router.post('/register', upload.single('imagen'), registerValidator, registerPost ); // NO ANDABA POR EL ORDEN DE registerPost Y upload ----- despues no funcionaba por multer !! el formulario llega en "multipart/form-data" para multer. Express validator no lo podia levantar. por eso va primero multer.

router.get('/login',login);
router.post('/login',loginValidator, loginPost);

router.get('/profileUser',userAccessCheck, profileUser);
router.delete('/logout', logout);
module.exports = router;


