import mongoose from 'mongoose';

const { Schema } = mongoose;

const mutationModel = new Schema({
  title: { type: String },
  author: { type: String },
  genre: { type: String },
  read: { type: Boolean, default: false },
});

export default mongoose.model('Mutation', mutationModel);
