const express = require('express');
const dateFormat = require("dateformat");
const app = express();

let serverInterval;
const myArgs = process.argv.slice(2);

const getDateNow =  () => dateFormat(new Date(), 'dd.mm.yyyy, HH:MM:ss');


app.get('/', (req, res) => {
    setTimeout( () => {
        res.send(getDateNow());
    }, myArgs[3]);
    clearInterval(serverInterval);
})

let server = app.listen(3000, ()=>{
    console.log('Starting');
    console.log('Server is listening on 3000');
    serverInterval = setInterval(()=> console.log(getDateNow()), myArgs[1]);
})