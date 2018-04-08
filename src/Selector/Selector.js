import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import WixComponent from '../BaseComponents/WixComponent';
import Checkbox from '../Checkbox';
import RadioButton from '../RadioGroup/RadioButton/RadioButton';
import Text from '../Text/deprecated';
import styles from './Selector.scss';
import ExtraText from './ExtraText';
import ExtraIcon from './ExtraIcon';
import ProgressBar from './ProgressBar';

class Selector extends WixComponent {
  static propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    image: PropTypes.node,
    imageSize: PropTypes.oneOf([
      'tiny',
      'small',
      'portrait',
      'large',
      'cinema'
    ]),
    imageShape: PropTypes.oneOf(['rectangular', 'circle']),
    title: PropTypes.string.isRequired,
    isSelected: PropTypes.bool,
    isDisabled: PropTypes.bool,
    subtitle: PropTypes.string,
    extraNode: PropTypes.node,
    onToggle: PropTypes.func,
    toggleType: PropTypes.oneOf(['checkbox', 'radio'])
  };

  static defaultProps = {
    isSelected: false,
    isDisabled: false,
    toggleType: 'radio',
    imageSize: 'large',
    imageShape: 'rectangular',
    onToggle: i => i
  };

  radioButtonAndImageMargins = '57px';

  _onClick = () => !this.props.isDisabled && this.props.onToggle(this.props.id);

  render() {
    const {
      imageSize,
      imageShape,
      image,
      title,
      subtitle,
      extraNode,
      isSelected,
      isDisabled,
      toggleType
    } = this.props;

    return (
      <li
        className={styles.root}
        onClick={this._onClick}
        >
        { toggleType === 'checkbox' ?
          <Checkbox dataHook="toggle" checked={isSelected} disabled={isDisabled}/> :
          <RadioButton dataHook="toggle" checked={isSelected} disabled={isDisabled}/>
        }

        {image &&
          <div
            data-hook="selector-image"
            className={classNames(styles.image, styles[imageSize], styles[imageShape])}
            children={image}
            />
        }

        <div className={styles.titles}>
          <Text
            appearance="T1"
            dataHook="selector-title"
            ellipsis
            children={title}
            />

          {subtitle &&
            <Text
              appearance="T3.1"
              dataHook="selector-subtitle"
              ellipsis
              children={subtitle}
              />
          }
        </div>

        {extraNode &&
          <div
            className={styles.extra}
            data-hook="selector-extra-node"
            children={extraNode}
            />
        }
      </li>
    );
  }
}

Selector.ExtraText = ExtraText;
Selector.ExtraIcon = ExtraIcon;
Selector.ProgressBar = ProgressBar;

export default Selector;
