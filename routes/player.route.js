const playerService = require('../services/player.service')

function addRoutes(app) {
    
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

    app.put('/player/', (req, res) => {
        console.log(req.body)
        const player = req.body
        console.log('server', player)
        playerService.update(player)
        .then(() => res.end())
    })

}

module.exports = addRoutes
