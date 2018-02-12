import open from 'open';  
import rooms from './server/api/rooms';  

/* eslint-disable no-console */

export default function(app){
  app.use('/api/rooms', rooms);

  const port = process.env.PORT || 9797;  
  const server = app.listen(port, function(err) {  
    if (err) {
      console.log(err);
    } else {
      open(`http://localhost:${port}`);
    }
  });

  const io = require('socket.io')(server);

  io.on('connection', (socket) => {
    console.log('a user connected');
  
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });

    socket.on('room', function(data) {
      console.log('in joining room in SERVER');
      socket.join(data.room);
      console.log(data);
      socket.broadcast.to(data.room).emit('load users and code');
      socket.broadcast.to(data.room).emit('new user join', data.user);
    });

    socket.on('leave room', function(data) {
      socket.broadcast.to(data.room).emit('user left room', {user: data.user});
      socket.leave(data.room);
    });

    socket.on('coding event', function(data) {
      console.log('in EXPRESS coding event');
      console.log(data);
      socket.broadcast.to(data.room).emit('receive code', {code: data.code, currentlyTyping: data.currentlyTyping});
    });
    socket.on('change mode', function(data) {
      socket.broadcast.to(data.room).emit('receive change mode', data.mode);
    });

    socket.on('send users and code', function(data) {
      socket.broadcast.to(data.room).emit('receive users and code', data);
    });
  });
}
