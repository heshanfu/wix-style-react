import React from 'react';
import {storiesOf} from '@storybook/react';
import Markdown from 'wix-storybook-utils/Markdown';
import TabbedView from 'wix-storybook-utils/TabbedView';
import CodeExample from 'wix-storybook-utils/CodeExample';

import Text from '../../src/Text';
import {Example} from './ExampleStandard';
import ExampleStandardRaw from '!raw-loader!./ExampleStandard';

import {Autocomplete} from 'wix-style-react/StylableAutocomplete';
import {generateOptions} from 'wix-ui-core/dist/src/baseComponents/DropdownOption/OptionsExample';

const options = generateOptions((args = {}) => Autocomplete.createDivider(args.value));

storiesOf('4. Selection', module)
  .add('4.1 + Autocomplete', () =>
    <TabbedView tabs={['API']}>
      <div>
        <Markdown source={`# \`<Autocomplete/>\``}/>
        <div style={{background: 'azure', display: 'inline-block'}}><Text>{`import {Autocomplete} from 'wix-style-react/Autocomplete';`}</Text></div>
        <h2>
          Component documentation and playground is available <a target="_blank" rel="noopener noreferrer" href="https://wix.github.io/wix-ui-backoffice/?selectedKind=Components&selectedStory=Autocomplete">here</a>.
        </h2>
        <CodeExample title="Examples" code={ExampleStandardRaw}>
          <Example options={options}/>
        </CodeExample>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    </TabbedView>
  );
