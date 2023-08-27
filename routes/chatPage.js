const express = require('express');

const route = express.Router();
const fs = require('fs');

route.get('/chatRoom', (req, res, next) => {
    fs.readFile('data.txt', (err, data) => {
        if (err) {
            console.log(err);
            data = "Cannot find any chat";
        }
        res.send(`${data} <form onsubmit="document.querySelector('#username').value=localStorage.getItem('userName')" action="/chatRoom" method="POST"><input type="text" name="message" id="message" placeholder="message"> <input type="hidden" id="username" name="username"> <button type="submit">SEND</button> </form> `);
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