const mongoose = require('mongoose');

const url = "mongodb+srv://user2004:user2004@cluster0.oanmhl0.mongodb.net/?retryWrites=true&w=majority"

const db = async() => {
    try {
        const conn = await mongoose.connect(url);
        console.log('connected');
    } catch(error){
        console.log(error);
    }
}

module.exports = db;
