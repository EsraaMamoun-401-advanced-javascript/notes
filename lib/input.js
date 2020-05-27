'use strict';

const minimist = require('minimist');

/**
 * Represents an action, payload, and category.
 * @constructor
 */

class Input {
  constructor() {
    const argv = process.argv.slice(2);
    const formatted = minimist(argv);
    let keys = Object.keys(formatted);

    /**
     * theNote = {}
     * Represents an action, payload, and category.
     * @Object
     */

    this.theNote = {};

    keys.forEach(key => {
      switch (key) {
      case 'a':
      case 'add':
        this.theNote = {
          action: 'add',
          payload: formatted[key],
          category: undefined,
        };
        break;

      case 'c':
      case 'category':
        this.theNote.category = formatted[key] ? formatted[key] : false;
        break;

      case 'l':
      case 'list':
        this.theNote = {
          action: 'list',
          payload: formatted[key] ? formatted[key] : undefined,
        };
        break;
      case 'd':
      case 'delete':
        this.theNote = {
          action: 'delete',
          payload: typeof formatted[key] === 'string' ? formatted[key] : false,
        };
        break;
      case 'u':
      case 'update':
        this.theNote = {
          action: 'update',
          payload: formatted[key] ? formatted[key] : undefined,
          newNote: (formatted.newnote || formatted.n) ? (formatted.newnote || formatted.n) : helper(),
        };
        break;
      default:
        break;
      }
    });

  }

}

function helper() {
  console.log(`Error: you can't update note without correct action try:
  --update _id-Note --newnote 'what you want to update'
  OR (For short)
  -u id-Note -n 'what you want to update'`);
  process.exit();
}

module.exports = Input;