import http from 'http';
import express from 'express';
// import socketIO from 'socket.io';

const port = process.env.PORT || 8082

const app = express();
// const server = http.Server(app);
// const io = socketIO(server);

app.use(express.static('public'));
app.listen(port, () => {
  console.info(`Redux Server is listening on port ${port}.`);
});