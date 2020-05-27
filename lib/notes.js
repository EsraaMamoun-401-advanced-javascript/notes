'use strict';

const mongoose = require('mongoose');
// const Notes_Schema = require('./model/notes-schema');
const Note_Collection = require('./model/notes-collection');
const newNote_Collection = new Note_Collection();

class Note {

  /**
 * Represents note.
 * @constructor
 * @param {object} - {action, payload, category}
 */

  constructor(note) {
    if (note && note.action) {
      this.execute(note);
    } else {
      console.error(`Are you sure you write the action correctly?
    Try: 
    --list <category name> OR -l <category name>
    --add <text note> --category <category name> OR -a <text note> -c
    --update <id> --new <new text> OR -u <id> -n <new text>
    --delete <id note> OR -d <id note>`);
      mongoose.disconnect();
    }
  }

  /**
 * ececute many functions
 * @function
 * @param {Object} note - {action, payload, category}
 */

  execute(note) {
    switch (note.action) {
    case 'add':
    case 'a':
      if (!note.payload) {
        console.error('Error: You have to specify the payload...');
        return;
      }
      newNote_Collection.create(note.payload, note.category);
      break;
    case 'list':
    case 'l':
      if (!note.action === 'list' || !note.action === 'l') {
        console.error(`Are you sure you write the action correctly?
        Try l or list to get what you need...`);
        return;
      }
      newNote_Collection.get(note.payload);
      break;
    case 'delete':
    case 'd':
      if (!note.payload) {
        console.error('Error: You have to specify the payload...');
        return;
      }
      newNote_Collection.delete(note.payload);
      break;
    case 'update':
    case 'u':
      if (!note.payload) {
        console.error('Error: You have to specify the payload...');
        return;
      }
      newNote_Collection.update(note.payload, note.newNote); 
      console.log(note.newNote);       
      break;
    default:
      break;
    }
  }
  
}
module.exports = Note;