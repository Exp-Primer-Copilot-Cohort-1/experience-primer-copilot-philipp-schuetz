// Create web server
// 1. Import express
const express = require('express');
// 2. Create router
const router = express.Router();
// 3. Import controller
const commentsController = require('../controllers/commentsController');
// 4. Create routes
// 4.1. Get all comments
router.get('/', commentsController.getAllComments);
// 4.2. Get comment by id
router.get('/:id', commentsController.getCommentById);
// 4.3. Add new comment
router.post('/', commentsController.addNewComment);
// 4.4. Update comment
router.put('/:id', commentsController.updateComment);
// 4.5. Delete comment
router.delete('/:id', commentsController.deleteComment);
// 5. Export module
module.exports = router;