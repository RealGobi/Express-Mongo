// tickets route for Were is @
let Ticket = require('../models/ticket');
//Post

module.exports.post = async (req, res, next) => {
    try {
        // hantera post
        let ticket = req.body;

        // får data frpn FE -> req.body
        // genererar en CODE och sätter in nykeln  code: CODE

        ticket.code = uid(5);
        // Skapar en istans av modellen Ticket

        let resp = await Ticket.create(ticket);
        console.log(resp);
        res.status(200).send(resp);
    } catch(err){
        console.log(err);
        res.status(400).send(err);
    }
};

module.exports.get = async (req, res) => {
    try{
        let tickets = await Ticket.find({});
        res.status(200).send(tickets);
    } catch (err){
        res.status(500).send(err);
    }
}

function uid(len){
    
    let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = [];

    for(let i = 0; i < len; i++){
        let rand = Math.floor(Math.random() * char.length);
        code.push(char[rand]);
    }
    return code.join('');


}
console.log(uid(5));