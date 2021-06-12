const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = 3000;

require('dotenv').config();


app.use(express.static(__dirname + '/../public'));
app.use(express.json());

io.on('connection', () => {

});

server.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
})
