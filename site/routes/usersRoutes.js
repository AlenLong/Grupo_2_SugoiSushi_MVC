const {login,register,registerPost,loginPost} = require('../controllers/userControllers');
const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multerUsers')

router.get('/register',register);
router.post('/register', upload.single('imagen'),registerPost ); // NO ANDABA POR EL ORDEN DE registerPost Y upload
router.get('/login',login);
router.post('/login',loginPost);

module.exports = router;