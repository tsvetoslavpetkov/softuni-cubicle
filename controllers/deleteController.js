const router = require('express').Router();
const cubeService = require('../services/cubeService.js')

const renderDelete = async (req, res) => {
    let cube = await cubeService.getOne(req.params.id);
    res.render('delete', {cube})
}

const deleteCube = async (req, res) => {
    await cubeService.deleteOne(req.params.id)
    res.redirect(`/`)
}

router.get('/:id', renderDelete)
router.post('/:id', deleteCube)

module.exports = router;