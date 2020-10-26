const mongoose = require('mongoose');

const teamSchema = mongoose.Schema({
  name: { type: String, required: true },
  level: { type: String, required: true },
  player: { type: String },
  group: { type: String, required: true },
  tournament: { type: String, required: true },
  point: { type: Number },
  winningMatch: { type: Number }
});

module.exports = mongoose.model('Team', teamSchema);