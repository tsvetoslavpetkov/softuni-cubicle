const router = require('express').Router();
const cubeService = require('../services/cubeService.js')

const renderEdit = async (req, res) => {
    let cube = await cubeService.getOne(req.params.id);
    res.render('edit', {cube})
}

const editCube = async (req, res) => {
    await cubeService.editOne(req.params.id, req.body)
    res.redirect(`../details/${req.params.id}`)
}

router.get('/:id', renderEdit)
router.post('/:id', editCube)

module.exports = router;