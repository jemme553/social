const con = require('./mysql')
class NotificationsService {

    newNotification(notification, callback) {
        console.log(notification)
        const date = new Date()
        con.connect(function (err) {
            if (err) {
                callback(err, null)
            } else {
                var sql = `INSERT INTO notifications VALUES (?,?,?,?,?,?,?)`;
                con.query(sql, [notification.id, notification.type, notification.from, 1, date, notification.postid,null],
                    function (err, result) {
                        if (err) {
                            callback(err, null)
                        } else {
                            if (notification.type == 'Friend request') {
                                var sql = `INSERT INTO friends (userid,friendid) VALUES (?,?)`;
                                con.query(sql, [notification.id, notification.from],
                                    function (err, result2) {
                                        if (err) {
                                            callback(err, null)
                                        } else {
                                            callback(null, result2)
                                        }
                                    });
                            }
                        }
                    });
            }
        })
    }

    getNotifications(id, callback) {
        console.log(id)
        con.connect(function (err) {
            if (err) {
                callback(err, null)
            } else {
                var sql = 'SELECT * FROM notifications JOIN users ON users.idusers = notifications.from WHERE notifications.userid in (?) order by date DESC';
                con.query(sql, [id],
                    function (err, result) {
                        if (result != undefined) {
                            callback(null, result)
                        } else {
                            callback(`Error: ${err}`, null)
                        }
                    });
            }
        })
    }

}

module.exports = {
    notificationsService: new NotificationsService()
}