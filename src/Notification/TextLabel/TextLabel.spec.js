import React from 'react';
import {shallow} from 'enzyme';

import Text from '../../Text/deprecated';

import TextLabel from './';

describe('TextLabel', () => {
  it('should render Text component with default props', () => {
    const props = shallow(<TextLabel/>).find(Text).props();

    expect(props).toEqual({
      ellipsis: true,
      appearance: 'T1.2',
      dataHook: 'notification-label'
    });
  });

  it('should render children', () => {
    const wrapper = shallow(<TextLabel children={'covfefe'}/>);
    expect(wrapper.contains('covfefe')).toBe(true);
  });

  it('should have correct displayName', () => {
    expect(TextLabel.displayName).toBe('Notification.TextLabel');
  });
});
