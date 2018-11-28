'use strict';

const express = require('express');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const app = express();

const eventRoute = require('./routes/event.route')
const playerRoute = require('./routes/player.route')

const cors = require('cors')

app.use(cors({
    origin: ['http://localhost:8080'],
    credentials: true
}))

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: true
//   }));

app.use(cookieParser());
app.use(session({
    secret: 'puki muki',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }))

app.use(express.static('public'));
eventRoute(app);
playerRoute(app)

// app.post('/login', (req, res) => {
//     const username = req.body;
//     userService.checkLogin(username)
//         .then(user => {
//             req.session.user = user;
//             req.session.save()
//             res.json(req.session);
//         })
// })

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
})