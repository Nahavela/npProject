const express = require('express');
const router = express.Router();
const pageCtrl = require('../../controllers/frontend/frontend');
const pageCtrl2 = require('../../controllers/frontend/getChangePassword');
const pageCtrl3 = require('../../controllers/frontend/getEditProfile');
const pageCtrl4 = require('../../controllers/frontend/getHome');
const pageCtrl5 = require('../../controllers/frontend/getTournamentInfo');
const pageCtrl6 = require('../../controllers/frontend/getSchedule');
const pageCtrl7 = require('../../controllers/frontend/getNow');
const pageCtrl8 = require('../../controllers/frontend/getRanking');

const auth = require('../../middleware/auth');
const admin = require('../../middleware/admin');



router.get('/index', pageCtrl.getIndex);
router.get('/login', pageCtrl.getLogin);
router.get('/myaccount', auth, pageCtrl.getMyAccount);
router.get('/logout', auth, pageCtrl.getLogout);
router.get('/addtournament', admin, pageCtrl.getAddTournament);


router.get('/register', pageCtrl.getRegister);
router.get('/joinTeam', pageCtrl.getJoinTeam);


router.get('/changePasswordPage', pageCtrl2.getEditPswd);
router.get('/editProfilePage', pageCtrl3.getEditProfile);
router.get('/home', pageCtrl4.getHome);
router.get('/', pageCtrl4.getHome);
router.get('/info/:id', pageCtrl5.getTournamentInfo);
router.get('/schedule/:id', pageCtrl6.getSchedule);
router.get('/now/:id', pageCtrl7.getNow);
router.get('/nowPlaying/:id', pageCtrl7.getNowPlaying);
router.get('/ranking/:id', pageCtrl8.getRanking);

module.exports = router;