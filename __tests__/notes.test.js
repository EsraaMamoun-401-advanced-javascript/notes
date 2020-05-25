'use strict';

const Notes = require('../lib/notes');

jest.spyOn(global.console, 'log');

describe('Notes Module', () => {

  it('execute() to get update', () => {
    let newNote = new Notes();
    let objTest = { action: 'update', payload: 'something new', id: '5ec9a22b683741064d1e485c' };
    newNote.execute(objTest);
    expect(console.log).toHaveBeenCalled();
  });

  it('execute() to get list', () => {
    let newNote = new Notes();
    let objTest = { action: 'list', category: 'test' };
    newNote.execute(objTest);
    expect(console.log).toHaveBeenCalled();
  });

  it('execute() to get delete', () => {
    let newNote = new Notes();
    let objTest = { action: 'delete', id: '5ec9a22b683741064d1e485c' };
    newNote.execute(objTest);
    expect(console.log).toHaveBeenCalled();
  });

  it('execute() without specify category', () => {
    let options = new Notes();
    let input = { action: 'a', category: undefined, id: undefined, payload: 'some note'};
    options.execute(input);
    expect(console.log).toHaveBeenCalled();
  });

});

