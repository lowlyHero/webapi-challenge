const express = require('express');

const Action = require('./actionModel');

const router = express.Router();

// ======== GET =============

router.get('/', async (req, res) => {
    try {
        const action = await Action.get();
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
        const action = await Action.get(req.params.id);
        if(action) {
            res.status(200).json(action)
        } else {
            res.status(404).json({
                message: 'Action not found. Please try again.'
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
        const action = await Action.insert(req.body);
        res.status(201).json(action);
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
        const action = await Action.update(req.params.id, req.body);
        if(action) {
            res.status(200).json(action);
        } else {
            res.status(404).json({
                message: 'Unable to update action. Please try again.'
            })
        }
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
        const delAction = await Action.remove(req.params.id);
        if(delAction <= 0) {
            res.status(200).json({
                message: 'Successfully deleted action.'
            })
        } else {
            res.status(404).json({
                message: 'Action not found. Please try again.'
            })
        }
    } catch(error) {
        console.log(error);
        res.status(500).json({
            message: 'Internal error. Cannot remove data.'
        })
    }
});

module.exports = router;