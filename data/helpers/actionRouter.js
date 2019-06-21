const express = require('express');

const Action = require('./actionModel');

const router = express.Router();

// ======== GET =============

router.get('/', async (req, res) => {
    try {

    } catch(error) {
        console.log(error);
        res.status(500).json({
            message: 'Internal error. Cannot retrieve data.'
        })
    }
});

router.get('/:id', async (req, res) => {
    try {

    } catch(error) {
        console.log(error);
        res.status(500).json({
            message: 'Internal error. Cannot retrieve data.'
        })
    }
});

// ======= POST ============

router.post('/', async (req, res) => {
    try {

    } catch(error) {
        console.log(error);
        res.status(500).json({
            message: 'Internal error. Cannot retrieve data.'
        })
    }
});

router.post('/:id', async (req, res) => {
    try {

    } catch(error) {
        console.log(error);
        res.status(500).json({
            message: 'Internal error. Cannot retrieve data.'
        })
    }
});

module.exports = actionRouter;