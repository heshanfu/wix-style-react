# Migrating `<DatePicker/>` to `wix-style-react` version 3.0.0

## Glossary

1. `<DatePicker/>` no longer requires `moment.js`
2. a number of props were deprecated
3. component styles were updated to be in sync with Wix UI design system


## 1. `<DatePicker/>` no longer requires `moment.js`

### `value` prop

`<DatePicker/>` expected you to give `moment` instance to `value` prop.
3.0.0 removes this requirement.

* before `3.0.0`:
    ```js
    import moment from 'moment';
    const value = new Date();
    <DatePicker value={moment.utc(value)} />
    ```

* after `3.0.0`:
    ```
    const value = new Date();
    <DatePicker value={value}/>
    ```

### `onChange` prop

`<DatePicker/>` used to call `onChange` and pass `moment` instance.
Since 3.0.0 it passes native `Date` instance.

* before `3.0.0`:
    ```js
    <DatePicker onChange={momentDate => momentDate.format('YYYY/MM/DD')}
    ```

* after `3.0.0`:
    ```
    <DatePicker onChange={date => date.toDateString()}
    ```

this means that you are no longer required to have `moment.js` as a
dependency of your project.

However, you can still use `moment.js` if you prefer, just `onChange={date => moment(date)}`

Since `3.0.0` `<DatePicker/>` internally uses [`date-fns`](https://github.com/date-fns/date-fns).
You can also use it if you wish, but it is not required


## 2. a number of props were deprecated

these were either implemented wrong or not working at all:

1. `noLeftBorderRadius`
2. `noRightBorderRadius`
3. `onEnterPressed` - use `onChange`
6. `prefix`
7. `readOnly` - use `disabled`
8. `setOpen`
9. `style`
10. `theme`


## 3. component styles were updated to be in sync with Wix UI design system

This can be considered a breaking change (especially for those doing
screenshot testing) although not a major one.
