var express = require('express');
var router = express.Router();
const { usersController } = require('../controllers/usersController')

/* GET users listing. */
router.get('/users', function (req, res) {
  res.send('users');
});
router.post('/newuser', (req, res) => usersController.newUser(req, res));

router.post('/edituser', (req, res) => usersController.editUser(req, res));

router.get('/deleteuser', function (req, res) {
  res.send('deleteuser');
});

router.get('/getuser/:email', (req, res) => usersController.getUser(req, res));

router.get('/getsocialmedia/:id', (req, res) => usersController.getSocialMedia(req, res));

router.post('/updatesociallink', (req, res) => usersController.updateSocialLink(req, res));


module.exports = router;
