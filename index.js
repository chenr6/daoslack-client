var socket = require('socket.io-client')('http://192.168.59.103:32769');
var faker = require('faker');
var username = faker.name.findName();

socket.emit('add user', username);
var interval = setInterval(function() {
  socket.emit('new message', 'I am ' + username);
}, 1000);
