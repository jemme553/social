const { notificationsService } = require('../services/notificationsService')

class NotificationsController {
    getNotifications(req, res) {
        notificationsService.getNotifications(req.params.id, (err, data) => {
            if (err) {
                res.status(400).json({ reason: err });
            }
            res.json(data);
        })
    }

    newNotification(req, res) {
        notificationsService.newNotification(req.body.data, (err, data) => {
            if (err) {
                res.status(400).json({ reason: err });
            }
            else res.json(data);
        });
    }
}


module.exports = {
    notificationsController: new NotificationsController()
}