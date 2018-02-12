import express from 'express';
import webpack from 'webpack';

const port = process.env.PORT || 8082;
const app = express();

const webpackConfig = require('../webpack.config.js');
const compiler = webpack(webpackConfig);
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));
app.use(require("webpack-hot-middleware")(compiler));

app.use(express.static('public'));

const server = require('http').Server(app);
const io = require('socket.io')(server);
const connectedClients = {};

io.on('connection', function (socket) {
  console.log('new client connected');

  socket.on('userId', (userId) => {
    if (connectedClients[userId]) {
      connectedClients[userId].push(socket);
    } else {
      connectedClients[userId] = [socket];
    }
    socket.on('disconnect', () => {
      connectedClients[userId] = connectedClients[userId].filter(s => s.id !== socket.id);
    });
  });

  socket.on('ITEM_QUANTITY_CHANGED', (socketId, userId) => {
    connectedClients[userId] && connectedClients[userId].forEach(socket => {
      socket.emit('ITEM_QUANTITY_CHANGED', socketId);
    }); 
  });

  let supportAvailable = false;
  setInterval(()=>{
    supportAvailable = !supportAvailable;
    socket.emit(supportAvailable ? `SUPPORT_AVAILABLE` : `SUPPORT_NOT_AVAILABLE`);
  },30000);
});

server.listen(port, () => {
  console.info(`Redux Server is listening on port ${port}.`);
});