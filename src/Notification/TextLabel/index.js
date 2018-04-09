import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../Deprecated/Text';

const TextLabel = ({children}) =>
  <Text
    ellipsis
    appearance="T1.2"
    dataHook="notification-label"
    >
    {children}
  </Text>;

TextLabel.propTypes = {
  children: PropTypes.node
};

TextLabel.displayName = 'Notification.TextLabel';

export default TextLabel;
