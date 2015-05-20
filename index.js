var server = process.env.SOCKET || 'http://127.0.0.1:3000';
var socket = require('socket.io-client')(server);
var faker = require('faker');
var username = faker.name.findName();

socket.emit('add user', username);
var interval = setInterval(function() {
  socket.emit('new message', 'I am ' + username);
}, 1000);
