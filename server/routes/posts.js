var express = require('express');
var router = express.Router();
const { postsController } = require('../controllers/postsController')

router.post('/', (req, res) => postsController.getPhotosById(req, res))

router.get('/myposts/:id', (req, res) => postsController.getMyPosts(req, res))

router.post('/newpost', (req, res) => postsController.newPost(req, res))

router.post('/editpost', (req, res) => postsController.editPost(req, res))

router.post('/changeprofilepicture', (req, res) => postsController.changeProfilePicture(req, res))

router.get('/getposts', (req, res) => postsController.getPosts(req, res))

router.get('/getphotos', (req, res) => postsController.getPhotos(req, res))

router.get('/getmyphotos/:id', (req, res) => postsController.getMyPhotos(req, res))

router.get('/getvideos', (req, res) => postsController.getVideos(req, res))

router.get('/getmyvideos/:id', (req, res) => postsController.getMyVideos(req, res))

router.post('/deletepost', (req, res) => postsController.deletePost(req, res))


module.exports = router;