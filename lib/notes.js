'use strict';

const mongoose = require('mongoose');
const Notes_Schema = require('./model/notes-schema');

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
    Try l or list whith the category name to get specific category
    add or a with note and category or c white category name to add new note 
    delete or d with the ID for the note what you want to remove...`);
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
      this.add(note.payload, note.category);
      break;
    case 'list':
    case 'l':
      if (!note.action === 'list' || !note.action === 'l') {
        console.error(`Are you sure you write the action correctly?
        Try l or list to get what you need...`);
        return;
      }
      this.list(note.payload);
      break;
    case 'delete':
    case 'd':
      if (!note.payload) {
        console.error('Error: You have to specify the payload...');
        return;
      }
      this.delete(note.payload);
      break;
    default:
      break;
    }
  }

  /**
 * add note
 * @function
 * @property {string} note - text note
 * @property {string} category - category name
 */

  async add(noteText, category) {
    try {
      let newNote = new Notes_Schema({
        text: noteText,
        category: category ? category : '',
      });

      await newNote.save();
      await console.log(`Added note: ${noteText}`);
      mongoose.disconnect();
    } catch (error) {
      console.error('Couldn\'t add note!!!');
    }
  }

  /**
 * list category
 * @function
 * @property {string} category - category name
 */

  async list(category) {
    try {
      let allNotes = [];
      if (category !== true) {
        allNotes = await Notes_Schema.find({ category: category });

        allNotes.forEach(value => {
          if (category) {
            console.log(value.text);
            console.log('-----------');
          }
        });
        mongoose.disconnect();

      } else {
        allNotes = await Notes_Schema.find({});
        allNotes.forEach(value => {
          if (category) {
            console.log(value.text);
            console.log('-----------');
          }
        });
        mongoose.disconnect();
      }
    } catch (error) {
      console.error('Couldn\'t find notes');
    }

  }

  /**
 * delete note
 * @function
 * @property {string} noteId - _id note
 */

  async delete(noteId) {
    try {
      await Notes_Schema.findByIdAndDelete(noteId);
      console.log(`Deleted Note: ${noteId}`);
    } catch (e) {
      console.error('Could not find notes');
    }
    mongoose.disconnect();
  }

}
module.exports = Note;