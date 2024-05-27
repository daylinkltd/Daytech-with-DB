const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  // You can use a different data type if your content is stored in Markdown or MDX format
  publishedAt: {
    type: Date,
    required: true,
  },
  updatedAt: {
    type: Date,
  },
  author: {
    type: String,
  },
  // Array of strings containing tag names
  tags: { type: [String] },
  image: {
    type: String, // Store the image URL as a string
    required: true, // Ensure image URL is provided
  },
  // toc: { // Optional field for Table of Contents data
  //   type: Array,
  // },
});

const Blog = mongoose.models.Blog || mongoose.model('Blog', BlogSchema);

export default Blog
