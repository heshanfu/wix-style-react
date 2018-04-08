import React from 'react';
import PropTypes from 'prop-types';

import InputWithOptions from '../InputWithOptions';
import SearchIcon from 'wix-ui-icons-common/Search';
import WixComponent from '../BaseComponents/WixComponent';

import styles from './Search.scss';

/**
 * Search component with suggestions based on input value listed in dropdown
 */
export default class Search extends WixComponent {
  static displayName = 'Search';

  static propTypes = {
    ...InputWithOptions.propTypes,
    placeholder: PropTypes.string
  };

  static defaultProps = {
    ...InputWithOptions.defaultProps,
    placeholder: 'Search'
  };

  constructor(props) {
    super(props);

    this.state = {
      inputValue: (!this._isControlled && props.defaultValue) || ''
    };
  }

  get _isControlled() {
    return 'value' in this.props && 'onChange' in this.props;
  }

  get _filteredOptions() {
    const {
      options,
      value
    } = this.props;

    const searchText = this._isControlled ? value : this.state.inputValue;

    return options.filter(option => (searchText && searchText.length) ?
      new RegExp(searchText.trim(), 'i').test(option.value) :
      true
    );
  }

  _onChange = e => {
    if (this._isControlled) {
      this.props.onChange(e);
    } else {
      this.setState({
        inputValue: e.target.value
      });
    }
  };

  _onClear = () => {
    const {
      onClear
    } = this.props;

    this.refs.searchInput.input.blur();

    onClear && onClear();
  };

  render() {
    return (
      <InputWithOptions
        {...this.props}
        ref="searchInput"
        roundInput
        prefix={<div className={styles.leftIcon}><SearchIcon/></div>}
        menuArrow={false}
        clearButton
        closeOnSelect
        showOptionsIfEmptyInput={false}
        options={this._filteredOptions}
        onClear={this._onClear}
        onChange={this._onChange}
        highlight
        />
    );
  }
}
