const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
global.fetch = require('node-fetch');


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

        res.render('pages/changePasswordPage', {page: 'Edit pswd', menuId:'Home', userInfo});
    } catch {
        res.status(401).json({error: 'Unauthenticated Request'});
    }
};