import { Schema, model } from 'mongoose';

const PublisherSchema = new Schema(
  {
    name: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default model('Publisher', PublisherSchema);
