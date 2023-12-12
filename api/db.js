const mongoose = require('mongoose');

const url = "mongodb+srv://lagoreservemail:JcA01k7rgt8xIGIq@cluster0.oanmhl0.mongodb.net/?retryWrites=true&w=majority"

const db = async() => {
    try {
        const conn = await mongoose.connect(url);
        console.log('connected');
    } catch(error){
        console.log(error);
    }
}

module.exports = db;
