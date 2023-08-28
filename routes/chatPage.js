const express = require('express');
const path = require('path');
const fs = require('fs');

const route = express.Router();

const dirName = require('../utility/path');

route.get('/chatRoom', (req, res, next) => {
    fs.readFile('data.txt', (err, data) => {
        if (err) {
            console.log(err);
            data = "Cannot find any chat";
        }
        res.sendFile(path.join(dirName,'views','chatPage.html'));
    })
})

route.post('/chatRoom', (req, res, next) => {
    console.log(req.body);
    fs.writeFile('data.txt', ` ${req.body.username} : ${req.body.message} ----- `, {flag: 'a'}, (err) => {
        if(err){
            console.log(err);
        }
        res.redirect('/chatRoom');
    });
})
module.exports = route;