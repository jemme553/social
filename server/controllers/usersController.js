const { usersService } = require('../services/usersService')
const { postsService } = require('../services/postsService')
const bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');
let config = require('../passport/config');
class UsersController {
    newUser(req, res) {
        usersService.newUser(req.body.data, (err, data) => {
            if (err) {
                res.status(400).json({ reason: err });
            }
            else res.json(data);
        });
    }

    editUser(req, res) {
        usersService.editUser(req.body.data, (err, data) => {
            if (err) {
                res.status(400).json({ reason: err });
            }
            else {
                usersService.findUser(req.body.data.email, (err, data) => {
                    if (err) {
                        res.status(400).json({ reason: err });
                    }
                    res.json(data);
                })
            }
        });
    }

    findUser(req, res) {
        usersService.findUser(req.body.data.email, (err, result) => {
            if (result) {
                if (!bcrypt.compareSync(req.body.data.password, result.password)) {
                    res.status(401).send('Incorrect password');
                } else {
                    postsService.getProfilePictures(result, (err, data) => {
                        // //BUILD OUR TOKEN
                        let token = {
                            username: result.email,
                            role: result.role
                        }
                        let newToken = jwt.sign(token, config.secret);
                        let user;
                        if (data) {
                            user = {
                                user: result,
                                token: newToken,
                                profilePictures: data
                            }
                        } else {
                            user = {
                                user: result,
                                token: newToken,
                            }
                        }
                        res.json(user);
                    })
                }
            } else {
                res.status(401).send('Not Authorized');
            }
        })
    }

    getUser(req, res) {
        usersService.findUser(req.params.email, (err, data) => {
            if (err) {
                res.status(400).json({ reason: err });
            }
            res.json(data);
        })
    }

    getSocialMedia(req, res) {
        usersService.getSocialMedia(req.params.id, (err, data) => {
            if (err) {
                res.status(400).json({ reason: err });
            }
            res.json(data);
        })
    }

    updateSocialLink(req, res) {
        usersService.updateSocialLink(req.body.data, (err, data) => {
            if (err) {
                res.status(400).json({ reason: err });
            }
            res.json(data);
        })
    }
}




module.exports = {
    usersController: new UsersController()
}