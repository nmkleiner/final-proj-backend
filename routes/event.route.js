'use strict';

const eventService = require('../services/event.service')
const session = require('express-session')
module.exports = addRoutes;

// function requiredAuth(req, res, next) {
//     const user = req.session.user;
//     if (user) return res.status(200).send('Not Allowed')
//     else next()
// }

function addRoutes(app) {
    // get all events
    app.get('/event', (req, res) => {
        // const filter = req.query;
        eventService.query()
            .then(events => res.json(events));
    })

    // get one event
    app.get('/event/:eventId', (req, res) => {
        const eventId = req.params.eventId;
        eventService.getById(eventId)
        .then(event => {
            res.json(event)
        });
    })

    // TODO: add middleware to delete, update and add
    // delete event
    app.delete('/event/:eventId', (req, res) => {
        const eventId = req.params.eventId;
        eventService.remove(eventId)
            .then(_ => res.end());
    })

    // update event
<<<<<<< HEAD
    app.put('/event/:eventId', (req, res) => {
        const event = req.body;
        console.log('event passed in put:', event)
=======
    app.put('/eventId/:eventId', (req, res) => {
        const event = req.body;
        console.log(event)
>>>>>>> da0f3e77d0d8f0c828d3bf557edfd702fa70d78f
        eventService.update(event)
        .then(event => res.json(event));
    })
    
    // add event
    app.post('/event', (req, res) => {
        const event = req.body;
        eventService.add(event)
            .then(event => res.json(event));
    })
}