import React from 'react';
import {Autocomplete} from 'wix-style-react/StylableAutocomplete';
import {array} from 'prop-types';

const style = {
  display: 'inline-block',
  padding: '0 5px 0',
  width: '200px',
  lineHeight: '22px'
};

export const Example = ({options}) =>
  <div>
    <div style={style}>
      Left to right<Autocomplete data-hook="story-autocomplete" placeholder="Start typing" options={options}/>
    </div>
    <div style={style} dir="rtl">
      Right to left<Autocomplete options={options}/>
    </div>
    <div style={style}>
      Disabled<Autocomplete disabled options={options}/>
    </div>
    <div style={style}>
      Error<Autocomplete error="This is an error message" options={options}/>
    </div>
  </div>;

Example.propTypes = {
  options: array
};
