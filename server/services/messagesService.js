const con = require('./mysql')

class MessagesService {
    newMessage(data, callback) {
        con.connect(function (err) {
            if (err) {
                callback(err, null)
            } else {
                var sql = 'INSERT INTO messages VALUES (?,?,?,?)';
                con.query(sql, [data.from, data.to, data.message, data.date],
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
    messagesService: new MessagesService()
}