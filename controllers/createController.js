const router = require('express').Router();
const auth = require('../middlewares/authMiddleware.js')

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

router.get('/cube', auth, renderCreateCube);
router.post('/cube', auth, createCube)
router.get('/accessory',auth, renderCreateAccessory);
router.post('/accessory',auth, createAccessory)

module.exports = router;
