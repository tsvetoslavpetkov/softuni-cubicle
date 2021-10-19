const router = require('express').Router();
const authController = require('./authController.js');
const cubeService = require('../services/cubeService.js')


const renderHome = async (req, res) => {
    const cubes = await cubeService.getAll()
    res.render('index', { cubes })
}

const search = async (req, res) => {
    let text = req.query.text;
    let from = req.query.from;
    let to = req.query.to;

    const cubes = await cubeService.search(text, from, to)
    res.render('index', { cubes })
}

const renderDetails = async (req, res) => {
    const cube = await cubeService.getOne(req.params.id)
    const accessories = cube.accessories;
    res.render('details', {cube, accessories})
}

const renderAbout = (req, res) => { res.render('about') }

router.get('/', renderHome)
router.use(authController);
router.get('/about', renderAbout)
router.get('/details/:id', renderDetails)
router.get('/search', search)

module.exports = router;
