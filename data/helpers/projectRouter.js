const express = require('express');

const Proj = require('./projectModel');
const Actions = require('./actionModel');
const router = express.Router();

// ============ GET ================

router.get('/', async (req, res) => {
    try {
        const projs = await Proj.get(req.params.id);
        res.status(200).json(projs);
    } catch(error) {
        console.log(error);
        res.status(500).json({
            message: 'Internal error. Cannot retrieve data'
        })
    }
});

router.get('/:id', async (req, res) => {
    try {
        const projs = await Proj.getProjectActions(req.params.id);
        res.status(200).json(projs);
    } catch(error) {
        console.log(error);
        res.status(500).json({
            message: 'There was an error retrieving the data.'
        })
    }
});

//============ POST ================

module.exports = projectRouter;