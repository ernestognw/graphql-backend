import { Schema, model } from 'mongoose';

const BookSchema = new Schema(
  {
    name: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'Author', required: true },
  },
  {
    timestamps: true,
  }
);

export default model('Book', BookSchema);
