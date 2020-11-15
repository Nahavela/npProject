const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
global.fetch = require('node-fetch');
const Tournament = require('../../models/Tournament');


exports.getSchedule = async (req, res, next) => {

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

   


    res.render(`pages/schedule`, {menuId:'Schedule', userInfo, tournament, score})

} catch {

    res.status(401).json({error: 'Bad Request'});
}


    
};