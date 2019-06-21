const express = require('express');

const Proj = require('./projectModel');
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
        if(projs) {
          res.status(200).json(projs);
        } else {
            res.status(404).json({
                message: 'This project could not be found. Please try again.'
            })
        }
    } catch(error) {
        console.log(error);
        res.status(500).json({
            message: 'Internal error. Cannot retrieve data'
        })
    }
});

//============ POST ================

router.post('/', async (req, res) => {
    try {
        const projs = await Proj.insert(req.body);
        res.status(201).json(projs);
    } catch(error) {
        console.log(error);
        res.status(500).json({
            message: 'Internal error. Cannot add data'
        })
    }
});

router.post('/:id', async (req, res) => {
    try {
        const projs = await Proj.insert(req.body);
        if(projs) {
          res.status(201).json(projs);
        } else {
            res.status(404).json({
                message: 'This project could not be found. Please try again.'
            })
        }
    } catch(error) {
        console.log(error);
        res.status(500).json({
            message: 'Internal error. Cannot add data'
        })
    }
});

// ========= PUT ===============

router.put('/', async (req, res) => {
    try {
        const projs = await Proj.update(req.params.id);
        res.status(200).json(projs);
    } catch(error) {
        console.log(error);
        res.status(500).json({
            message: 'Internal error. Cannot update data'
        })
    }
});

router.put('/:id', async (req, res) => {
    try {
        const projs = await Proj.update(req.params.id);
        if(projs) {
          res.status(200).json(projs);
        } else {
            res.status(404).json({
                message: 'This project could not be found. Please try again.'
            })
        }
    } catch(error) {
        console.log(error);
        res.status(500).json({
            message: 'Internal error. Cannot update data'
        })
    }
});

//========== DELETE ============

router.delete('/:id', async (req, res) => {
    try {
        const delId = await Proj.remove(req.params.id);
        if(delId <= 0) {
          res.status(200).json(projs);
        } else {
            res.status(404).json({
                message: 'This project could not be found. Please try again.'
            })
        }
    } catch(error) {
        console.log(error);
        res.status(500).json({
            message: 'Internal error. Cannot remove data'
        })
    }
});

module.exports = router;