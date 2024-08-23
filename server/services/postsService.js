const con = require('./mysql')
class PostsService {

    newPost(file, callback) {
        const date = new Date()
        con.connect(function (err) {
            if (err) {
                callback(err, null)
            } else {
                var sql = `INSERT INTO posts (userid,filename,type,size,title,date,category,url) VALUES (?,?,?,?,?,?,?,?)`;
                con.query(sql, [file.userId, file.fileName, file.fileType, file.fileSize, file.title, date, file.category, file.url],
                    function (err, result) {
                        if (result != undefined) {
                            callback(null, result)
                        }
                        else callback('Error: error saving Post', null)
                    });
            }
        })
    }

    editPost(file, callback) {
        con.connect(function (err) {
            if (err) {
                callback(err, null)
            } else {
                var sql = `UPDATE posts SET filename = ?, type = ?, size = ?, title = ?, category = ?, url = ? WHERE postid = ?`;
                con.query(sql, [file.fileName, file.fileType, file.fileSize, file.title, file.category, file.url, file.postid],
                    function (err, result) {
                        console.log(result)
                        if (result != undefined) {
                            if (file.category == 'profile picture') {
                                var sql = `UPDATE users SET picture = ? WHERE idusers = ?`;
                                con.query(sql, [file.url, file.userId],
                                    function (err, result2) {
                                        if (result2 != undefined) {
                                            callback(null, { 'Update Post': result, 'Update Profile Picture': result2 })
                                        } else {
                                            callback('Error: error Editing Profile Picture', null)
                                        }
                                    })
                            } else {
                                callback(null, result)
                            }
                        }
                        else { callback('Error: error Editing Post', null) }
                    });
            }
        })
    }

    getMyPosts(Id, callback) {
        con.connect(function (err) {
            if (err) {
                callback(err, null)
            } else {
                var sql = 'SELECT * FROM posts JOIN users ON users.idusers = posts.userid WHERE posts.userid in (?) order by date DESC';
                con.query(sql, [Id],
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

    getPosts(callback) {
        con.connect(function (err) {
            if (err) {
                callback(err, null)
            } else {
                var sql = 'SELECT * FROM posts JOIN users ON users.idusers = posts.userid order by date DESC ';
                con.query(sql,
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

    getPhotos(callback) {
        con.connect(function (err) {
            if (err) {
                callback(err, null)
            } else {
                var sql = 'SELECT * FROM posts JOIN users ON users.idusers = posts.userid WHERE posts.category in (?) OR posts.category in (?) order by date DESC';
                con.query(sql, ['picture', 'profile picture'],
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

    getMyPhotos(Id, callback) {
        let id = parseInt(Id)
        con.connect(function (err) {
            if (err) {
                callback(err, null)
            } else {
                var sql = 'SELECT * FROM posts JOIN users ON users.idusers = posts.userid WHERE posts.userid in (?) AND posts.category in (?,?) order by date DESC';
                con.query(sql, [id, 'picture', 'profile picture'], // 'picture', 'profile picture'
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

    getVideos(callback) {
        con.connect(function (err) {
            if (err) {
                callback(err, null)
            } else {
                var sql = 'SELECT * FROM posts JOIN users ON users.idusers = posts.userid WHERE posts.category in (?) order by date DESC';
                con.query(sql, ['video'],
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

    getMyVideos(Id, callback) {
        con.connect(function (err) {
            if (err) {
                callback(err, null)
            } else {
                var sql = 'SELECT * FROM posts JOIN users ON users.idusers = posts.userid WHERE posts.userid in (?) AND posts.category in (?) order by date DESC';
                con.query(sql, [Id, 'video'],
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

    changeProfilePicture(file, callback) {
        const date = new Date()
        con.connect(function (err) {
            if (err) {
                callback(err, null)
            } else {
                var sql = `INSERT INTO posts (userid,filename,type,size,title,date,category,url) VALUES (?,?,?,?,?,?,?,?)`;
                con.query(sql, [file.userId, file.fileName, file.fileType, file.fileSize, file.title, date, file.category, file.url],
                    function (err, result) {
                        if (err) {
                            callback(err, null)
                        } else {
                            var sql = 'UPDATE users SET picture = ? WHERE idusers = ?';
                            con.execute(sql, [file.url, file.userId],
                                function (err, result2) {
                                    console.log(err)
                                    if (err) {
                                        callback(err, null)
                                    } else {
                                        callback(null, result2)
                                    }
                                })
                        }
                    });
            }
        })
    }

    getProfilePictures(user, callback) {
        con.connect(function (err) {
            if (err) {
                callback(err, null)
            } else {
                var sql = 'SELECT * FROM posts WHERE category in (?) AND userid in (?) order by date DESC';
                con.query(sql, ['profile picture', user.idusers],
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

    deletePost(post, callback) {
        con.connect(function (err) {
            if (err) {
                callback(err, null)
            } else {
                var sql = 'DELETE FROM posts WHERE postid in (?)';
                con.query(sql, [post.postid],
                    function (err, result) {
                        if (result != undefined) {
                            if (post.category == 'profile picture') {
                                var sql = 'UPDATE users SET picture = ? WHERE idusers in (?)';
                                con.query(sql, [null, post.userid],
                                    function (err, result2) {
                                        if (result2 != undefined) {
                                            callback(null, result2)
                                        } else {
                                            callback(`Error: ${err}`, null)
                                        }
                                    });
                            } else {
                                callback(null, result)
                            }
                        } else {
                            callback(`Error: ${err}`, null)
                        }
                    });
            }
        })
    }

}


module.exports = {
    postsService: new PostsService()
}