#!/usr/bin/env node
'use strict';

require('dotenv').config();

const mongoose = require('mongoose');
const DB_URI = process.env.MONGODB_URI;

mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

let myInput = new Input();
new Notes(myInput.theNote);