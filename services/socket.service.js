// const eventService = require('./event.service');

// io.on('connection', function (socket) {
//     console.log('a user connected');

//     var userRoom;

//     socket.on('chat room-joined', function (roomName) {
//         userRoom = roomName
//         socket.join(userRoom)
//     })
    
    
//     socket.on('chat msg', (msg) => {
//         // eventService.unshiftMsg(msg, eventId)
//         // historyMsgs.push(msg);
            
//         console.log('message: ', msg);
//         socket.to(userRoom).emit('chat newMsg', msg);

//     });

//     // socket.on('disconnect', function(){
//     //     console.log('user disconnected');
//     //   });

// });