var server = process.env.SOCKET || 'http://192.168.59.103:3000';
var socket = require('socket.io-client')(server);
var faker = require('faker');
var child_process = require('child_process');

var username = faker.name.findName();

child_process.exec(process.env.POST_SCRIPT, function(err, stdout, stderr) {
  console.log(stdout);
});

socket.emit('add user', username);
var interval = setInterval(function() {
  socket.emit('new message', 'I am ' + username);
}, 1000);
