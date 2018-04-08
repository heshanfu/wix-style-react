import React, {Component} from 'react';
import PropTypes from 'prop-types';
import reactElementToJSXString from 'react-element-to-jsx-string';

import AutocompleteComposite from '../../src/StylableAutocompleteComposite';
import {Autocomplete} from '../../src/StylableAutocomplete';
import Label from '../../src/Label';

export default class Form extends Component {

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    withLabel: PropTypes.bool,
    label: PropTypes.object,
    autocomplete: PropTypes.object
  };

  componentDidUpdate(props) {
    props.onChange(reactElementToJSXString(this.getComponent()));
  }

  componentDidMount() {
    this.props.onChange(reactElementToJSXString(this.getComponent()));
  }

  getComponent() {
    return (
      <AutocompleteComposite>
        {this.props.withLabel ? <Label for="firstName" {...this.props.label}/> : null}
        <Autocomplete id="firstName" {...this.props.autocomplete}/>
      </AutocompleteComposite>
    );
  }

  render() {
    return this.getComponent();
  }
}
