const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const userCtrl = require('../../controllers/backend/user');
const auth = require('../../middleware/auth');


router.get('/',  userCtrl.getAllUser);
router.put('/:id',  userCtrl.modifyUser);
router.put('/pswd/:id',  userCtrl.modifyPassword );
router.get('/deleteAccount/del',  userCtrl.deleteUser );
router.get('/user/:id', userCtrl.getOneUser);
router.get('/updateTeamUser/:id', userCtrl.updateTeamUser);





module.exports = router;