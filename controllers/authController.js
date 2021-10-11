const router = require('express').Router();
const authService = require('../services/authService.js')


const renderRegister = (req, res) => {
    res.render('register')
}

const register = (req, res) => {
    if(req.body.password == req.body.repeatPassword){
        authService.createUser(req.body.username, req.body.password)
    }
    res.redirect('/login')
}

const renderLogin = (req, res) => {
    res.render('login')
}

const login = (req, res) => {

}

const logout = (req, res) => {

}

router.get('/login', renderLogin);
router.post('/login', login);

router.get('/register', renderRegister);
router.post('/register', register)



module.exports = router;