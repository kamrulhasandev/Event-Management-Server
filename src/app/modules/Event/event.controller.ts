import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendRequest";
import { EventService } from "./event.service";

const createEvent = catchAsync(async (req, res) => {
  const result = await EventService.createEvent({
    ...req.body,
    userId: req.user._id,
  });
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Event created successfully",
    data: result,
  });
});

const getAllEvents = catchAsync(async (req, res) => {
  const result = await EventService.getAllEvents();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "All events retrieved successfully",
    data: result,
  });
});

const getMyEvents = catchAsync(async (req, res) => {
  const result = await EventService.getMyEvents(req.user._id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "My events retrieved successfully",
    data: result,
  });
});

const joinEvent = catchAsync(async (req, res) => {
  const result = await EventService.joinEvent(req.params.id, req.user._id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Joined event successfully",
    data: result,
  });
});

const updateEvent = catchAsync(async (req, res) => {
  const result = await EventService.updateEvent(req.params.id, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Event updated successfully",
    data: result,
  });
});

const deleteEvent = catchAsync(async (req, res) => {
  await EventService.deleteEvent(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Event deleted successfully",
    data: null,
  });
});

export const EventController = {
  createEvent,
  getAllEvents,
  getMyEvents,
  joinEvent,
  updateEvent,
  deleteEvent,
};
