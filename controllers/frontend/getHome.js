const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
global.fetch = require('node-fetch');
const Tournament = require('../../models/Tournament');


exports.getHome = async (req, res, next) => {

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
    

    let urlTournaments = `https://npprojectnahavela.herokuapp.com/api/tournament/`;
    let tournaments = await fetch(urlTournaments, myInit);
    tournaments = await tournaments.json();


    res.render('pages/home', {page: 'Edit profile', menuId:'Home', userInfo, tournaments})

} catch {

    res.status(401).json({error: 'Bad Request'});
}


    
};