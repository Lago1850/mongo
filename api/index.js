const path = require('path');
const ip = require("ip");
const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const port = 3000;

const db = require('./db');
const Contacts = require('./model');
const { default: mongoose } = require('mongoose');
//db();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});


const getDate = () => {
    const date = new Date();
    return `${date.getFullYear()}-${(date.getMonth()+1 < 10) ? '0' + date.getMonth() : date.getMonth()}-${(date.getDate() < 10) ? '0' + date.getDate() : date.getDate()} ${(date.getHours() < 10) ? '0' + date.getHours() : date.getHours()}:${(date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes()}:${(date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds()}`;
}

app.post('/', async(req, res) => {
    const body = req.body;
    const contact = await Contacts.create({
        name: body.name ?? '',
        number: body.number,
        address: body.address,
        created_at:  getDate()
    })
    res.json({message: 'OK'});
})

app.get('/', async(req, res) => {
    const contacts = [];//await Contacts.find();
    res.json({message: 'OK', data: contacts.map( item =>{
         return {
            name: item.name ?? '',
            number: item.number?? '',
            address: item.address?? '',
            created_at: item.created_at ?? '',
         };   
    }) });
})

const server = app.listen(port, () => {
    const ipAddr = ip.address();
    console.log(`Example app listening on port ${port} on ip ${ipAddr}`);
})

process.on('SIGINT', () => {
    mongoose.connection.close(); 
    server.close();
});
