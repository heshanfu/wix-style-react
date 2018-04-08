import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import AutocompleteComposite from './';
import {Autocomplete} from '../StylableAutocomplete';
import {autocompleteCompositeTestkitFactory} from '../../testkit';
import {autocompleteCompositeTestkitFactory as enzymeTextAreaTestkitFactory} from '../../testkit/enzyme';
import {mount} from 'enzyme';

describe('AutocompleteComposite', () => {
  describe('testkit', () => {
    it('should exist', () => {
      const div = document.createElement('div');
      const dataHook = 'compHook';
      const wrapper = div.appendChild(ReactTestUtils.renderIntoDocument(<div><AutocompleteComposite dataHook={dataHook}><Autocomplete options={[]}/></AutocompleteComposite></div>));
      const autocompleteCompositeTestkit = autocompleteCompositeTestkitFactory({wrapper, dataHook});
      expect(autocompleteCompositeTestkit.exists()).toBeTruthy();
    });

    describe('enzyme testkit', () => {
      it('should exist', () => {
        const dataHook = 'myDataHook';
        const wrapper = mount(<AutocompleteComposite dataHook={dataHook}><Autocomplete options={[]}/></AutocompleteComposite>);
        const autocompleteCompositeTestkit = enzymeTextAreaTestkitFactory({wrapper, dataHook});
        expect(autocompleteCompositeTestkit.exists()).toBeTruthy();
      });
    });
  });
});
