const router = require('express').Router();
const cookieParser = require('cookie-parser');
const authService = require('../services/authService.js')
const { TOKEN_COOKIE_NAME } = require('../config/constants.js')
const { isAuth } = require('../middlewares/authMiddleware.js')


const renderRegister = (req, res) => {
    res.render('register')
}

const register = (req, res) => {
    if (req.body.password == req.body.repeatPassword) {
        authService.registerUser(req.body.username, req.body.password)
    }
    res.redirect('/login')
}

const renderLogin = (req, res) => {
    res.render('login')
}

const login = async (req, res) => {
    const { username, password } = req.body;

    let token = await authService.loginUser(username, password);

    res.cookie(TOKEN_COOKIE_NAME, token, {
        httpOnly: true,
    })

    res.redirect('/')
}

const logout = (req, res) => {
    res.clearCookie(TOKEN_COOKIE_NAME)
    res.redirect('/login')
}

router.use(cookieParser())
router.get('/logout', isAuth, logout);

router.get('/login', renderLogin);
router.post('/login', login);

router.get('/register', renderRegister);
router.post('/register', register)



module.exports = router;