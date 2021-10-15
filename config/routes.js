const indexController = require('../controllers/indexController.js')
const createController = require('../controllers/createController.js')
const attachController = require('../controllers/attachController.js')
const auth = require('../middlewares/authMiddleware.js')
const cookieParser = require('cookie-parser')



module.exports = (app) => {
    app.use(cookieParser())
    app.use(auth);
    app.use('/', indexController);
    app.use('/attach', attachController);
    app.use('/create', createController);
    app.get('/*', (req, res) => {
        res.render('404')
    })
};