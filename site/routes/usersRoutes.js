const {login,register,registerPost,loginPost} = require('../controllers/userControllers');
const express = require('express');
const router = express.Router();


const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({   // para guardar los datos en una ruta especifica
    destination: (req,file,callback) => {
        callback(null,'./public/img/users') // 'img-' + Date.now() + path.extname(file.originalname)
    },
    filename: (req,file,callback)=> {
        callback(null,`${Date.now()}_img_${path.extname(file.originalname)}`) // recibe el nombre del archivo, y le agrega la fecha y el img-
    }
    }); 

const upload = multer({ 
    storage 
});


router.get('/register',register);
router.post('/register', upload.single('imagen'),registerPost ); // NO ANDABA POR EL ORDEN DE registerPost Y upload
router.get('/login',login);
router.post('/login',loginPost);

module.exports = router;