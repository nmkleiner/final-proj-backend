const playerService = require('../services/player.service')

function addRoutes(app) {
    
    app.put('/api/login', (req,res) => {
        const { userName, password } = req.body
        playerService.login(userName, password)
            .then(user => {
                if (user.name) {
                    res.json(user)
                }
                else res.end()
            })
    })
}

module.exports = addRoutes
