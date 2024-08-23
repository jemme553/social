var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/newreel', function (req, res) {
    res.send('new');
});
router.get('/deletereel', function (req, res) {
    res.send('deletereel');
});
module.exports = router;
