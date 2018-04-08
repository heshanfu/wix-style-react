# Text Migration Guide

Instead of having one Text component which can render `<span>`, `<div>`, `<h1>`, ..., `<h4>`, we have seperated the Text into 2 seperated components:

1. `<Text>`
2. `<Heading>`

## Best practice to use the colors in wix-style-react:
Today there was no good way to get the colors from wix-style-react to display green or red text for example.
Most of the users simply imported `common.scss` from wix-style-react and gets all the colors.

The new `Text` component tries to solve this bad practice. In order to stop importing this css file, the new `Text` component also supports a new `skin` prop:
`skin=“success”` will give you a green text.
`skin=“error”` will give you a red text.
`skin=“premium”` will give you a purple text.

* Note: The `common.scss` might be deprecated soon. We can’t guarantee it will remain exposed in the future versions.  

## <Text>
The API for the `Text` typography have changed dramatically.
We no longer have `appearance` prop, but many alternative more intuitive props:

`size` - font size(`small` or `medium`). defaults to `medium`.
`secondary` - is the text secondary (affects the color of the text). defaults to `false`.
`bold` - is the text bold. defaults to `false`.
`light` - for when the text is rendered on top of a dark background. defaults to false.

### Default appearance
Note that we used to have `appearance="T1.1"` by default. Now with the new API the default will be similar to `appearance="T1"`. Basically it means that by default the text is primary color, and not secondary.

### Appearances updates
`<Text appearance="T1">` --> `<Text>`
`<Text appearance="T1.1">` --> `<Text secondary>`
`<Text appearance="T1.2">` —> `<Text light>`
`<Text appearance="T1.3">` —> `<Text><TextLink>go to...</TextLink><Text>` (render Link component as a children of the Text)
`<Text appearance="T1.4">` —> `<Text secondary light>` (The color have slightly changed from #c8c8c8 (GR10) to #b6c1cd (D50))

`<Text appearance="T2">` --> `<Text bold>`
`<Text appearance="T2.1">` --> `<Text bold secondary light>` (The color have slightly changed from #c8c8c8 (GR10) to #b6c1cd (D50))
`<Text appearance="T2.2">` —> `<Text bold light>`
`<Text appearance="T2.3">` —> DEPRECATED

`<Text appearance="T3">` --> `<Text size="small">`
`<Text appearance="T3.1">` --> `<Text size="small" secondary>`
`<Text appearance="T3.2">` —> `<Text size="small" light>`
`<Text appearance="T3.3">` —> `<Text size="small"><TextLink>go to...</TextLink><Text>` (render Link component as a children of the Text)
`<Text appearance="T3.4">` —> `<Text size="small" secondary light>` (The color have slightly changed from #c8c8c8 (GR10) to #b6c1cd (D50))

`<Text appearance="T4">` --> `<Text bold size="small">`
`<Text appearance="T4.1">` --> `<Text bold size="small" secondary>`
`<Text appearance="T4.2">` —> `<Text bold size="small" light>`
`<Text appearance="T4.3">` —> DEPRECATED

 `T5.*` are deprecated. If you use them, you might want to use `<Badge type=“transparent”>`

### Testkit Deprecated methods:
- `getClassName` is deprecated.
- `getType` is deprecated in favor of `getTagName`

## Heading
A lot have changed with the H.* appearances as well. Instead of having many H.* indexes, we have a new component `Heading` which also uses the `light` prop which helps us define the desired typography.
we used to have a lot of options. All H0 - H4 values are now relevant only for the Heading component.
We used to have `H0` - `H4`, which got mapped under the hood to html `h1` - `h5` respectively. Instead of doing it, we now support only `H1` - `H4` which will be mapped to `h1` - `h4`.

### Appearances updates
`<Text appearance="H0">` -> DEPRECATED
`<Text appearance="H1">` -> `<Heading appearance="H1">`
`<Text appearance="H1.1">` -> `<Heading appearance="H1" light>`
`<Text appearance="H2">` -> `<Heading appearance="H2">`
`<Text appearance="H2.1">` -> `<Heading appearance="H2" light>`
`<Text appearance="H3">` -> `<Heading appearance="H3">`
`<Text appearance="H4">` -> `<Heading appearance="H4">`
