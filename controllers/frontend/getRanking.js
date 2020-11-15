const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
global.fetch = require('node-fetch');
const Tournament = require('../../models/Tournament');


exports.getRanking = async (req, res, next) => {

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
    

    let urlTournament = `http://localhost:3000/api/tournament/${req.params.id}`;
    let tournament = await fetch(urlTournament, myInit);
    tournament = await tournament.json();

    let urlTeam = `http://localhost:3000/api/team/${req.params.id}`;
    let team = await fetch(urlTeam, myInit);
    team = await team.json();
  
  


    res.render(`pages/ranking`, { menuId:'Ranking', userInfo, tournament, team})

} catch {

    res.status(401).json({error: 'Bad Request'});
}


    
};