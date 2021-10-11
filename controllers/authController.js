const router = require('express').Router();

const renderRegister = (req, res) => {
    res.render('register')
}

const register = (req, res) => {

}

const renderLogin = (req, res) => {
    res.render('login')
}

const login = (req, res) => {

}

const logout = (req, res) => {

}

router.get('/login', renderLogin);
router.get('/register', renderRegister);



module.exports = router;