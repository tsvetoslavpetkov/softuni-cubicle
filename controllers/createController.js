const router = require('express').Router();
const cubeService = require('../services/cubeService.js')
const accessoryService = require('../services/accessoryService.js')

const renderCreateCube = (req, res) => {
    res.render('create/cube')
};

const createCube = (req, res) => {
    cubeService.create(req.body)
    res.redirect('/')
};

const renderCreateAccessory = (req, res) => {
    res.render('create/accessory')
};

const createAccessory = (req, res) => {
    accessoryService.create(req.body)
    res.redirect('/')
};

router.get('/cube', renderCreateCube);
router.post('/cube', createCube)
router.get('/accessory', renderCreateAccessory);
router.post('/accessory', createAccessory)

module.exports = router;
