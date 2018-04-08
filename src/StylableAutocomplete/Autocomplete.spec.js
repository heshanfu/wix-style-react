import React from 'react';
import {autocompleteDriverFactory} from './Autocomplete.driver';
import {Autocomplete} from './';
import {createDriverFactory} from '../test-common';
import {autocompleteTestkitFactory} from '../../testkit';
import {autocompleteTestkitFactory as enzymeAutocompleteTestkitFactory} from '../../testkit/enzyme';
import {mount} from 'enzyme';
import {isEnzymeTestkitExists} from 'wix-ui-test-utils/enzyme';
import {isTestkitExists} from 'wix-ui-test-utils/vanilla';

describe('Autocomplete', () => {
  const createDriver = createDriverFactory(autocompleteDriverFactory);

  it('should render autocomplete', () => {
    const driver = createDriver(<Autocomplete options={[]}/>);
    expect(driver.isTargetElementExists()).toBeTruthy();
    expect(driver.isContentElementExists()).toBeFalsy();
  });

  describe('testkit', () => {
    it('should exist', () => {
      expect(isTestkitExists(<Autocomplete options={[]}/>, autocompleteTestkitFactory)).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      expect(isEnzymeTestkitExists(<Autocomplete options={[]}/>, enzymeAutocompleteTestkitFactory, mount)).toBe(true);
    });
  });
});
