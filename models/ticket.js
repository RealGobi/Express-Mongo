let mongoose = require('mongoose');

let Schema = mongoose.Schema;

// skapa ett schema
let ticketSchema = new Schema({
    code: {
        type: String,
        required: [true, 'No code found']
    },
    name: {
        type: String,
        required: [true, 'Name is not a string']
    },
    price: {
        type: Number,
        required: true
    },
    when: {
        date: {
            type: String,
            required: true
        },
        from: String,
        to: String
    }
});

// skapa model baserat på schemat
let Ticket = mongoose.model('ticket', ticketSchema);

// export model

module.exports = Ticket;