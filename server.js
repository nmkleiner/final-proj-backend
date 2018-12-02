"use strict";

const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
var http = require("http").Server(app);
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
  socket.on("chatJoined", roomName => socket.join(roomName));
  socket.on("assignMsg", ({ msg, room }) => {
    io.sockets.in(room).emit("renderMsg", msg);
  });
});

app.listen(process.env.PORT || 3000, () => {
  
});
