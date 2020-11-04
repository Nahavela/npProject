const mongoose = require('mongoose');

const tournamentSchema = mongoose.Schema({
  name: { type: String, required: true },
  address: { 
    address:{type: String, required: true},
    city:{type: String, required: true},
    code:{type: Number, required: true},
  },
  group : { type: Object },
  team: { type: Array, required: true },
  date: { type: String, required: true },
  numberOfTour: { type: Number, required: true },
  numberOfTeam: { type: Number, required: true },
  numberOfGroup: { type: Number, required: true },
  numberOfPoint: { type: Number },
  timeBetweenMatch: { type: Number, required: true },
  timeOfMatch: { type: Number, required: true },
});

module.exports = mongoose.model('Tournament', tournamentSchema);