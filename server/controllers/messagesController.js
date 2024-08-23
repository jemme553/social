const { messagesService } = require('../services/messagesService')

class MessagesController {
    newMessage(req, res) {
        messagesService.newMessage(req.body.data, (err, data) => {
            if (err) {
                res.status(400).json({ reason: err });
            }
            else res.json(data);
        });
    }

}


module.exports = {
    messagesController: new MessagesController()
}