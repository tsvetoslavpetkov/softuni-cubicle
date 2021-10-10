const env = process.env.NODE_ENV || 'development';

const config = require('./config/config')[env];
const app = require('express')();
const initdb = require('./database.js');

require('./config/express')(app);
require('./config/routes')(app);

//if success db init, then start app
initdb()
    .then(() => {
        app.listen(config.port, console.log(`Listening on port ${config.port}! Now its up to you...`))
    })
    .catch(err => console.log(err))