var express = require('express');
var router = express.Router();
const { friendsController } = require('../controllers/friendsController')


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/getfriends/:id', (req, res) => friendsController.getFriends(req, res))

router.get('/getprofile/:id', (req, res) => friendsController.getProfile(req, res))

router.post('/requestasnwer', (req, res) => friendsController.requestAsnwer(req, res))


module.exports = router;