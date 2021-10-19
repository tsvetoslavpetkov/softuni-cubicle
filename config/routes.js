const indexController = require('../controllers/indexController.js')
const createController = require('../controllers/createController.js')
const attachController = require('../controllers/attachController.js')
const editController = require('../controllers/editController.js')
const deleteController = require('../controllers/deleteController.js')
const {auth, isAuth} = require('../middlewares/authMiddleware.js')

module.exports = (app) => {
    app.use(auth);
    app.use('/', indexController);
    app.use('/attach', isAuth, attachController);
    app.use('/create', isAuth, createController);
    app.use('/delete', isAuth, deleteController);
    app.use('/edit', isAuth, editController);
    app.get('/*', (req, res) => {
        res.render('404')
    })
};