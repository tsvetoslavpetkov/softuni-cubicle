const router = require('express').Router();
const authService = require('../services/authService.js')


const renderRegister = (req, res) => {
    res.render('register')
}

const register = (req, res) => {
    if (req.body.password == req.body.repeatPassword) {
        authService.createUser(req.body.username, req.body.password)
    }
    res.redirect('/login')
}

const renderLogin = (req, res) => {
    res.render('login')
}

const login = async (req, res) => {
    let token = await authService.loginUser(req.body.username, req.body.password);
    console.log(token);
    if(token){
        res.cookie('cubicle_auth_token', token)
        res.redirect('/')
    }
}

const logout = (req, res) => {

}

router.get('/login', renderLogin);
router.post('/login', login);

router.get('/register', renderRegister);
router.post('/register', register)



module.exports = router;