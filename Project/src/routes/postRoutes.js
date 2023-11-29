const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// CRUD operations for posts
router.post('/api/posts', postController.createPost);
router.get('/api/posts', postController.getAllPosts);
router.get('/api/posts/:postId', postController.getPostById);
router.put('/api/posts/:postId', postController.updatePost);
router.delete('/api/posts/:postId', postController.deletePost);

// CRUD operations for comments
router.post('/api/posts/:postId/comments', postController.addComment);
router.get('/api/posts/:postId/comments', postController.getCommentsForPost);
router.put('/api/posts/:postId/comments/:commentId', postController.updateComment);
router.delete('/api/posts/:postId/comments/:commentId', postController.deleteComment);

module.exports = router;
