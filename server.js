const express = require('express');
const logger = require('morgan');

const server = express();

server.use(express.json());
server.use(logger('dev'));

server.get('/', (req, res) =>
  res.status(200).json({
    status: 200,
    message: 'Welcome Chief. Use this API like it is yours.',
  }),
);

module.exports = server;
