import React from 'react';
import {storiesOf} from '@storybook/react';

import CodeExample from 'wix-storybook-utils/CodeExample';
import Example from './Example';
import ControlledCounterBadgeExampleRaw from '!raw-loader!./Example';

storiesOf('12. Other', module)
  .add('12.3 CounterBadge', () =>
    <div>
      <CodeExample title="CounterBadge" code={ControlledCounterBadgeExampleRaw}>
        <Example/>
      </CodeExample>
    </div>
  );
