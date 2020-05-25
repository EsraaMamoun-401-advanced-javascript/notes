'use strict';

const Notes_Collection = require('../lib/model/notes-collection');

jest.spyOn(global.console, 'log');

describe('Notes-Collection Module', () => {

  it('create() when the action is null', () => {
    let newNote = new Notes_Collection();
    let obj = { action: null, playload: 'hi iam the new note', category: 'self' };
    newNote.create(obj)
      .then(() => {
        expect(console.log).toHaveBeenCalled();
      });
  });

  it('create() when the action is wrong', () => {
    let newNote = new Notes_Collection();
    let obj = { action: 'new', playload: 'new note', category: 'any' };
    newNote.create(obj)
      .then(() => {
        expect(console.log).toHaveBeenCalled();
      });
  });
  
  it('update() when the action is wrong (anything) and the id is not exist', () => {
    let newNote = new Notes_Collection();
    let obj = { action: 'anything', id: '' };
    newNote.update(obj)
      .then(() => {
        expect(console.log).toHaveBeenCalled();
      });
  });

  it('get() when the action is undefined', () => {
    let newNote = new Notes_Collection();
    let obj = { action: undefined, category: 'any' };
    newNote.get(obj)
      .then(() => {
        expect(console.log).toHaveBeenCalled();
      });
  });

  it('delete() when the action is undefined or the id is not exist', () => {
    let newNote = new Notes_Collection();
    let obj = { action: undefined, id: '' };
    newNote.delete(obj)
      .then(() => {
        expect(console.log).toHaveBeenCalled();
      });
  });

  it('create() when the action is correct (add)', () => {
    let newNote = new Notes_Collection();
    let obj = { action: 'add', playload: 'new note', category: 'any' };
    newNote.create(obj)
      .then(() => {
        expect(console.log).toHaveBeenCalled();
      });
  });

  it('get() when the action is correct (list) and the category is exist', () => {
    let newNote = new Notes_Collection();
    let obj = { action: 'list', category: 'something' };
    newNote.get(obj)
      .then(() => {
        expect(console.log).toHaveBeenCalled();
      });
  });

  it('delete() when the action is correct (delete) and the id is exist', () => {
    let newNote = new Notes_Collection();
    let obj = { action: 'delete', id: '5ec7cfb5e8553c0219538c78' };
    newNote.delete(obj)
      .then(() => {
        expect(console.log).toHaveBeenCalled();
      });
  });

  it('update() when the action is correct (update) and the id is exist', () => {
    let newNote = new Notes_Collection();
    let obj = { action: 'update', id: '5ec7cfb5e8553c0219538c78' };
    newNote.update(obj)
      .then(() => {
        expect(console.log).toHaveBeenCalled();
      });
  });

});