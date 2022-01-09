import express from 'express';
import blogController from '../controllers/blogController';

const router = express.Router();

router.get('/list/:userId', blogController.getAllBlogPosts);

router.get('/:userId/:blogId', blogController.getBlogPost);

router.post('/:userId/new', blogController.addBlog);

router.put('/:userId/:blogId/update', blogController.updateBlogPost);

router.get('/:userId/:blogId', blogController.deleteBlogPost);

export default router;
