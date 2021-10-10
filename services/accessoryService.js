const Accessory = require('../models/Accessory.js')

function create(accessoryData) {
    let accessory = new Accessory(accessoryData)
    return accessory.save()
}

function getAll() {
    return Accessory.find().lean();
}

function getOne(id) {
    return Accessory.findById(id).lean()
}

function getAllWithout(accessoryIds){
    return Accessory.find().where('_id').nin(accessoryIds).lean()
}

module.exports = {
    create,
    getAll,
    getOne,
    getAllWithout
}