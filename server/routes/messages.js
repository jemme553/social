var express = require('express');
var router = express.Router();
const { messagesController } = require('../controllers/messagesController')

router.post('/newmessage', (req, res) => messagesController.newMessage(req, res));


module.exports = router;
