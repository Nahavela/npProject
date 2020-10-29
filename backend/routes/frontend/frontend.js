const express = require('express');
const router = express.Router();
const pageCtrl = require('../../controllers/frontend/frontend');
const pageCtrl2 = require('../../controllers/frontend/getChangePassword');
const pageCtrl3 = require('../../controllers/frontend/getEditProfile');
const pageCtrl4 = require('../../controllers/frontend/getHome');

const auth = require('../../middleware/auth');
const admin = require('../../middleware/admin');



router.get('/index', pageCtrl.getIndex);
router.get('/info', pageCtrl.getInfo);
router.get('/login', pageCtrl.getLogin);
router.get('/myaccount', auth, pageCtrl.getMyAccount);
router.get('/logout', auth, pageCtrl.getLogout);
router.get('/addtournament', admin, pageCtrl.getAddTournament);

router.get('/now', pageCtrl.getNow);
router.get('/ranking', pageCtrl.getRanking);
router.get('/register', pageCtrl.getRegister);
router.get('/joinTeam', pageCtrl.getJoinTeam);
router.get('/schedule', pageCtrl.getSchedule);

router.get('/changePasswordPage', pageCtrl2.getEditPswd);
router.get('/editProfilePage', pageCtrl3.getEditProfile);
router.get('/home', pageCtrl4.getHome);
router.get('/', pageCtrl4.getHome);

module.exports = router;