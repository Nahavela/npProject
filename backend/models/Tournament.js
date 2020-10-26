const mongoose = require('mongoose');

const tournamentSchema = mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  team: { type: String, required: true },
  date: { type: String, required: true },
  numberOfTour: { type: Number, required: true },
  numberOfTeam: { type: Number, required: true },
  numberOfGroup: { type: Number, required: true },
  numberOfPoint: { type: Number },
  timeBetweenMatch: { type: Number, required: true },
  timeOfMatch: { type: Number, required: true },
});

module.exports = mongoose.model('Tournament', tournamentSchema);