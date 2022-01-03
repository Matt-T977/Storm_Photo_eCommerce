import db from '../db';
import Blog from '../models/blog';

// Post Request
const addBlog = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const user = await db.collection('users').doc(id);
    await db.collection('users').doc(user.id).collection('blog').add(data);
    res.status(200).send('Blog successfully created.');
  } catch (error) {
    res.status(400).send(error.message);
  }
  next;
};

// Get all Blog Post
const getAllBlogPosts = async (req, res, next) => {
  try {
    const { id } = req.params;
    const blogs = await db.collection('users').doc(id).collection('blog');
    const data = await blogs.get();
    const blogArray = [];
    if (data.empty) {
      res.status(404).send('No Blog Posts.');
    } else {
      data.forEach((doc) => {
        const blog = new Blog(
          doc.id,
          doc.data().userId,
          doc.data().blogName,
          doc.data().mediaURI,
          doc.data().body,
          doc.data().date,
        );
        blogArray.push(blog);
      });
      res.send(blogArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
  next;
};

const getBlogPost = async (req, res, next) => {
  try {
    const { userId, blogId } = req.params;
    const blog = await db
      .collection('users')
      .doc(userId)
      .collection('blog')
      .doc(blogId);
    const data = await blog.get();
    if (!data.exists) {
      res.status(404).send('No Blog Post found.');
    } else {
      res.send(data.data());
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
  next;
};
