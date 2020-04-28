import express = require('express');

var router = express.Router();

router.get('/', (req, res)=>{
    res.render('index');
});

router.get('/description', (req, res)=>{
    res.render('description', {title: 'About'});
});

module.exports = router;
