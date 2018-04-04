# CollapsedHeader TestKits

When testing CollapsedHeader you might see some errors with unknown functions, to fix it -

```js
import animationPolyFill from 'wix-style-react/dist/src/Card/CollapsedHeader/AnimationPolyfill';
```

Before the tests and after each jsdom cleanup -

```js
animationPolyFill(window, global);
```

## CollapsedHeader TestKit API

## Unit testing

### driver

| method         | arguments | returned value | description                       |
| -------------- | --------- | -------------- | --------------------------------- |
| exists         | -         | bool           | checks if element does exist      |
| title          |           | -              | string                            | returns title inner html |
| subtitle       | -         | string         | returns subtitle inner html       |
| element        | -         | element        | returns header element            |
| click          | -         | -              | clicks the header                 |
| findByDatahook | string    | element        | returns inner element by datahook |

### Usage Example

> Unit testing example

```javascript
  import React from 'react';
  import {CollapsedHeaderTestkitFactory} from 'wix-style-react/testkit';
  import {CollapsedHeaderTestkitFactory as enzymeCollapsedHeaderTestkitFactory} from 'wix-style-react/testkit/enzyme';

  /***************
   enzyme example
  ***************/

    const dataHook = 'myDataHook';
    const wrapper = mount(
      <CollapsedHeader title="Header Title" subtitle="Header Subtitle" dataHook={dataHook}>
        <div/>
      </CollapsedHeader>
    );
    const collapsedDriverTestkit = enzymeCollapsedHeaderTestkitFactory({wrapper, dataHook});
  //Do tests
    expect(collapsedDriverTestkit.exists()).toBeTruthy();

  /**********************
   ReactTestUtils example
  **********************/
it('should exist', () => {
    const div = document.createElement('div');
    const dataHook = 'myDataHook';
    const wrapper = div.appendChild(
      ReactTestUtils.renderIntoDocument(
        <div>
          <CollapsedHeader title="Header Title" subtitle="Header Subtitle" dataHook={dataHook}>
            <div/>
          </CollapsedHeader>
        </div>
      )
    );
    const collapsedHeaderTestkit = collapsedHeaderTestkitFactory({wrapper, dataHook});
  //Do tests
    expect(collapsedHeaderTestkit.exists()).toBeTruthy();
```
