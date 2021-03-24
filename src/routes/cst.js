const express = require('express');
const router = express.Router();

router.get('/inicio', (req,res) =>{
    res.render('ruta/inicio')
});
router.get('/servicios',(req,res)=>{
    res.render('ruta/nuestros')
});
router.get('/contactos',(req,res)=>{
    res.render('ruta/contacto')
});
router.get('/registrarse',(req,res)=>{
    res.render('ruta/crear-usuario')
});
router.get('/iniciar',(req,res)=>{
    res.render('ruta/iniciar')
});
module.exports =router;