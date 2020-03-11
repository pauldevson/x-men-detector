import mongoose from 'mongoose';

const { Schema } = mongoose;

const dnaModel = new Schema(
  {
    dna: [
      {
        type: String,
        required: true,
      },
    ],
    isMutant: {
      type: Boolean,
      default: false,
    },
    analyzedCount: {
      type: Number,
      default: 1,
    },
    hash: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, id: true }
);

export default mongoose.model('DNA', dnaModel);
