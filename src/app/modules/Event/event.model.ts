import { Schema, model } from "mongoose";
import { IEvent } from "./event.interface";

const eventSchema = new Schema<IEvent>({
  title: { type: String, required: true },
  name: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  attendeeCount: { type: Number, default: 0 },
  attendees: [{ type: String }],
  userId: { type: String, required: true },
});

const Event = model<IEvent>("Event", eventSchema);
export default Event;
