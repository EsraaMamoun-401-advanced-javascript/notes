'use strict';

const Notes = require('../lib/notes');

jest.spyOn(global.console, 'log');

describe('Notes Module', () => {

  it('add() when the action is null', () => {
    let newNote = new Notes();
    let obj = { action: null, playload: 'hi iam the new note', category: 'self' };
    newNote.add(obj)
      .then(() => {
        expect(console.log).toHaveBeenCalled();
      });
  });

  it('add() when the action is wrong', () => {
    let newNote = new Notes();
    let obj = { action: 'new', playload: 'hi iam the new note', category: 'self' };
    newNote.add(obj)
      .then(() => {
        expect(console.log).toHaveBeenCalled();
      });
  });
  
  it('list() when the action is undefined', () => {
    let newNote = new Notes();
    let obj = { action: undefined, category: 'light' };
    newNote.list(obj)
      .then(() => {
        expect(console.log).toHaveBeenCalled();
      });
  });

  it('delete() when the action is undefined or the id is not exist', () => {
    let newNote = new Notes();
    let obj = { action: undefined, id: '' };
    newNote.delete(obj)
      .then(() => {
        expect(console.log).toHaveBeenCalled();
      });
  });

  it('add() when the action is correct (add)', () => {
    let newNote = new Notes();
    let obj = { action: 'add', playload: 'hi iam the new note', category: 'self' };
    newNote.add(obj)
      .then(() => {
        expect(console.log).toHaveBeenCalled();
      });
  });

  it('list() when the action is correct (list) and the category is exist', () => {
    let newNote = new Notes();
    let obj = { action: 'list', category: 'something' };
    newNote.list(obj)
      .then(() => {
        expect(console.log).toHaveBeenCalled();
      });
  });

  it('delete() when the action is correct (delete) and the id is exist', () => {
    let newNote = new Notes();
    let obj = { action: 'delete', id: '5ec7cfb5e8553c0219538c78' };
    newNote.delete(obj)
      .then(() => {
        expect(console.log).toHaveBeenCalled();
      });

  });

});