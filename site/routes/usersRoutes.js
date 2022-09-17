const {login,register,registerPost,loginPost} = require('../controllers/userControllers');
const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multerUsers');
const registerValidator = require('../validations/registerValidation')

router.get('/register',register);
router.post('/register', upload.single('imagen'), registerValidator, registerPost ); // NO ANDABA POR EL ORDEN DE registerPost Y upload ----- y despues no andaba por multer !!
router.get('/login',login);
router.post('/login',loginPost);

module.exports = router;


