const { postsService } = require('../services/postsService')

class PostsController {
    newPost(req, res) {
        postsService.newPost(req.body.data, (err, data) => {
            if (err) {
                res.status(400).json({ reason: err });
            }
            else res.json(data);
        });
    }

    editPost(req, res) {
        postsService.editPost(req.body.data, (err, data) => {
            if (err) {
                res.status(400).json({ reason: err });
            }
            else res.json(data);
        });
    }

    getMyPosts(req, res) {
        postsService.getMyPosts(req.params.id, (err, data) => {
            if (err) {
                res.status(400).json({ reason: err });
            }
            else res.json(data);
        });
    }

    getPosts(req, res) {
        postsService.getPosts((err, data) => {
            if (err) {
                res.status(400).json({ reason: err });
            }
            else res.json(data);
        });
    }

    getPhotos(req, res) {
        postsService.getPhotos((err, data) => {
            if (err) {
                res.status(400).json({ reason: err });
            }
            else res.json(data);
        });
    }

    getMyPhotos(req, res) {
        postsService.getMyPhotos(req.params.id, (err, data) => {
            if (err) {
                res.status(400).json({ reason: err });
            }
            else res.json(data);
        });
    }

    getVideos(req, res) {
        postsService.getVideos((err, data) => {
            if (err) {
                res.status(400).json({ reason: err });
            }
            else res.json(data);
        });
    }

    getMyVideos(req, res) {
        postsService.getMyVideos(req.params.id, (err, data) => {
            if (err) {
                res.status(400).json({ reason: err });
            }
            else res.json(data);
        });
    }

    changeProfilePicture(req, res) {
        postsService.changeProfilePicture(req.body.data, (err, data) => {
            if (err) {
                res.status(400).json({ reason: err });
            }
            else res.json(data);
        });
    }

    deletePost(req, res) {
        postsService.deletePost(req.body.data, (err, data) => {
            if (err) {
                res.status(400).json({ reason: err });
            }
            else res.json(data);
        });
    }
}

module.exports = {
    postsController: new PostsController()
}