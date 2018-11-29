const playerService = require('../services/player.service')

function addRoutes(app) {

    app.get('/player', (req, res) => {
        playerService.query()
        .then(players => res.json(players))
    })
    
    app.get('/player/:playerId', (req, res) => {
        const playerId = req.params.playerId;
        playerService.getById(playerId)
            .then(player => res.json(player))  
    })

    app.delete('/player/:playerId', (req, res) => {
        const playerId = req.params.playerId;
        playerService.remove(playerId)
            .then(() => res.end())  
    })
    
    app.post('/player', (req, res) => {
        const player = req.body;
        playerService.add(player)
            .then(() => res.end())
    })


    app.put('/login', (req,res) => {
        const { userName, password } = req.body
        playerService.login(userName, password)
        .then(user => {
            if (user.name) {
                res.json(user)
            }
            else res.end()
        })
    })
    
    app.post('/signup', (req,res) => {
        const user = req.body
        playerService.signUp(user)
        .then(() => {
            res.end()
        })
    })
    
    app.put('/player/:playerId', (req, res) => {
        console.log('server', req.body)
        const player = req.body
        playerService.update(player)
        .then(() => res.end())
    })
    
    app.get('/player/:playerId', (req,res) => {
        const playerId = req.params.playerId
        playerService.getById(playerId)
            .then((player) => res.json(player))
    })

    // app.get('/event/:eventId', (req, res) => {
    //     const eventId = req.params.eventId;
    //     eventService.getById(eventId)
    //     .then(event => {
    //         res.json(event)
    //     });
    // })
    
}

module.exports = addRoutes
