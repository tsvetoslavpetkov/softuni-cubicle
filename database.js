const mongoose = require('mongoose')

const connectionString = 'mongodb://localhost:27017/cubes';

 function initDatabase () {
    return mongoose.connect(connectionString)
}

module.exports = initDatabase;