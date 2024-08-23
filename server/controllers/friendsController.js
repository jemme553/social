const { friendsService } = require('../services/friendsService')

class FriendsController {

    getFriends(req, res) {
        friendsService.getFriends(req.params.id, (err, data) => {
            if (err) {
                res.status(400).json({ reason: err });
            } else {
                res.json(data);
            }
        })
    }

    getProfile(req, res) {
        friendsService.getProfile(req.params.id, (err, data) => {
            if (err) {
                res.status(400).json({ reason: err });
            } else {
                res.json(data);
            }
        })
    }

    requestAsnwer(req, res) {
        const answer = req.body.data.answer;
        if (answer == 1) {
            console.log(req.body.data.answer)
            friendsService.acceptFriend(req.body.data, (err, data) => {
                if (err) {
                    res.status(400).json({ reason: err });
                }
                else res.json(data);
            });
        } else {
            friendsService.rejectFriend(req.body.data, (err, data) => {
                if (err) {
                    res.status(400).json({ reason: err });
                }
                else res.json(data);
            });
        }
    }

}


module.exports = {
    friendsController: new FriendsController()
}