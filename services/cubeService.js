const Cube = require('../models/Cube.js')
const Accessory = require('../models/Accessory.js')

function create(cubeData) {
    let cube = new Cube(cubeData)
    return cube.save()
}

function getAll() {
    return Cube.find().lean();
}

function getOne(id) {
    return Cube.findById(id).populate('accessories').lean()
}

const search = async (text, from, to) => {
    let result = await getAll();

    if(text){
        result = result.filter(x => x.name.toLowerCase().includes(text.toLowerCase()))
    }

    if(from){
        result = result.filter(x => x.difficultyLevel >= from)
    }

    if(to){
        result = result.filter(x => x.difficultyLevel <= to)
    }
    return result
}

async function attachAccessory(cubeId, accessoryId){
    let cube = await Cube.findById(cubeId)
    let accessory = await Accessory.findById(accessoryId)
    cube.accessories.push(accessory)
    return cube.save()
}

module.exports = {
    create,
    getAll,
    getOne,
    attachAccessory,
    search
}