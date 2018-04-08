import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import WixComponent from '../BaseComponents/WixComponent';
import Text from '../Text/deprecated';
import Button from '../Button';
import CloseIcon from '../Icons/dist/components/Close';

import styles from './styles.scss';

export const HELPER_APPEARANCE = {
  warning: styles.warning,
  standard: styles.standard,
  danger: styles.danger,
  success: styles.success,
  premium: styles.premium
};

/**
 * Used in pages where you need to explain or mention things about the content or actions
 */
class SectionHelper extends WixComponent {
  render() {
    return (
      <div className={classnames(styles.root, HELPER_APPEARANCE[this.props.appearance])}>
        { this.props.onClose &&
          <div className={classnames(styles.close, {[styles.closeWithTitle]: this.props.title})}>
            <Button
              dataHook="sectionhelper-close-btn"
              size="large"
              theme="close-dark"
              onClick={this.props.onClose}
              children={<CloseIcon size="8px"/>}
              />
          </div>
        }

        { this.props.title &&
          <div className={styles.title}>
            <Text dataHook="sectionhelper-title" appearance="T4">
              {this.props.title}
            </Text>
          </div>
        }

        <div className={styles.content}>
          <Text appearance="T3">
            { this.props.children }
          </Text>
        </div>

        { this.props.onAction && this.props.actionText &&
          <div className={styles.action}>
            <Button
              height="small"
              theme="outlined"
              onClick={this.props.onAction}
              dataHook="sectionhelper-action-btn"
              children={this.props.actionText}
              />
          </div>
        }
      </div>
    );
  }
}

SectionHelper.propTypes = {
  /** Sets the look and feel of the component */
  appearance: PropTypes.oneOf(Object.keys(HELPER_APPEARANCE)),

  /** Adds text as the title */
  title: PropTypes.node,

  /** When provided, will make a close button appear and invoke it upon click */
  onClose: PropTypes.func,

  /** When provided, will make an action button appear and invoke it upon click */
  onAction: PropTypes.func,

  /** Text label for the action button */
  actionText: PropTypes.string,

  /** Children to render */
  children: PropTypes.node
};

SectionHelper.defaultProps = {
  appearance: 'warning'
};

export default SectionHelper;
