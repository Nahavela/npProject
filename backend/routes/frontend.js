const express = require('express');
const router = express.Router();
const pageCtrl = require('../controllers/frontend');
const auth = require('../middleware/auth');

router.get('/home', pageCtrl.getHome);
router.get('/', pageCtrl.getHome);
router.get('/index', pageCtrl.getIndex);
router.get('/info', pageCtrl.getInfo);
router.get('/login', pageCtrl.getLogin);
router.get('/myaccount', auth, pageCtrl.getMyAccount);
router.get('/logout', auth, pageCtrl.getLogout);
router.get('/addtournament', pageCtrl.getAddTournament);

router.get('/now', pageCtrl.getNow);
router.get('/ranking', pageCtrl.getRanking);
router.get('/register', pageCtrl.getRegister);
router.get('/joinTeam', pageCtrl.getJoinTeam);
router.get('/schedule', pageCtrl.getSchedule);


module.exports = router;