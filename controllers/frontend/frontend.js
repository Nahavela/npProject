const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
global.fetch = require('node-fetch');






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



