import React from 'react';
import {Autocomplete as BOAutocomplete} from 'wix-ui-backoffice/Autocomplete';
import {default as OldAutocomplete} from '../DeprecatedAutoComplete';
import {string} from 'prop-types';

export const Autocomplete = props => {
  if (props.theme === 'amaterial') {
    return <OldAutocomplete {...props}/>;
  }

  return <BOAutocomplete {...props}/>;
};

Autocomplete.createOption = BOAutocomplete.createOption;
Autocomplete.createDivider = BOAutocomplete.createDivider;
Autocomplete.propTypes = {
  theme: string,
  ...BOAutocomplete.propTypes
};
