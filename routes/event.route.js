"use strict";

const eventService = require("../services/event.service");
const session = require("express-session");
module.exports = addRoutes;

// function requiredAuth(req, res, next) {
//     const user = req.session.user;
//     if (user) return res.status(200).send('Not Allowed')
//     else next()
// }

function addRoutes(app) {
  app.get("/api/event", (req, res) => {
    const filter = req.query;
    console.log(filter)
    eventService.query(filter)
      .then(events => res.json(events));
  });

  // add event and return it's id
  app.post("/api/event", (req, res) => {
    const event = req.body;
    debugger
    eventService.add(event).then(result => {
      res.json({ eventId: result.insertedId });
    });
  });
  // get one event
  app.get("/api/event/:eventId", (req, res) => {
    const eventId = req.params.eventId;
    eventService.getById(eventId).then(event => {
      res.json(event);
    });
  });

  // TODO: add middleware to delete, update and add
  // delete event
  app.delete("/api/event/:eventId", (req, res) => {
    const eventId = req.params.eventId;
    eventService.remove(eventId).then(() => res.end());
  });

    // update event
    app.put('/api/event/:eventId', (req, res) => {
        const event = req.body;
        eventService.update(event)
        .then(event => res.json(event));
    })
    
    // add event
    app.post('/api/event', (req, res) => {
        const event = req.body;
        eventService.add(event)
            .then(event => res.json(event));
    })
}
