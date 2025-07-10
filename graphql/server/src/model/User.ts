import mongoose, { Schema } from "mongoose";
import { EventDocument } from "./Event";

export interface UserDocument {
  name: string;
  email: string;
  password: string;
  events?: mongoose.Types.ObjectId[] | EventDocument[];
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<UserDocument>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: { type: String },
    events: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }],
  },
  { timestamps: true }
);

export const User = mongoose.model<UserDocument>("User", userSchema);
