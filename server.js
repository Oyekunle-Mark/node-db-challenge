const express = require('express');
const logger = require('morgan');

const server = express();
const projectRouter = require('./router/project');
const actionRouter = require('./router/action');

server.use(express.json());
server.use(logger('dev'));

server.get('/', (req, res) =>
  res.status(200).json({
    status: 200,
    message: 'Welcome Chief. Use this API like it is yours.',
  }),
);

server.use('/api/projects', projectRouter);
server.use('/api/actions', actionRouter);

module.exports = server;
