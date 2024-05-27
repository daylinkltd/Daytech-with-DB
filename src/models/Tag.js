const mongoose = require('mongoose');

const TagSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
// additional fields here if needed,
  description: {
    type: String,
  },
  count: {
    type: Number,
    default: 0,
  },
});

const Tag = mongoose.models.Tag || mongoose.model('Tag', TagSchema);


export default Tag;
