//Dependencies

const express = require('express');
const mongoose = require('mongoose');

// connect to MongoDB

mongoose.connect(`mongodb+srv://Rabbit:${process.env.PASSWORD}@bunnyrabbit-rzsjf.mongodb.net/wia?retryWrites=true`, { useNewUrlParser: true})
.then(() => {
    console.info('Connected') 
})
.catch(err =>{
    console.error(JSON.stringify(err));
})

// routes
let tickets = require('./routes/tickets');
let vertify = require('./routes/vertify');
let app = express();

app.use(express.json());

app.route('/tickets')
.post(tickets.post)
.get(tickets.get)


// Finns biljetten
app.route('/vertify/:code')
.get(vertify.get)

const port = 3000;
app.listen(3000, () => {
    console.log(`Servern lyssnar på port: ${port}`)
})