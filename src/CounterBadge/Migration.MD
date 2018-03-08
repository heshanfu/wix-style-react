# Migration to the new Badge component

The `skin` prop values were `['default', 'standard', 'urgent', 'success']`
The new skins values are `export type Skin = ['general', 'standard', 'danger', 'warning', 'urgent', 'success']

### Deprecated skins
`default` --> `general`
`urgent` --> `danger`

### New skins
`urgent` and `warning`;
