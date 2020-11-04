const express = require('express');
const router = express.Router();
const tournamentCtrl = require('../../controllers/backend/tournament');
const auth = require('../../middleware/auth');



router.post('/addTournament',  tournamentCtrl.createTournament);
router.get('/', tournamentCtrl.getAllStuff);
router.get('/:id',  tournamentCtrl.getOneTournament);
router.put('/:id', tournamentCtrl.modifyTournament );
router.get('/delete/:id',  tournamentCtrl.deleteTournament );

module.exports = router;
