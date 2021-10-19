const router = require('express').Router();
const cubeService = require('../services/cubeService.js')
const accessoryService = require('../services/accessoryService.js')

const renderEdit = async (req, res) => {
    let cube = await cubeService.getOne(req.params.id);
    let accessories = await accessoryService.getAllWithout(cube.accessories.map(x => x._id))
    res.render('edit', {cube, accessories})
}

const editCube = async (req, res) => {
    await cubeService.attachAccessory(req.params.id, req.body.accessory)
    res.redirect(`../details/${req.params.id}`)
}

router.get('/:id', renderEdit)
router.post('/:id', editCube)

module.exports = router;