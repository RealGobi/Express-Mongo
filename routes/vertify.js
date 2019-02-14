let Ticket = require('../models/ticket');

module.exports.get = async (req, res) => {
    try {
        // vertify code
       let resp = await Ticket.find({ code: req.params.code})
        console.log(resp);
        if (resp.length == 1){
            // valid
            res.status(200).send('Ticket is vailid')
        } else {
            // not vailid
            res.status(400).send('Ticket is NOT vailid!')
        }
}
 catch (err) {
    res.status(500).send(err);
}
}