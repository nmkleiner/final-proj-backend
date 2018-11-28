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
        // console.log(4)
        const { userName, password } = req.body
        playerService.login(userName, password)
            .then(user => {
                // console.log(user)
                if (user.name) {
                    res.json(user)
                }
                else res.end()
            })
    })

    app.put('/player/:playerId', (req, res) => {
        console.log(req.body)
        const player = req.body
        console.log('server', player)
        playerService.update(player)
        .then(() => res.end())
    })

}

module.exports = addRoutes
