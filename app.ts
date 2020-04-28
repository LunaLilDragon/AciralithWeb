import express = require('express');
import path = require('path');
import fs = require('fs');

var app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next)=>{
    res.locals.links = JSON.parse(fs.readFileSync('./public/links.json', 'utf-8'));
    next();
})

app.use('/', require('./routes/index'))

app.listen(8080);
