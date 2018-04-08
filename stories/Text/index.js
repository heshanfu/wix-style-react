import React from 'react';
import {storiesOf} from '@storybook/react';

import CodeExample from 'wix-storybook-utils/CodeExample';
import Markdown from 'wix-storybook-utils/Markdown';
import Readme from '../../src/Text/README.md';
import ControlledTextExample from './Example';
import ControlledTextExampleRaw from '!raw-loader!./Example';
import ControlledTextExampleTypography from './ExampleTextTypography';
import ControlledTextExampleTypographyRaw from '!raw-loader!./ExampleTextTypography';
import {Heading} from 'wix-ui-backoffice/Heading';

storiesOf('1. Foundation', module)
  .add('1.2 Text', () => (
    <div>
      <Markdown source={Readme}/>

      <CodeExample title="Text" code={ControlledTextExampleRaw}>
        <ControlledTextExample/>
      </CodeExample>

      <Heading>Typography Examples:</Heading>
      <CodeExample title="Text" code={ControlledTextExampleTypographyRaw}>
        <ControlledTextExampleTypography/>
      </CodeExample>
    </div>
  ));

