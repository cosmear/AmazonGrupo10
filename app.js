const express = require("express");
const app = express();
const path = require('path');
const indexRouter = require('./routes/main');
const detalleRouter = require('./routes/products');

app.use(express.static("public"));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(process.env.PORT || 3000, ()=>{
  console.log('Servidor corriendo en el puerto 3000');
})
app.use('/', indexRouter);
//app.use('/users', usersRouter);
//app.use('/menu', menuRouter);
app.use('/detalle', detalleRouter);
