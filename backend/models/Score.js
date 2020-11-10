const mongoose = require('mongoose');

const scoreSchema = mongoose.Schema({
  group: { type: Object},
  team: { type: Object },
  schedule:{ type: Array},
  match:{type: Array}
});

module.exports = mongoose.model('Score', scoreSchema);