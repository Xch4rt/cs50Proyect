// aqui estan las peticiones http y las rutas
const express = require('express');
const router = express.Router();
const passport = require('passport');
//rutas
router.get('/', (req, res) =>{
    res.render('index.html',{ title: 'NicaLancing'});
});


router.get('/contact', (req, res) =>{
     res.render('contact.html', {title: 'About us'});
});


/*router.get('/login', (req, res)=>{
    res.render('login.html', {title: 'Login'});
});*/
router.get('/signup', (req, res)=>
{
    res.render('signup.html', {title:'Sign Up'});
});
router.post('/views/signup.html', passport.authenticate('local-signup',{
    succesRedirect: '/',
    failureRedirect: '/signup',
    passReqToCallback: true

}));
router.get('/login', (req, res) => {
    res.render('login.html', {title: 'Login'});
  });
  
  
router.post('/views/login.html', passport.authenticate('local-signin', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}));





function isAuthenticated(req, res) 
{
    if(req.isAuthenticated()) {
      return next();
    }
  
    res.redirect('/')
}

module.exports = router;
