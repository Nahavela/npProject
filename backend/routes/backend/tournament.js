const express = require('express');
const router = express.Router();
const tournamentCtrl = require('../../controllers/backend/tournament');
const auth = require('../../middleware/auth');



router.post('/addTournament', auth, tournamentCtrl.createTournament);
router.get('/', auth, tournamentCtrl.getAllStuff);
router.get('/:id', auth, tournamentCtrl.getOneTournament);
router.put('/:id', auth, tournamentCtrl.modifyTournament );
router.get('/delete/:id', auth, tournamentCtrl.deleteTournament );

module.exports = router;
