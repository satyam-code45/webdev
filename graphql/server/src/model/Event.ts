import mongoose, { Schema } from "mongoose";
import { UserDocument } from "./User";

export interface EventDocument {
  name: string;
  location: string;
  startTime: string;
  attendess?: mongoose.Types.ObjectId[] | UserDocument[];
  createdAt: Date;
  updatedAt: Date;
}

const eventSchema = new Schema<EventDocument>(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    startTime: { type: String, required: true },
    attendess: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

export const Event = mongoose.model<EventDocument>("Event", eventSchema);
