import AppError from "../../errors/AppError";
import Event from "./event.model";

const createEvent = async (payload: any) => {
  const result = await Event.create(payload);
  return result;
};

const getAllEvents = async () => {
  return await Event.find().sort({ date: -1, time: -1 });
};

const getMyEvents = async (userId: string) => {
  return await Event.find({ userId });
};

const joinEvent = async (eventId: string, userId: string) => {
  const event = await Event.findById(eventId);
  if (!event) throw new AppError(404, "Event not found");
  if (event.attendees.includes(userId)) {
    throw new AppError(400, "You have already joined this event");
  }
  event.attendees.push(userId);
  event.attendeeCount += 1;
  return await event.save();
};

const updateEvent = async (eventId: string, data: any) => {
  const updated = await Event.findByIdAndUpdate(eventId, data, { new: true });
  if (!updated) throw new AppError(404, "Event not found");
  return updated;
};

const deleteEvent = async (eventId: string) => {
  const deleted = await Event.findByIdAndDelete(eventId);
  if (!deleted) throw new AppError(404, "Event not found");
  return deleted;
};

export const EventService = {
  createEvent,
  getAllEvents,
  getMyEvents,
  joinEvent,
  updateEvent,
  deleteEvent,
};
