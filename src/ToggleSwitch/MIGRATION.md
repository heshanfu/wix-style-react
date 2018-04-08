# Migration to the new ToggleSwitch component

## Deprecated props
`colorUnchecked`,
`colorChecked`,
`colorDisabled`

## New props
`skin` - This is the prop which controlls the color of the ToggleSwitch track. 
It may be one of `standard`, `success`, `error`.

## Updated props
`size`: Instead of having `x-small`, `small`, `large` we are going to have `small`, `medium`, `large` respectively.

## New features
`Focus` - use tabs to focus on the component, and then press `SPACE` to toggle it.

## Updated features
`Rtl` - In the older version, in order to enable rtl support, you would have to place `className="rtl"` on some wrapping element or on the body. You are now required to change it to `dir="rtl"` instead.

## Testkit Deprecations
### Component testing (enzyme & react-test-utils)

`isXSmall`, `isSmall`, `isBig` will be deprecated.
Instead we will have `getSize` which will return `small`, `medium` or `large` strings.

`fillColor` will be deprecated. Instead we will have `getSkin` which will return `standard`, `success` or `error` strings.

### E2E testing (protractor)
`isXsmall`, `isSmall`, `isLarge` are deprecated.
If for some reason you are using one of them in e2e tests, pleae let us know.
