var express = require('express');
var router = express.Router();
const { notificationsController } = require('../controllers/notificationsController')

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});
router.post('/newnotification', (req, res) => notificationsController.newNotification(req, res))

router.get('/getnotifications/:id', (req, res) => notificationsController.getNotifications(req, res));

module.exports = router;
