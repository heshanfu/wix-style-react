import React from 'react';
import autoCompleteDriverFactory from './AutoComplete.driver';
import AutoComplete from './AutoComplete';
import {createDriverFactory} from '../test-common';
import {runInputWithOptionsTest} from '../InputWithOptions/InputWithOptions.spec';

const asciiA = '97';
runInputWithOptionsTest(autoCompleteDriverFactory);

describe('Autocomplete', () => {
  const createDriver = createDriverFactory(autoCompleteDriverFactory);

  const options = [
    {id: 0, value: 'aaa'},
    {id: 1, value: 'abb'},
    {id: 2, value: 'bbb', disabled: true},
    {id: 3, value: 'bcc'},
    {id: 'divider1', value: '-'},
    {id: 'element1', value: <span style={{color: 'brown'}}>ccc</span>}
  ];

  const predicate = option => option.value.toString().toLowerCase().indexOf('a') !== -1;

  it('should not filter anything without predicate function', () => {
    const {dropdownLayoutDriver} = createDriver(<AutoComplete options={options}/>);
    expect(dropdownLayoutDriver.optionsLength()).toBe(options.length);
  });

  ['ArrowUp', 'ArrowDown'].forEach(key => {
    it(`should not filter items according to predicate function when pressing ${key}`, () => {
      const {inputDriver, dropdownLayoutDriver} = createDriver(<AutoComplete options={options} predicate={predicate}/>);
      inputDriver.trigger('keyDown', {key});
      expect(dropdownLayoutDriver.optionsLength()).toBe(options.length);
    });
  });

  it('should filter items according to predicate function when typing characters', () => {
    const {inputDriver, dropdownLayoutDriver} = createDriver(<AutoComplete options={options} predicate={predicate}/>);
    inputDriver.trigger('keyDown', {key: asciiA});
    expect(dropdownLayoutDriver.optionsLength()).toBe(2);
  });

  it('should show all items when focusing even if some text exist', () => {
    const {dropdownLayoutDriver, inputDriver} = createDriver(<AutoComplete options={options} predicate={predicate}/>);
    inputDriver.enterText('aaa');
    inputDriver.focus();
    expect(dropdownLayoutDriver.optionsLength()).toBe(options.length);
  });
});
