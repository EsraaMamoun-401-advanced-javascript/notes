'use strict';

const mongoose = require('mongoose');

const notes = mongoose.Schema({
  text: { type: String, required: true },
  category: { type: String, required: true },
});

const theModel = mongoose.model('notes', notes);

module.exports = theModel;