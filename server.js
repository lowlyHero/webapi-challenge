const express = require('express'); 
const helmet = require('helmet');
const logger = require('morgan');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(logger('dev'));

server.get('/', (req,res) => {
    res.send('<h1>Sanity Check from an insane person</h1>');
});

module.exports = server;