import { reader } from "../utils/reader.js";
import { writer } from "../utils/writer.js";

export default {
  GET: (_, res) => {
    const allEvents = reader("event.json");
    res.render("event.ejs", { allEvents });
  },
  CREATE: (req, res) => {
    const { event_name, event_date } = req.body;

    if (!event_name) {
      return res.json({
        message: "Name can not be empty",
      });
    }

    if (!event_date) {
      return res.json({
        message: "Date  can not be empty",
      });
    }

    const allEvents = reader("event.json");

    if (allEvents.find((event) => event.event_name == event_name)) {
      return res.status(400).json({
        message: "Event already exists",
      });
    } else {
      allEvents.push({
        id: allEvents.at(-1)?.id + 1 || 1,
        event_name,
        event_date,
      });

      writer("event.json", allEvents);

      res.redirect("/get");
    }
  },
  UPDATE: (req, res) => {
    const { id } = req.params;
    const { event_name, event_date } = req.body;

    if (!event_name || !event_date) {
      return res
        .status(400)
        .json({ message: "Event name and date are required" });
    }

    const allEvents = reader("event.json");

    const eventIndex = allEvents.findIndex((event) => event.id == +id);

    console.log(id);

    if (eventIndex == -1) {
      return res.status(404).json({
        message: "Event not found",
      });
    } else {
      allEvents[eventIndex] = {
        id: +id,
        event_name,
        event_date,
      };

      writer("event.json", allEvents);

      res.redirect("/get");
    }
  },
  DELETE: (req, res) => {
    const { id } = req.params;

    const allEvents = reader("event.json");

    const eventIndex = allEvents.findIndex((event) => event.id == id);

    if (eventIndex == -1) {
      return res.status(404).json({
        message: "Event not found",
      });
    } else {
      allEvents.splice(eventIndex, 1);

      writer("event.json", allEvents);

      res.redirect("/get");
    }
  },
};
