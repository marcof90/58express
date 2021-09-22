const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
const indexRoutes = require('./routes/index');
const port = 3000;

//configuraciones
mongoose.connect('mongodb+srv://root:toor@cluster58.xuwzi.mongodb.net/Cluster58?retryWrites=true&w=majority')
.then(db => console.log('Connected'))
.catch(err => console.log(err));
//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//rutas
app.use('/items/', indexRoutes);

//inicializacion del server
app.listen(port, ()=>{
    console.log('Server started!');
});