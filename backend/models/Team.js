const mongoose = require('mongoose');

const teamSchema = mongoose.Schema({
  name: { type: String},
  point: { type: Number },
  victory:{ type: Number},
  lost:{type: Number},
  tournament : {type: String},
  index : {type: Number}
});

module.exports = mongoose.model('Team', teamSchema);