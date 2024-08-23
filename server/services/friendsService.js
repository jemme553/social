const con = require('./mysql')

const updateFriendRequest = (sql, values, callback) => {
    con.query(sql, values,
        function (err, result) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, result)
            }
        }
    );
}
const updateNotifaction = (values, callback) => {
    console.log(values)
    let sql = `UPDATE notifications SET approved = ? WHERE userid = ? AND notifications.from = ? AND type = 'Friend request';`
    con.query(sql, values,
        (err, result) => {
            if (err) {
                callback(err, null)
            } else {
                console.log(result)
                callback(null, result)
            }
        }
    );
}


class FriendsService {

    getFriends(id, callback) {
        con.connect(function (err) {
            if (err) {
                callback(err, null)
            } else {
                let sql = 'SELECT * FROM friends JOIN users ON users.idusers = friends.friendid WHERE friends.userid = ? AND friends.approved = ?';
                con.query(sql, [id, 1],
                    function (err, result) {
                        if (err) {
                            callback(`Error: ${err}`, null)
                        } else {
                            callback(null, result)
                        }
                    });
            }
        })
    }

    getProfile(id, callback) {
        con.connect(function (err) {
            if (err) {
                callback(err, null)
            } else {
                let sql = 'SELECT * FROM users WHERE idusers = ?';
                con.query(sql, [id],
                    function (err, result) {
                        if (err) {
                            callback(`Error: ${err}`, null)
                        } else {
                            callback(null, result)
                        }
                    });
            }
        })
    }

    acceptFriend(data, callback) {
        let sql, values = [];
        con.connect(function (err) {
            if (err) {
                callback(err, null)
            } else {
                sql = 'UPDATE friends SET approved = ? WHERE userid = ? AND friendid = ? ;';
                values = [data.answer, data.userid, data.from]
                updateFriendRequest(sql, values, (err, data1) => {
                    if (err) {
                        callback(err, null)
                    } else {
                        sql = 'INSERT INTO friends VALUES (?,?,?)'
                        values = [data.from, data.userid, data.answer]
                        updateFriendRequest(sql, values, (err, data2) => {
                            if (err) {
                                callback(err, null)
                            } else {
                                updateNotifaction([data.answer, data.userid, data.from], (err, data2) => {
                                    if (err) {
                                        callback(err, null)
                                    } else {
                                        callback(null, data2)
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }

    rejectFriend(data, callback) {
        con.connect(function (err) {
            if (err) {
                callback(err, null)
            } else {
                let sql = 'DELETE FROM friends WHERE userid = ? AND friendid = ? ;';
                updateFriendRequest(sql, [data.userid, data.from], (err, data1) => {
                    if (err) {
                        callback(err, null)
                    } else {
                        updateNotifaction([data.answer, data.userid, data.from], (err, data2) => {
                            if (err) {
                                callback(err, null)
                            } else {
                                callback(null, data2)
                            }
                        })
                    }
                })
            }
        })
    }

}

module.exports = {
    friendsService: new FriendsService()
}