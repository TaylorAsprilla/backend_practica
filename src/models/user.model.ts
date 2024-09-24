
import { model, PopulatedDoc, Schema, Types } from "mongoose";
import { IStore } from "./store.model";


export interface IUser extends Document{
  documentNumber:string;
  name:string;
  email:string;
  dateBirth:Date;
  password?: string,
  store: PopulatedDoc<IStore & Document>[]
}

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
  password: {
    type: String,
    
  },
  role: {
    type: String,
    require: true,
    default: "USER_ROLE",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  store:[{
    type: Types.ObjectId,
    ref:'Store'
  }]

});

export const UserModel = model<IUser>('User', UserSchema);

