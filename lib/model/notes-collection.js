'use strict';

const Notes_Schema = require('./notes-schema');
const mongoose = require('mongoose');

class CrudNote {
  constructor() {

  }

  /**
  //  * get category
  //  * @function
  //  * @property {string} category - category name
  //  */

  async get(category) {
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
      mongoose.disconnect();
    }
  }


  /**
   * create note
   * @function
   * @property {string} note - text note
   * @property {string} category - category name
   */


  async create(noteText, category) {
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
      mongoose.disconnect();
    }
  }

  /**
   * update note
   * @function
   * @property {string} noteId - Id note
   * @property {string} record - new text to update the note
   */

  async update(noteId, record) {
    try {
      let updateRecord = await Notes_Schema.findByIdAndUpdate(noteId, { text: record });
      await updateRecord;
      console.log(`Updated note: ${record}, ID: ${noteId}`);
      mongoose.disconnect();
    } catch (e) {
      console.error(`Could not updte note`);
      mongoose.disconnect();
    }
  }


  /**
  //  * delete note
  //  * @function
  //  * @property {string} noteId - _id note
  //  */


  async delete(noteId) {
    try {
      await Notes_Schema.findByIdAndDelete(noteId);
      console.log(`Deleted Note: ${noteId}`);
      mongoose.disconnect();
    } catch (e) {
      console.error('Could not find notes');
      mongoose.disconnect();
    }
  }
}


module.exports = CrudNote;