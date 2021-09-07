const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const socketio = require('socket.io');
const http = require('http');
const path = require('path');
const Message = require('./Message');


const app = express();
const server = http.createServer(app);
const io = socketio(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
  });



const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');


const uri = process.env.MONGO_URI || 'mongodb://localhost/chats';
const port = process.env.PORT || 4000;

mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

const router = require('./router');
app.use(router);



io.on('connection', (socket) => {
    console.log('user connected');

    Message.find();

    socket.on('join', ({name,room}, callback) => {
        console.log(name, room)
        const { error, user } = addUser({
            id: socket.id,
            name,
            room
        });

        if(error) {
            return(callback(error));
        }

        socket.emit('messgae' , {
            user: 'admin',
            text: `${user.name}, welcome to the room: ${user.room}`
        })

        socket.broadcast.to(user.room).emit('messgae', {
            user: 'admin',
            text: `${user.name} has joined!`
        })

        socket.join(user.room);
        
    })

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);

        io.to(user.room).emit('message', {
            user: user.name,
            text: message
        })

        callback();
    })

    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
})



server.listen(port, () => {
    console.log(`Server is now connected port port ${port}`);
})