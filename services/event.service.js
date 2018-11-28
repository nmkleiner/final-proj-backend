'use strict';

const mongoService = require('./mongo.service');
const ObjectId = require('mongodb').ObjectId;

module.exports = {
    query,
    getById,
    remove,
    update,
    add,
}

function query(filter = {}) {
    // const byStatus = filter.inStock
    // const byName = filter.name
    // const byType = filter.type
    // const sortParams = filter.sortBy.split('_')
    // const sortObj = { [sortParams[0]]: +sortParams[1] }
    const findFilters = []
    // if (filter) {
    //     if (filter.byGenre) {
    //         console.log('hi');
            
    //     }
    // }
    // if (byStatus !== 'all') {
    //     if (byStatus === 'inStock') findFilters.push({ inStock: true })
    //     else findFilters.push({ inStock: false })
    // }
    // if (byType !== 'all') {
    //     findFilters.push({ type: byType })
    // }
    return mongoService.connectToDB()
        .then(dbConn => {
            const eventCollection = dbConn.collection('event');
            return eventCollection.find({}).toArray()
            // return eventCollection.find({ $and: findFilters }).sort(sortObj).toArray()
        })
}

function getById(eventId) {
    eventId = new ObjectId(eventId)
    return mongoService.connectToDB()
        .then(dbConn => {
            const eventCollection = dbConn.collection('event');
            return eventCollection.findOne({ _id: eventId })
        })
}

function remove(eventId) {
    eventId = new ObjectId(eventId)
    return mongoService.connectToDB()
        .then(dbConn => {
            const eventCollection = dbConn.collection('event');
            return eventCollection.remove({ _id: eventId })
        })
}

function update(event) {
    const eventId = new ObjectId(event._id)
    return mongoService.connectToDB()
        .then(dbConn => {
            const eventCollection = dbConn.collection('event');
            return eventCollection.updateOne({ _id: eventId },
                { $set: { name: event.name, price: event.price, type: event.type,} })
        })
}

function add(event) {
    return mongoService.connectToDB()
        .then(dbConn => {
            const eventCollection = dbConn.collection('event');
            return eventCollection.insertOne(event)
        })
}