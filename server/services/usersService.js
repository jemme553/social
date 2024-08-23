const con = require('./mysql')
const bcrypt = require('bcrypt');

class UsersService {
    findUser(emailPhone, callback) {
        con.connect(function (err) {
            if (err) {
                callback(err, null)
            } else {
                var sql = 'SELECT * FROM users WHERE email in (?)';
                con.execute(sql, [emailPhone],
                    function (err, result) {
                        if (result) {
                            if (result.length > 0) {
                                callback(null, result[0])
                            } else {
                                var sql = 'SELECT * FROM users WHERE phone in (?)';
                                con.execute(sql, [emailPhone],
                                    function (err, result) {
                                        if (result) {
                                            if (result.length > 0) {
                                                callback(null, result[0])
                                            } else {
                                                callback(err, null)
                                            }
                                        } else {
                                            callback(err, null)
                                        }
                                    });
                            }
                        } else {
                            callback(err, null)
                        }
                    });
            }
        })
    }
    newUser(user, callback) {
        function generateRandomID(length) {
            var result = '';
            var characters = '0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }

        con.connect(function (err) {
            if (err) {
                callback(err, null)
            }
            if (user) {
                let password = bcrypt.hashSync(user.password, 10);
                var randomID = generateRandomID(8);
                var sql = 'INSERT INTO users (idusers, name, email, phone, password, role) VALUES (?, ?, ?, ?, ?, ?)';
                con.execute(sql, [randomID, user.name, user.email, user.phone, password, 'user'],
                    function (err, result) {
                        if (err) {
                            callback(err, null)
                        };
                        callback(null, result)
                    });
            }
        });
    }

    editUser(user, callback) {
        con.connect(function (err) {
            if (err) {
                callback(err, null)
            }
            if (user) {
                var sql = 'UPDATE users SET email = ? , phone = ? , address = ? , relationship = ? , name = ? WHERE idusers = ?';
                con.execute(sql, [user.email, user.phone, user.address, user.relationship, user.name, user.id],
                    function (err, result) {
                        if (err) {
                            callback(err, null)
                        };
                        callback(null, result)
                    });
            }
        });
    }

    getSocialMedia(id, callback) {
        con.connect(function (err) {
            if (err) {
                callback(err, null)
            } else {
                let sql = 'SELECT * FROM socialmedia WHERE id = ?';
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

    updateSocialLink(data, callback) {
        console.log(data)
        let sql, values = []
        con.connect(function (err) {
            if (err) {
                callback(err, null)
            } else {
                sql = `select * FROM socialmedia WHERE id = ? AND name = ? `
                values = [data.id, data.name]
                con.query(sql, values,
                    function (err, result) {
                        if (err) {
                            callback(`Error: ${err}`, null)
                        } else {
                            if (result.length > 0) {
                                sql = `UPDATE socialmedia SET link = ? WHERE id = ? AND name = ? `
                                values = [data.link, data.id, data.name]
                                con.query(sql, values,
                                    function (err, result2) {
                                        if (err) {
                                            callback(`Error: ${err}`, null)
                                        } else {
                                            callback(null, result2)
                                        }
                                    })
                            } else {
                                sql = `INSERT INTO socialmedia VALUES (?,?,?) `
                                values = [data.id, data.name, data.link]
                                con.query(sql, values,
                                    function (err, result3) {
                                        if (err) {
                                            callback(`Error: ${err}`, null)
                                        } else {
                                            callback(null, result3)
                                        }
                                    })
                            }
                        }
                    });
            }
        })
    }

}



module.exports = {
    usersService: new UsersService()
}