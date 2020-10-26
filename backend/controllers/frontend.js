const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
global.fetch = require('node-fetch');





exports.getHome = (req, res) => {res.render('pages/home', {menuId:'Tournament'})};
exports.getIndex = (req, res) => {res.render('pages/index', {menuId:'Home'})};
exports.getInfo = (req, res) => {res.render('pages/info', {menuId:'Info'})};
exports.getJoinTeam = (req, res) => {res.render('pages/joinTeam', {page: 'Services', menuId:'Join team'})};
exports.getLogin = (req, res) => {res.render('pages/login')};
exports.getMyAccount = (req, res) => {res.render('pages/myaccount', {menuId:'My account'})};
exports.getAddTournament = (req, res) => {res.render('pages/addtournament', {menuId:'Add'})};

exports.getNow = (req, res) => {res.render('pages/now', {menuId:'Now'})};
exports.getRanking = (req, res) => {res.render('pages/ranking', {menuId:'Ranking'})};
exports.getRegister = (req, res) => { res.render('pages/register')};
exports.getLogout = (req, res) => { res.clearCookie('token'); res.redirect('/index'); };
exports.getSchedule = (req, res) => {res.render('pages/schedule', {menuId:'Schedule'})};


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