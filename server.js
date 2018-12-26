"use strict";

const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const http = require("http").Server(app);
const io = require("socket.io").listen(http);
const eventRoute = require("./routes/event.route");
const playerRoute = require("./routes/player.route");

app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  session({
    secret: "puki muki",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  })
);

app.use(express.static("public"));
eventRoute(app);
playerRoute(app);

io.on("connection", socket => {
  socket.on("gameJoined", room => {
    socket.join(room)    
    socket.broadcast.to(room).emit('userJoined');
  });
  
  
  socket.on('alreadyHere', room => {
    socket.broadcast.to(room).emit('someoneAlreadyHere')
  })
  socket.on("rollDices", room => {
    socket.broadcast.to(room).emit('dicesRolling');
    // io.sockets.in(room).emit("movedSoldier",cells);
  });

  socket.on("dicesRes", (room,dices) => {
    socket.broadcast.to(room).emit('dicesUnrolling',dices);
  });
  socket.on("startDiceRes", (room,dice) => {
    socket.broadcast.to(room).emit('diceUnrolling',dice);
  });
  socket.on("soldierMoved", (cells,room) => {
    io.sockets.in(room).emit("movedSoldier",cells);
  });
  socket.on("endTurn", room => {
    socket.broadcast.to(room).emit('turnEnded');
  });
  socket.on("endGame", (room,winner) => {
    socket.broadcast.to(room).emit('gameEnded',winner);
  });
  socket.on("mars", room => {
    socket.broadcast.to(room).emit('isMars');
  });
  socket.on("turkishMars", room => {
    socket.broadcast.to(room).emit('isTurkishMars');
  });
  
  // socket.on("assignMsg", ({ msg, room }) => {
  //   io.sockets.in(room).emit("renderMsg", msg);
  // });
});

http.listen(process.env.PORT || 3000, () => {
  console.log('server running')
});

