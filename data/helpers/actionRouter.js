const express = require('express');

const Action = require('./actionModel');

const router = express.Router();

// ======== GET =============

router.get('/', async (req, res) => {
    try {
        const action = await Actions.get();
        res.status(200).json(action);
    } catch(error) {
        console.log(error);
        res.status(500).json({
            message: 'Internal error. Cannot retrieve data.'
        })
    }
});

router.get('/:id', async (req, res) => {
    try {
        const action = await Actions.get(req.params.id);
        if(action) {
            res.status(200).json(action)
        } else {
            res.status(404).json({
                message: 'Could not find action. Please try again.'
            })
        }
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
            message: 'Internal error. Cannot add data.'
        })
    }
});

router.post('/:id', async (req, res) => {
    try {

    } catch(error) {
        console.log(error);
        res.status(500).json({
            message: 'Internal error. Cannot add data.'
        })
    }
});

// ======== PUT ===============

router.put('/:id', async (req, res) => {
    try {

    } catch(error) {
        console.log(error);
        res.status(500).json({
            message: 'Internal error. Cannot update data.'
        })
    }
});

// ========= DELETE =============

router.delete('/:id', async (req, res) => {
    try {

    } catch(error) {
        console.log(error);
        res.status(500).json({
            message: 'Internal error. Cannot remove data.'
        })
    }
});

module.exports = actionRouter;