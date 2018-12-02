'use strict';

const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors())
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
var http = require('http').Server(app);
const io = require('socket.io').listen(http)
const eventRoute = require('./routes/event.route')
const playerRoute = require('./routes/player.route')


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



const port = 3000;

io.on('connection', function (socket) {
    console.log('a user connected');

    var userRoom;

    socket.on('chat room-joined', function (roomName) {
        userRoom = roomName
        socket.join(userRoom)
    })


    socket.on('chat msg', function (msg) {
        console.log('message: ', msg);
        socket.to(userRoom).emit('chat newMsg', msg);

    });
});


http.listen(port, () => {
    console.log(`App listening on port ${port}!`);
})
