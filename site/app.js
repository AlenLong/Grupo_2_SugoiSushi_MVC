/* Livereload */
const livereload = require('livereload');
const liveReloadServer = livereload.createServer();

/* Entry point */
const express = require('express')
const connectLivereload = require('connect-livereload')
const path = require('path')

const app = express()
const port = 3030

/* Archivos estaticos  */
app.use(express.static(path.resolve(__dirname,'public')))

/* Archivos estaticos monitoreados */
liveReloadServer.watch(path.join(__dirname, 'public'));
app.use(connectLivereload());

/* Requerir rutas*/
let indexRouter = require('./routes/index')
let adminRouter = require('./routes/admin')
let productsRouter = require('./routes/products')
let usersRouter = require('./routes/users')

/* View engine setup*/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/* Middlewares*/
app.use(express.json());
app.use(express.static(path.resolve(__dirname,'public')));

/*Rutas*/
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/admin',adminRouter);

/* Funcion de actualizacion del servidor  */
liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
      liveReloadServer.refresh("/");
    }, 100);
  });



/* Levantamos el servidor con app listen */
app.listen(port,function(){
    return console.log(`Se levanta el servidor en http://localhost:${port}`)
})