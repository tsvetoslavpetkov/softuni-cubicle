const router = require('express').Router();

const renderRegister = (req, res) => {

}

const renderLogin = (req, res) => {
    res.render('login')
}

const logout = (req, res) => {

}

router.get('/login', renderLogin);
router.get('/register', renderRegister);



module.exports = router;