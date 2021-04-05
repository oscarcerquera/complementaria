const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path= require('path');
//const { use } = require('./routes');

//inicio

const app=express();

//configuraciones
app.set('port',process.env.PORT || 4000);
app.set('views',path.join(__dirname,'views'));
app.engine('.hbs', exphbs({
    defaultlayout:'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}));
app.set('view engine','.hbs');

//peticiones
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());


//variables globales
app.use((req,res,next)=>{
    next();

});

//rutas
app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use('/links',require('./routes/links'));
app.use('/ruta',require('./routes/cst'));
app.use('/cobertura',require('./routes/coberturas'));
app.use('/iniciar',require('./routes/cst'));
app.use('/clases', require('./routes/electiva/4semestre'));
app.use('/estudiantes', require('./routes/electiva/4semestre'));
app.use('/materias', require('./routes/electiva/4semestre'));




//app.use('./layauts',require('.layauts/login.html'));
//app.use('ruta',require('./routes/rutas'));

//public
app.unsubscribe(express.static(path.join(__dirname,'public')));


//inicia servidor
app.listen(app.get('port'),()=>{
    console.log('server on port', app.get('port'));
});