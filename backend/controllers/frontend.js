const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
global.fetch = require('node-fetch');





exports.getHome = (req, res) => {res.render('pages/home', {menuId:'Home'})};
exports.getIndex = (req, res) => {res.render('pages/index', {menuId:'Home'})};
exports.getInfo = (req, res) => {res.render('pages/info', {page:'ABOUT US', menuId:'About Us'})};
exports.getJoinTeam = (req, res) => {res.render('pages/joinTeam', {page: 'Services', menuId:'Gallery'})};
exports.getLogin = (req, res) => {res.render('pages/login', {page: 'Contact Us', menuId:'Contact Us'})};
exports.getMyAccount = (req, res) => {res.render('pages/myaccount', {page: 'My account', menuId:'Shop'})};

exports.getNow = (req, res) => {res.render('pages/now', {page: 'SignUp', menuId:'Home'})};
exports.getRanking = (req, res) => {res.render('pages/ranking', {page: 'Login', menuId:'Home'})};
exports.getRegister = (req, res) => { res.render('pages/register', {page: 'Login', menuId:'Home'})};
exports.getRegister = (req, res) => { res.clearCookie('token'); res.redirect('/'); };
exports.getSchedule = (req, res) => {res.render('pages/schedule', {page: 'Cart', menuId:'Shop'})};


exports.userInfoPage = async (req, res, next) => {
    try {
        //const token = req.headers.cookie.split('=')[1];
        const token = req.cookies['token'];
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        const userId = decodedToken.userId;
        let url = `http://localhost:3000/api/user/user/${userId}`;

        myInit = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        };

        let userInfo = await fetch(url, myInit);
        userInfo = await userInfo.json();
        res.render('pages/userinfo',  {page: 'Info User', menuId:'Home', userInfo});
    } catch {

        res.status(401).json({error: 'Unauthenticated Request'});
    }
};

exports.getEditUser = async (req, res, next) => {
    try {
        const token = req.cookies['token'];
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        const userId = decodedToken.userId;
        let url = `http://localhost:3000/api/user/user/${userId}`;

        myInit = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        };

        let userInfo = await fetch(url, myInit);
        userInfo = await userInfo.json();

        res.render('pages/edit-user', {page: 'Edit info', menuId:'Home', userInfo});
    } catch {
        res.status(401).json({error: 'Unauthenticated Request'});
    }
};

exports.getEditPswd = async (req, res, next) => {
    try {
        const token = req.cookies['token'];
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        const userId = decodedToken.userId;
        let url = `http://localhost:3000/api/user/user/${userId}`;

        myInit = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        };

        let userInfo = await fetch(url, myInit);
        userInfo = await userInfo.json();

        res.render('pages/edit-pswd', {page: 'Edit pswd', menuId:'Home', userInfo});
    } catch {
        res.status(401).json({error: 'Unauthenticated Request'});
    }
};