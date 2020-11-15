const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  try {
    const token = req.cookies['token'];
    //const token = req.headers.cookie.split('=')[1];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw 'Invalid user ID';
    } else {

      
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
      if (userInfo.status=="admin"){
       next();
      }else { return res.status(401).json({error: 'You must be admin to acces this page !!'});}
    }
  } catch {

    return res.status(401).json({error: 'You must be logged in to acces this page !!'});
  }

};

