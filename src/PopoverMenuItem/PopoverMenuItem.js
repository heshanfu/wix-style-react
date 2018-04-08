import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import WixComponent from '../BaseComponents/WixComponent';
import Text from '../Text/deprecated';

import styles from './PopoverMenuItem.scss';

class PopoverMenuItem extends WixComponent {
  static propTypes = {
    icon: PropTypes.node,
    text: PropTypes.string,
    onClick: PropTypes.func,
    size: PropTypes.oneOf(['normal', 'large'])
  };

  static defaultProps = {
    size: 'normal'
  };

  render() {
    return (
      <li className={classnames(styles.root, {[styles.large]: this.props.size === 'large'})}>
        <button
          type="button"
          className={styles.button}
          onClick={this.props.onClick}
          >
          {this.props.icon && <div className={styles.icon}>{this.props.icon}</div>}

          <div className={styles.text}>
            <Text
              dataHook="menu-item-text"
              appearance={this.props.size === 'normal' ? 'T3' : 'T1'}
              >
              {this.props.text}
            </Text>
          </div>
        </button>
      </li>
    );
  }
}

export default PopoverMenuItem;
