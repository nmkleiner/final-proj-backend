'use strict';

const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors())
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const eventRoute = require('./routes/event.route')
const playerRoute = require('./routes/player.route')

const cors = require('cors')

app.use(cors({
    origin: ['http://localhost:8080'],
    credentials: true
}))

app.use(bodyParser.json());

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

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
})

    // const io = require('socket.io').listen(server)


    // io.on('connection', (socket) => {
    //     console.log('someone connected')
    // })
