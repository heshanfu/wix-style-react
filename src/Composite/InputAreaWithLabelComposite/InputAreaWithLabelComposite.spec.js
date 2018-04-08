import React from 'react';
import InputAreaWithLabelComposite from './InputAreaWithLabelComposite';
import Label from '../../Label';
import Input from '../../Input';
import InputArea from '../../InputArea';
import {Autocomplete} from '../../StylableAutocomplete';
import textAreaDriverFactory from '../../TextArea/TextArea.driver';
import textFieldDriverFactory from '../../TextField/TextField.driver';
import autocompleteCompositeDriverFactory from '../../StylableAutocompleteComposite/AutocompleteComposite.driver';
import {createDriverFactory} from '../../test-common';
import Tooltip from '../../Tooltip/Tooltip';

describe('InputAreaWithLabelComposite', () => {
  const createTextAreaDriver = createDriverFactory(textAreaDriverFactory);
  const createTextFieldDriver = createDriverFactory(textFieldDriverFactory);
  const createAutocompleteDriver = createDriverFactory(autocompleteCompositeDriverFactory);

  it('should remove label wrapping when label not given', () => {
    const driver = createTextFieldDriver(<InputAreaWithLabelComposite><Input/></InputAreaWithLabelComposite>);
    expect(driver.hasLabel()).toBe(false);
    expect(driver.getNumberOfChildren()).toBe(1);
  });

  it('should render Label with Input', () => {
    const driver = createTextFieldDriver(<InputAreaWithLabelComposite><Label>myLabel</Label><Input/></InputAreaWithLabelComposite>);
    expect(driver.hasLabel()).toBe(true);
    expect(driver.getLabel()).toBe('myLabel');
    expect(driver.hasInput()).toBe(true);
  });

  it('should render Label with InputArea', () => {
    const driver = createTextAreaDriver(<InputAreaWithLabelComposite><Label/><InputArea/></InputAreaWithLabelComposite>);
    expect(driver.hasLabel()).toBe(true);
    expect(driver.hasInputArea()).toBe(true);
  });

  it('should render Label with Autocomplete', () => {
    const driver = createAutocompleteDriver(<InputAreaWithLabelComposite><Label/><Autocomplete options={[]}/></InputAreaWithLabelComposite>);
    expect(driver.hasLabel()).toBe(true);
    expect(driver.hasAutocomplete()).toBe(true);
  });

  describe('label attributes', () => {
    it('should FieldLabelAttributes not exists if all attributes empty or false', () => {
      const driver = createAutocompleteDriver(<InputAreaWithLabelComposite><Label>label</Label><InputArea/></InputAreaWithLabelComposite>);

      expect(driver.hasFieldLabelAttributes()).toBe(false);
    });

    it('should FieldLabelAttributes exists if required', () => {
      const driver = createAutocompleteDriver(<InputAreaWithLabelComposite required><Label>label</Label><InputArea/></InputAreaWithLabelComposite>);

      expect(driver.hasFieldLabelAttributes()).toBe(true);
    });

    it('should FieldLabelAttributes exists if required and with one child', () => {
      const driver = createAutocompleteDriver(<InputAreaWithLabelComposite required><InputArea/></InputAreaWithLabelComposite>);

      expect(driver.hasFieldLabelAttributes()).toBe(true);
    });

    it('should FieldLabelAttributes exists if info', () => {
      const driver = createAutocompleteDriver(<InputAreaWithLabelComposite info="info"><Label>label</Label><InputArea/></InputAreaWithLabelComposite>);

      expect(driver.hasFieldLabelAttributes()).toBe(true);
    });

    it('should FieldLabelAttributes exists if info and with one child', () => {
      const driver = createAutocompleteDriver(<InputAreaWithLabelComposite info="info"><InputArea/></InputAreaWithLabelComposite>);

      expect(driver.hasFieldLabelAttributes()).toBe(true);
    });

    it('should FieldLabelAttributes exists if tooltip', () => {
      const driver = createAutocompleteDriver(<InputAreaWithLabelComposite tooltip={<Tooltip content="content"/>}><Label>label</Label><InputArea/></InputAreaWithLabelComposite>);

      expect(driver.hasFieldLabelAttributes()).toBe(true);
    });

    it('should FieldLabelAttributes exists if tooltip and with one child', () => {
      const driver = createAutocompleteDriver(<InputAreaWithLabelComposite tooltip={<Tooltip content="content"/>}><InputArea/></InputAreaWithLabelComposite>);

      expect(driver.hasFieldLabelAttributes()).toBe(true);
    });
  });
});
