import express from "express";
import { EventController } from "./event.controller";
import { auth } from "../../middleware/auth";

const router = express.Router();

router.get("/", auth, EventController.getAllEvents);
router.post("/", auth, EventController.createEvent);
router.get("/my-events", auth, EventController.getMyEvents);
router.post("/join/:id", auth, EventController.joinEvent);
router.patch("/:id", auth, EventController.updateEvent);
router.delete("/:id", auth, EventController.deleteEvent);

export const EventRoutes = router;
