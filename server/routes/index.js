var express = require('express');
var router = express.Router();
const { usersController } = require('../controllers/usersController')


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', (req, res) => usersController.findUser(req, res))

module.exports = router;