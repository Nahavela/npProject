const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
global.fetch = require('node-fetch');
const Tournament = require('../../models/Tournament');


exports.getHome = async (req, res, next) => {
/*
    try {

        
       
        let url = `http://localhost:3000/api/tournament/5f9a8654a1f38eba28b3cff5`;
        let tournamentInfo = await fetch(url);
        tournamentInfo = await tournamentInfo.json();
        
        res.render('pages/home', {page: 'Edit profile', menuId:'Home', tournamentInfo});
    } catch {
        res.status(401).json({error: 'Unauthenticated Request'});
    }*/
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

    Tournament.find()
    .then((Tournaments) => res.render('pages/home', {page: 'Edit profile', menuId:'Home', Tournaments, userInfo}))
    .catch((error) => res.status(400).json({ error }));

} catch {
    res.status(401).json({error: 'Unauthenticated Request'});
}


    
};