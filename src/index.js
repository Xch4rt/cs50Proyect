const express = require('express');
const path = require('path');
//const engine = require('ejs-mate');
const morgan = require('morgan');
const passport = require('passport');
const session = require('express-session');

const app = express();
require('./database');
require('./passport/local-auth.js');
//settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.engine('html', require('ejs').renderFile); /*--> esto es por si necesito trabajar mejor en html pero renderizarlos en ejs*/


//middlewares
app.use(express.urlencoded({extended: false}));
app.use(session({
    secret:'bestpasswordintheworld',
    resave: false,
    saveUninitialized: false
}));


app.use(passport.initialize());
app.use(passport.session());


//rutas
app.use(require('./routes/index'));


//static files
app.use(express.static(path.join(__dirname, 'public')));
// server
app.listen(app.get('port'), ()=>{
    console.log("Servidor encendido", app.get('port'));
});


// aqui esta el servidor 

