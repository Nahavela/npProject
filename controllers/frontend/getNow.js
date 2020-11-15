const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
global.fetch = require('node-fetch');
const Tournament = require('../../models/Tournament');


exports.getNow = async (req, res, next) => {

    try {
    const token = req.cookies['token'];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const userId = decodedToken.userId;
    let url = `https://npprojectnahavela.herokuapp.com/api/user/user/${userId}`;
    myInit = {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    };
    let userInfo = await fetch(url, myInit);
    userInfo = await userInfo.json();
    

    let urlTournament = `https://npprojectnahavela.herokuapp.com/api/tournament/${req.params.id}`;
    let tournament = await fetch(urlTournament, myInit);
    tournament = await tournament.json();

    let urlScore = `https://npprojectnahavela.herokuapp.com/api/score/${req.params.id}`;
    let score = await fetch(urlScore, myInit);
    score = await score.json();



    res.render(`pages/now`, {menuId:'Now', userInfo, tournament, score})

} catch {

    res.status(401).json({error: 'Bad Request'});
}


    
};

exports.getNowPlaying = async (req, res, next) => {

    try {
    const token = req.cookies['token'];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const userId = decodedToken.userId;
    let url = `https://npprojectnahavela.herokuapp.com/api/user/user/${userId}`;
    myInit = {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    };
    let userInfo = await fetch(url, myInit);
    userInfo = await userInfo.json();
    

    let urlTournament = `https://npprojectnahavela.herokuapp.com/api/tournament/${req.params.id}`;
    let tournament = await fetch(urlTournament, myInit);
    tournament = await tournament.json();

    let urlScore = `https://npprojectnahavela.herokuapp.com/api/score/${req.params.id}/`;
    let score = await fetch(urlScore, myInit);
    score = await score.json();
    i = req.query.i;
    k = req.query.k;
    num0 = req.query.num0;
    num1 = req.query.num1;
    let urlteam0 = `https://npprojectnahavela.herokuapp.com/api/team/${req.params.id}/${req.query.num0}`;
    let team0 = await fetch(urlteam0, myInit);
    team0 = await team0.json();
    let urlteam1 = `https://npprojectnahavela.herokuapp.com/api/team/${req.params.id}/${req.query.num1}`;
    let team1 = await fetch(urlteam1, myInit);
    team1 = await team1.json();



    res.render(`pages/nowPlaying`, {menuId:'Now Playing', userInfo, tournament, score, i, k, num0, num1, team0, team1})

} catch {

    res.status(401).json({error: 'Bad Request'});
}


    
};