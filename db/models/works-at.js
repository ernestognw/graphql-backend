import { Schema, model } from 'mongoose';

const WorksAtSchema = new Schema(
  {
    author: { type: Schema.Types.ObjectId, ref: 'Author', required: true },
    publisher: { type: Schema.Types.ObjectId, ref: 'Publisher', required: true },
  },
  {
    timestamps: true,
  }
);

export default model('WorksAt', WorksAtSchema);
