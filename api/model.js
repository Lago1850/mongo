const mongoose = require('mongoose');

const ContactsSchema = mongoose.Schema({
    name: {
        type: String
    },
    number: {
        type: String
    },
    
    address: {
        type: String
    }

});

const Contacts = mongoose.model('Contacts', ContactsSchema);
module.exports = Contacts;