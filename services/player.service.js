// collection name = players

'use strict'
const mongoService = require('./mongo.service')
const ObjectId = require('mongodb').ObjectId;

module.exports = {
    login,
    update,
    signUp,
    getById
}

function login (userName, password) {
    return mongoService.connectToDB()
        .then(dbConn => {
            const playerCollection = dbConn.collection('players')
            playerCollection.findOne({name : userName})
            return playerCollection.findOne({name : userName})
        })
        .then(user => {
            if (password === user.password) return user
            else return {};
    })
}

function getById(playerId) {
    playerId = new ObjectId(playerId)
    return mongoService.connectToDB()
        .then(dbConn => {
            const playerCollection = dbConn.collection('players');
            playerCollection.findOne({ _id: playerId }).then(player => console.log(player,'player'))
            return playerCollection.findOne({ _id: playerId })
        })
}

function update(user) {
    const userId = new ObjectId(user._id)
    delete user._id;
    return mongoService.connectToDB()
        .then(dbConn => {
            const playerCollection = dbConn.collection('players');
            playerCollection.findOneAndUpdate({ _id: userId }, { $set: user })
        })
    }
    
    
    function signUp(user) {
        return mongoService.connectToDB()
            .then(dbConn => {
                const playerCollection = dbConn.collection('players');
                playerCollection.insertOne(user)
            })
    }