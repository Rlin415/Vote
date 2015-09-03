'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PollSchema = new Schema({
  title: String,
  choices: Array,
  userId: String,
  user: String,
  voted: Array,
  created: Number,
  active: Boolean
});

module.exports = mongoose.model('Poll', PollSchema);
