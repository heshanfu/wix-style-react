import React from 'react';
import {storiesOf} from '@storybook/react';

import CodeExample from 'wix-storybook-utils/CodeExample';
import ControlledToggleSwitchExample from './Example';
import ControlledToggleSwitchExampleRaw from '!raw-loader!./Example';

storiesOf('4. Selection', module)
  .add('4.4 ToggleSwitch', () =>
    <div>
      <CodeExample title="ToggleSwitch" code={ControlledToggleSwitchExampleRaw}>
        <ControlledToggleSwitchExample/>
      </CodeExample>
    </div>
  );

