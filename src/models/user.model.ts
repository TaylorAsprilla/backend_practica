import mongoose, { Schema } from "mongoose";

const UserSchema: Schema = new Schema({
  documentNumber: {
    type: String,
    unique: true,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
  },
  dateBirth: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const UserModel = mongoose.model('User', UserSchema);

