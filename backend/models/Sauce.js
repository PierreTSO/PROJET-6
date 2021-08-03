const mongoose = require('mongoose');

const sauceSchema = mongoose.Schema({
  id: {type: mongoose.ObjectId, required: true, unique: true},
  userId: { type: String, required: true, unique: true },
  name  : { type: String, required: true },
  manufacturer: { type: String, required: true },
  description: { type: String, required: true },
  mainPepper: { type: String, required: true },
  imageUrl: { type: String, required: true },
  heat: { type: Number, required: true },
  likes: { type: Number, required: true },
  dislikes: { type: Number, required: true },
  usersLiked: [{type: mongoose.ObjectId, ref: 'User'}],
  usersDisliked: [{type: mongoose.ObjectId, ref: 'User'}],
});

module.exports = mongoose.model('Sauce', sauceSchema);