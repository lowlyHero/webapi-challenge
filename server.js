const express = require('express'); 
const helmet = require('helmet');
const logger = require('morgan');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(logger('dev'));

server.get('/', (req,res) => {
    res.send('<h1>Sanity Check</h1>');
})

module.exports = server;