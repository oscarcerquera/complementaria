const express = require('express');
const router = express.Router();

router.get('/cobertura', (req,res) =>{
    res.render('cobertura/municipios')
    
});

module.exports =router;