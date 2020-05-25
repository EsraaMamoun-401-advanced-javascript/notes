'use strict';

const Input = require('../lib/input');

describe('Input Module', () => {

  it('Input Constructor() it return false when the user enter any action wrong', () => {
    let myInput = new Input();
    myInput.theNote.action == 'anything';
    expect(myInput.theNote.action).toBeFalsy();
  });

  it('Input Constructor() it return false when the user enter some category undefined', () => {
    let myInput = new Input();
    let theTest = myInput.theNote;
    expect(theTest == { action: 'add', playload: 'my note', category: undefined }).toBeFalsy();
  });

  let theActions = ['add', 'a', 'list', 'l', 'delete', 'd', 'category', 'c', 'update', 'u'];

  theActions.forEach(thisKey => {

    it(`Input Constructor() it return ${thisKey} when the user enter ${thisKey} as an action`, () => {
      let myInput = new Input();
      myInput.theNote.keys == thisKey;
      expect(myInput.theNote.keys == thisKey).toEqual(myInput.theNote.action == thisKey);
    });

  });

});