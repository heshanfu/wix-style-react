# Card

The card is a container component of a rounded corner layout.

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| stretchVertically | bool | false | false | Should this Card stretch vertically inside the container |

#### Card.Header

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| title | string | - | + | The title of the card |
| subtitle | string | - | - | The subtitle of the card |
| withoutDivider | bool | false | - | Whether to show divider or not |

#### Card.ButtonHeader

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| title | string | - | + | The title of the card |
| subtitle | string | - | - | The subtitle of the card |
| buttonTitle | string | - | + | The text to write on the button |
| buttonOnClick | func | - | + | The onClick function |
| buttonPrefix | node | - | - | An optional Icon to put before the button |
| buttonSuffix | node | - | - | An optional Icon to put after the button |
| tooltip | node | - | - | If set, this tooltip will wrap the button |
| theme | string | 'standard' | - | Can be 'standard' or 'fullblue' |
| withoutDivider | bool | false | - | Whether to show divider or not |

#### Card.LinkHeader

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| title | string | - | + | The title of the card |
| subtitle | string | - | - | The subtitle of the card |
| linkTo | string | - | + | The link to send the user to |
| linkTitle | string | - | + | The link text |
| tooltip | node | - | - | If set, this tooltip will wrap the link |
| withoutDivider | bool | false | - | Whether to show divider or not |

#### Card.CollapsedHeader

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| title | string | - | + | The title of the card |
| subtitle | string | - | - | The subtitle of the card |
| toggleSwitch | 'button' / 'switch' | 'switch' | - | The style of the collapsed card toggle |
| withoutDivider | bool | false | - | Whether to show divider or not |
| collapsed | bool | false | - | True when the card should be collapsed |
| onCollapsedChange| func | - | - | Called with collapse status on change
| controlled <sup> * </sup> | bool | false | - | Converts the component to be controlled

* When controlled flag is passed, collapsed status will be changed only via `collapsed` prop