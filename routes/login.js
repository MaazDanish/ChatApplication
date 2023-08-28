const express = require('express');
const path = require('path');

const routes = express.Router();
const dirName = require('../utility/path');

routes.get('/login',(req,res,next) => {
    res.sendFile(path.join(dirName,'views','login.html'));
})

routes.post('/login',(req,res,next) =>{
    const data = req.body;
    console.log(data);
    res.redirect('/chatRoom');
})



module.exports = routes;