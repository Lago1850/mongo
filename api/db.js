const mongoose = require('mongoose');

const url = "mongodb+srv://metra:uDCPeG8ltRo2yVYp@cursova.fcxadqo.mongodb.net"

const db = async() => {
    try {
        const conn = await mongoose.connect(url);
        console.log('connected');
    } catch(error){
        console.log(error);
    }
}

module.exports = db;