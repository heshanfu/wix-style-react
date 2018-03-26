# Changelog

All notable changes are documented in this file.

Types of changes:

1. **Added** for new features.
1. **Changed** for changes in existing functionality.
1. **Deprecated** for soon-to-be removed features.
1. **Removed** for now removed features.
1. **Fixed** for any bug fixes.
1. **Security** in case of vulnerabilities.
1. **Breaking** for breaking changes

## 3.0.0
### Breaking
- `<DatePicker/>` [migration guide](https://github.com/wix/wix-style-react/master/blob/master/src/DatePicker/MIGRATION.md)
- `<Badge/>` [migration guide](https://github.com/wix/wix-style-react/master/blob/master/src/Badge/MIGRATION.md)
- `<CounterBadge/>` [migration guide](https://github.com/wix/wix-style-react/master/blob/master/src/CounterBadge/MIGRATION.md)
- jQuery no longer used in testkits, may possibly break your tests
- `<Text/>` - no more unexpected `margins` when using any of the following `appearance`s: `H0`, `H1`, `H1.1`, `H2`, `H2.1`, `H3`, `H4`. May break layout.

## 2.0.34 - 2018-03-26
### Fixed
- `<Tooltip/>` - fixed Tooltip show and hide functions to accept the relevant props [#1597](https://github.com/wix/wix-style-react/pull/1597)

## 2.0.33 - 2018-03-26
### Fixed
- `<Range/>` - fix e2e eyes failures by making the date fixed [#1589](https://github.com/wix/wix-style-react/pull/1589)
- `<Page/>` - fix an issue that renders `0` in a certain case
- `<Tooltip/>` - fix disabled change when active true [#1584](https://github.com/wix/wix-style-react/pull/1584)
- `<TextLink/>` - remove link prop required field [#1583](https://github.com/wix/wix-style-react/pull/1583)
- `<DrillView/>` - don't trigger `onClick` for disabled items [#1591](https://github.com/wix/wix-style-react/pull/1591)

### Added
- Testing - add `scrollToElement` function for protractor testing [#1569](https://github.com/wix/wix-style-react/pull/1569)

## 2.0.32 - 2018-03-22
### Changed
- `<toggleSwitch>` - add hover style [#1576](https://github.com/wix/wix-style-react/pull/1576)
- Focus-Styles: Disable focus style for component which need keyboardOnly [#1578](https://github.com/wix/wix-style-react/pull/1578)
- `<RichTextEditor/>` - add new focus styles to buttons [#1572](https://github.com/wix/wix-style-react/pull/1572)
- `Grid` - grid rows bottom margin should be 30px [#1483](https://github.com/wix/wix-style-react/pull/1483)

### Fixed
- `<Page/>` - fixed issue when page jumps between minimized and full states on page without scroll [#1467](https://github.com/wix/wix-style-react/issues/1467)
- `<Tooltip/>` - fix Tooltip active and disabled new props transition [#1573](https://github.com/wix/wix-style-react/pull/1573)
- `<Checkbox>` protractor driver: use isFocused from test-common

## 2.0.31 - 2018-03-19
### Added
- `<PopoverMenu>` : add appendTo props [#1568](https://github.com/wix/wix-style-react/pull/1568)
- TextLink - add grayscale. MultiSelect Tags - hover css [#1452](https://github.com/wix/wix-style-react/pull/1452)
- Apply `<Input>` new focus style [#1533](https://github.com/wix/wix-style-react/pull/1533)
- Added event listener for page content resize [#1564](https://github.com/wix/wix-style-react/pull/1564)
### Changed
- Testkit sectionhelper [#1563](https://github.com/wix/wix-style-react/pull/1563)
- Fix missing dataHook - add Range e2e test for DatePicker [#1562](https://github.com/wix/wix-style-react/pull/1562)
- `<FieldWithSelection>` : Prepare for new focus styles [#1559](https://github.com/wix/wix-style-react/pull/1559)
### Fixed
- fix(Selector, Checkbox, ModalSelectorLayout)| ModalSelectorLayout clicking on checkbox fires onToggle twice [#1560](https://github.com/wix/wix-style-react/pull/1560)
- Remove scss calls to fade() [#1554](https://github.com/wix/wix-style-react/pull/1554)

## 2.0.30 - 2018-03-15
### Added
- `<MultiSelect/>` composite component [1538](https://github.com/wix/wix-style-react/pull/1538)

### Changed
- `<ModalSelectorLayout/>` support disabled items [1550](https://github.com/wix/wix-style-react/pull/1550)
- `<InputArea/>`, `<RichTextArea/>`, `<Range>`, `<RadioGroup>` new focus styles [1553](https://github.com/wix/wix-style-react/pull/1553) [1542](https://github.com/wix/wix-style-react/pull/1542) [1548](https://github.com/wix/wix-style-react/pull/1548)
- `<TextLink/>` - `preventDefault` for onClick when no `link` given [1551](https://github.com/wix/wix-style-react/pull/1551)

### Fixed
- `<Tooltip/>` fix `tooltipPlacement` prop [1552](https://github.com/wix/wix-style-react/pull/1552)
- `<ToggleSwitch/>` - Remove from async from isFocused [1544](https://github.com/wix/wix-style-react/pull/1544)
- `<PageHeader/>` - update the title methods in the driver to return the [1549](https://github.com/wix/wix-style-react/pull/1549)

## 2.0.29 - 2018-03-12
### Added
- new icons `Duplicate3`, `EmailOpen`, `Trash4`, `Warning` [1504](https://github.com/wix/wix-style-react/pull/1504)

### Changed
- `<Checkbox/>` focus styles [1521](https://github.com/wix/wix-style-react/pull/1521)
- `<ToggleSwitch/>` new focus styles + protractor isFocused util [1522](https://github.com/wix/wix-style-react/pull/1522)
- `<Tags/>` new focus styles + disable <Input> focus style + bug fixes [1513](https://github.com/wix/wix-style-react/pull/1513)

### Fixed
- `<Page/>` Added more height to content on minimize [1535](https://github.com/wix/wix-style-react/pull/1535)
- `<Button theme="no-border"/>` fix hover prop [1525](https://github.com/wix/wix-style-react/pull/1525)
- `<Notification/>` include padding as part of width [1529](https://github.com/wix/wix-style-react/pull/1529)

## 2.0.28 - 2018-03-06
### Fixed
- `<RadioGroup/>` - fix testkit `getSelectedValue` to return the updated selected option [1515](https://github.com/wix/wix-style-react/pull/1515)

## 2.0.27 - 2018-03-05
### Fixed
- `<Input/>` - revert changed focus style [1509](https://github.com/wix/wix-style-react/pull/1509)

## 2.0.26 - 2018-03-02
### Added
- `<Button/>` Implemented Tiny button [1491](https://github.com/wix/wix-style-react/pull/1491)

### Fixed
- `<Dropdown/>` - do not show options menu on focus [1500](https://github.com/wix/wix-style-react/pull/1500)
- `<DataTable/>` - Fix column width not set when header is hidden [1477](https://github.com/wix/wix-style-react/pull/1477)
- `<Page/>` fixed explorer bug again [1482](https://github.com/wix/wix-style-react/pull/1482)

### Changed
- `<Input/>` - Change Focus style [1496](https://github.com/wix/wix-style-react/pull/1496)
- `<PopoverMenu/>` - change show delay to 0 [1489](https://github.com/wix/wix-style-react/pull/1489)
- `<Tag/>` extend component functionality [1481](https://github.com/wix/wix-style-react/pull/1481)

## 2.0.25 - 2018-02-22
### Changed
- `<Page/>` - Reverted a bug fix for IE [#1468](https://github.com/wix/wix-style-react/pull/1468) that caused google chrome issue.
- Removed the `componentInstance` occurrences in tests.

### **Added** for new features.
- `<Icon/>` - new email icon

## 2.0.24 - 2018-02-19
### Changed
- `<Page.Header/>` - update gradient height [#1458](https://github.com/wix/wix-style-react/pull/1458)

### Fixed
- `<Page/>` fixed bug in IE [#1468](https://github.com/wix/wix-style-react/pull/1468)
- `<Card/>` header title position fix [#1464](https://github.com/wix/wix-style-react/pull/1464)
- `<Selector/>` & `<ModalSelectorLayout/>` cover long text with ellipsis [#1461](https://github.com/wix/wix-style-react/pull/1461)

## 2.0.23 - 2018-02-14
### Fixed
- `<RadioGroup/>` - Fix radio button width (#1457)
- `<Input/>` - Amaterial theme fix, added hover and fade in / out [#1445](https://github.com/wix/wix-style-react/pull/1445)
- `<InputArea/>` - on error tooltip use `theme="dark"` & default `tooltipPlacement="top"` [1456](https://github.com/wix/wix-style-react/pull/1456)
- `<StatsWidget/>` - fix padding issues [#1446](https://github.com/wix/wix-style-react/pull/1446)
- `<GoogleAddressInput/>` fix ocasionally missing street number [#1435](https://github.com/wix/wix-style-react/pull/1435)

### Changed
- `<Notification/>` - remove size prop [#1448](https://github.com/wix/wix-style-react/pull/1448)
- `<PopoverMenuItem/>` - add size prop [#1437](https://github.com/wix/wix-style-react/pull/1437)

## 2.0.22 - 2018-02-11
### Fixed
- fix `puppeteer` testkit driver for the `<Label/>` component.

## 2.0.21 - 2018-02-11
### Fixed
- `<Page/>` - Fixed width issues with windows browser.

### Added
- `puppeteer` testkit driver for the `<Label/>` component and added docs.
- Added disalbed state for a `<SideMenu/>` Drillview.

## 2.0.20 - 2018-02-07
### Added
- `puppeteer` testkit driver for the `Button` component.

### Changed
- Reference to wix-ui-test-utils

## 2.0.19 - 2018-02-06
### Changed
- `puppeteer` testkit driver for the `Input` component.

### Fixed
- Don't render `PopoverMenuItem` icon if doesn't exist
- `Breadcrumbs` dark theme color correction.
- `Page` UI fixes for restricted content size.
- `Page` pass the `minimized` property to the content element


## 2.0.18 - 2018-02-02
### Fixed
- Bug fixes in `Page` Component [1422](https://github.com/wix/wix-style-react/pull/1422) [1407](https://github.com/wix/wix-style-react/pull/1407)
- `DropdownLayout` - Hides the drop down when not shown [1408](https://github.com/wix/wix-style-react/pull/1408)
- fix divider color `Card.Header`

### Added
- Automatic Storybook Deployment Upon PR [1418](https://github.com/wix/wix-style-react/pull/1418)

## 2.0.17 - 2018-01-30
### Changed
- Changed order of storybook components [1390](https://github.com/wix/wix-style-react/pull/1390)

### Added
- `<CounterBadge/>` new component from `wix-ui-backoffice` [1392](https://github.com/wix/wix-style-react/pull/1392)

### Fixed
- `<Breadcrumbs/>` add 204px `max-width` on breadcrumb items [1394](https://github.com/wix/wix-style-react/pull/1394)
- `<RadioGroup.Radio/>` use correct `displayName` for `RadioGroup.Radio` [00f303b](https://github.com/wix/wix-style-react/commit/00f303b210bb0dda808f9ab85405c17ea3cf8d03)
- `RadioGroup` add missing `getRadioAtIndex` to enzyme testkit [1398](https://github.com/wix/wix-style-react/pull/1398)

## 2.0.15 - 2018-01-24
### Changed
- Made `wix-ui-test-utils` a depenedency

## 2.0.15 - 2018-01-23
### Added
- `<Page/>` Added `fullScreen` prop to Content [1388](https://github.com/wix/wix-style-react/pull/1388)

### Fixed
- `<Page/>` Rendering issues [1381](https://github.com/wix/wix-style-react/pull/1381)

## 2.0.14 - 2018-01-23
### Added
- Add method `click` to `Card.ButtonHeader` testkit [1385](https://github.com/wix/wix-style-react/pull/1385)

### Fixed
- `<Page/>` Add calcualtion when leaving minimized state [1381](https://github.com/wix/wix-style-react/pull/1381)
- Page background image [1387](https://github.com/wix/wix-style-react/pull/1387)

## 2.0.13 - 2018-01-22
### Changed
- InputArea remove hasCounter class [1322](https://github.com/wix/wix-style-react/pull/1322)
- Fix modal height [1378](https://github.com/wix/wix-style-react/pull/1378)

### Deprecated
- `<ButtonSelection/>` is no longer available [1362](https://github.com/wix/wix-style-react/pull/1362)

## 2.0.12 - 2018-01-17
### Added
- add generic data-hooks to `Tag` and `TooltipContent` & `<TabsItem/>` components [1371](https://github.com/wix/wix-style-react/pull/1371) [1361](https://github.com/wix/wix-style-react/pull/1361)

### Changed
- `<TabItem/>` - use `propType.node` for `title` [1372](https://github.com/wix/wix-style-react/pull/1372)
- update `MoveTo`, `FoodInstock` & `FoodOutOfStock` icons [0ae2ca04e](https://github.com/wix/wix-style-react/commit/0ae2ca04e4faec5972c96c30af14831515c4ee25)

## 2.0.11 - 2018-01-15
### Fixed
- `<Page/>` can receive `sidePadding` without `maxWidth`

### Changed
- `<Notification/>` - no longer require `size`, choose it automatically [1356](https://github.com/wix/wix-style-react/pull/1356)

## 2.0.9 - 2018-01-11
### Added
- Add `sidePadding` props to `<Page/>` [1354](https://github.com/wix/wix-style-react/pull/1354)

## 2.0.8 - 2018-01-11
### Changed
- `<Dropdown/>` - close dropdown when clicking header [1352](https://github.com/wix/wix-style-react/pull/1352)
- Add new icons `Lock` and `LockOpen` [1341](https://github.com/wix/wix-style-react/pull/1341)
- Add PropType `node` to `backLabel` in `SideMenuDrill` [1348](https://github.com/wix/wix-style-react/pull/1348)

### Fixed
- `<TimeInput/>` - Move width property to wrapper [1349](https://github.com/wix/wix-style-react/pull/1349)
- `<Dropdown/>` - use cursor pointer [1346](https://github.com/wix/wix-style-react/pull/1346)
- `<TextLink/>` - fix `doesComponentHasClass` teskit method

## 2.0.7 - 2018-01-10
### Added
- Add `width` and `height` props to `<imageViewer/>` [1340](https://github.com/wix/wix-style-react/pull/1340)
- Add `type="button"` for missing places in the project [1339](https://github.com/wix/wix-style-react/pull/1339)

### Fixed
- fix `<HBox/>` & `<VBox/>` [1345](https://github.com/wix/wix-style-react/pull/1345)
Fixed tabs styling bug


## 2.0.6 - 2018-01-09
### Added
- `<PopoverMenu/>` - support `buttonHeight` [1335](https://github.com/wix/wix-style-react/pull/1335)

### Changed
- upgrade enzyme to 3.3.0 [1330](https://github.com/wix/wix-style-react/pull/1330)

## 2.0.4 - 2018-01-04
### Fixed
- `<SideMenu/>` - Fix sidebar menu items being hidden [1326](https://github.com/wix/wix-style-react/pull/1326)
- various UI alignments [1300](https://github.com/wix/wix-style-react/pull/1300)
- `<MultiSelect/>` - Save multiselect input on blur [1316](https://github.com/wix/wix-style-react/pull/1316)

### Changed
- `<StatsWidget/>` - Switch stats widget to use button with options from dropdown [1320](https://github.com/wix/wix-style-react/pull/1320)
- `<ModalSelectorLayout/>` - allow `node` in `title` & `subtitle` props
- `<RadioGroup.Button>` - add `content` prop for additional, non label, nodes [1327](https://github.com/wix/wix-style-react/pull/1327)

### Added
- `<Tabs/>` - new type `compactSide` [1291](https://github.com/wix/wix-style-react/pull/1291)

## 2.0.3 - 2017-12-12
### Fixed

- `SideMenuDrill` - Fix empty menu level [1297](https://github.com/wix/wix-style-react/pull/1297)
- Fix exclamation icon blocking interaction on entire row [1311](https://github.com/wix/wix-style-react/pull/1311)
- `DropdownLayout` - Fix drop down rtl options are left aligned [1310](https://github.com/wix/wix-style-react/pull/1310)

### Added
- `Slider` - Add Testkit and e2e [1303](https://github.com/wix/wix-style-react/pull/1303)
- `DropdownLayout` - Added optionsContent to driver [1308](https://github.com/wix/wix-style-react/pull/1308)
- `Icons` - Add new icons and update Google, Facebook, Code and Yandex [1307](https://github.com/wix/wix-style-react/pull/1307)
- `ButtonLayout` - Added icon button styles for `heightlarge` [1313](https://github.com/wix/wix-style-react/pull/1313)

## 2.0.2 - 2017-12-26
### Fixed
- fix css name collision between tooltip and button [1276](https://github.com/wix/wix-style-react/pull/1276)

## 2.0.1 - 2017-12-26

### Added
- MusicalNote icon added [1280](https://github.com/wix/wix-style-react/pull/1280)

### Changed
- `SideMenuDrill.SubMenu` - Add `node` as PropType to `title` in `SideMenuDrill.SubMenu` component [1298](https://github.com/wix/wix-style-react/pull/1298)

### Fixed
- `Page` - Fixed height calculation bug when header  changes [1299](https://github.com/wix/wix-style-react/pull/1299)
- `ButtonWithOptions` - Assorted bug fixes  [1296](https://github.com/wix/wix-style-react/pull/1296)


## 2.0.0 - 2017-12-24

### Breaking
- `<Grid/>`- Col component defaultProp span is now 12. Might prevent default -15px padding to the left, so should be treated as a breaking change. [1279](https://github.com/wix/wix-style-react/pull/1279)
- `<ModalSelectorLayout/>` - new component, replaces `<ModalSelector>`. Should be used in conjunction with `<Modal/>` [1294](https://github.com/wix/wix-style-react/pull/1294)

### Changed
- `Grid`- Rename `Row` component to `Columns`, and `AutoAdjustedRow` to `AutoAdjustedColumns` [1279](https://github.com/wix/wix-style-react/pull/1279)

### Fixed
- `Page Header` - Update Header scrol treshold size [1289](https://github.com/wix/wix-style-react/pull/1289)
- `MultiSelect` - Allow to write any text as tag when options are empty [1292](https://github.com/wix/wix-style-react/pull/1292)

## 1.2.12 - 2017-12-24

### Added
- `<MultiSelect/>` - Added Multiselect [1289](https://github.com/wix/wix-style-react/pull/1289) [1292](https://github.com/wix/wix-style-react/pull/1292) 

### Changed
- `<Page/>` - Added height recalculation when inner height changes [1289](https://github.com/wix/wix-style-react/pull/1289)

## 1.2.11 - 2017-12-21
### Added
- `<MessageBox/>` - Add footerContent props to MessageBox to allow adding footer to the message box [1269](https://github.com/wix/wix-style-react/pull/1269)
- `<Icon.Time/>` - new time icon [1285](https://github.com/wix/wix-style-react/pull/1285)

### Fixed
- `<Notification/>` - fix close button alignment [f59bec356](https://github.com/wix/wix-style-react/commit/f59bec3560f210e189a792820f600843a445e68d)
- `<Card/>` - add more clear docs [1284](https://github.com/wix/wix-style-react/pull/1284)
- `<Page/>` - Added height for title to avoid height calculation errors [1287](https://github.com/wix/wix-style-react/pull/1287)

## 1.2.10 - 2017-12-20
### Fixed
- fix css name collision between tooltip and button [1276](https://github.com/wix/wix-style-react/pull/1276)
- Add background color to page header [1277](https://github.com/wix/wix-style-react/pull/1277)
- PageHeader: update propTypes for title and subtitle [1282](https://github.com/wix/wix-style-react/pull/1282)

## 1.2.9 - 2017-12-18
### Fixed
- fixed import of icon in StatsWidget [1272](https://github.com/wix/wix-style-react/pull/1272)
- revert use `wix-ui-backoffice/ToggleSwitch` [1242](https://github.com/wix/wix-style-react/pull/1242) due to missing RTL support

## 1.2.8 - 2017-12-17
### Fixed
- use actual source of Story & AutoExample [1268](https://github.com/wix/wix-style-react/pull/1268)
- vertically align notification close button in IE11 [1255](https://github.com/wix/wix-style-react/pull/1255)
- remove `z-index` and rely on `initial` [1253](https://github.com/wix/wix-style-react/pull/1253)

### Added
- Allow setting the display of the `TextLinkLayout` element [1262](https://github.com/wix/wix-style-react/pull/1262)
- `Page` - Added docs [1265](https://github.com/wix/wix-style-react/pull/1265)

### Changed
- `ToggleSwitch` - use `wix-ui-backoffice/ToggleSwitch` [1242](https://github.com/wix/wix-style-react/pull/1242)

## 1.2.7 - 2017-12-13
### Fixed
- Add parentSelector and overlayPosition props to modal [1254](https://github.com/wix/wix-style-react/pull/1254)

### Added
- HBox and VBox components [1263](https://github.com/wix/wix-style-react/pull/1263)

## 1.2.6 - 2017-12-13
### Fixed
- Remove unwanted padding from `<FieldWithSelection>` dropdown [1258](https://github.com/wix/wix-style-react/pull/1258)
- support append to parent in tooltip teskit [1252](https://github.com/wix/wix-style-react/pull/1252)

### Changed
- Migrate storybook utils to `wix-storybook-utils` [1215](https://github.com/wix/wix-style-react/pull/1215)

## 1.2.5 - 2017-12-10
### Added
- `DropdownComposite` - [1238](https://github.com/wix/wix-style-react/pull/1238)

### Changed
- `Page` - Change styles [1234](https://github.com/wix/wix-style-react/pull/1234)
- `Page` - Added max-width support [1245](https://github.com/wix/wix-style-react/pull/1245)

### Fixed
- `Input` - RTL is now implemented with direction:rtl [1232](https://github.com/wix/wix-style-react/pull/1232)

## 1.2.4 - 2017-12-06
### Changed
- `DropdownLayout`
    - remove line-height from options in material theme (https://github.com/wix/wix-style-react/commit/7bf3f75e347de4a4920740de92441b5f205f65a1)
    - fix position in safari [1231](https://github.com/wix/wix-style-react/pull/1231)

## 1.2.3 - 2017-12-05
### Changed
- `DropdownLayout` - change option padding to conform to backoffice UX [1127](https://github.com/wix/wix-style-react/pull/1227)

### Fixed
- `<Loader>` - Fix teskit for the case  the loader doesn't exist [1226](https://github.com/wix/wix-style-react/pull/1226), [1228](https://github.com/wix/wix-style-react/pull/1228)
- `<InputWithOptions>` - do not force blur when hiding options dropdown [1125](https://github.com/wix/wix-style-react/pull/1225)

## 1.2.2 - 2017-12-04
### Fixed
- wix-ui-test-utils should be a dep instead of dev-dep
## 1.2.1 - 2017-12-04
### Fixed
- Publish transpiled code (https://github.com/wix/wix-style-react/commit/d165950bfc3b355b1bbc5896797538a52c410ec2)


## 1.2.0 - 2017-12-04
### Changed
- Migrate to wix-ui-test-utils [1204](https://github.com/wix/wix-style-react/pull/1204)
- Removed dist from testkit import path in the examples
- Deprecate export-components script in facor of import-path package [1217](https://github.com/wix/wix-style-react/pull/1217)
- Migrate to haste [1218](https://github.com/wix/wix-style-react/pull/1218)
- `<Loader>`: New loader [1203](https://github.com/wix/wix-style-react/pull/1203)
### Fixed
- `<input>` - Correct prop-types for noRitghtBorderRadius [1213](https://github.com/wix/wix-style-react/pull/1213)

### Added
- `<Page>` - Add Tabs [1211](https://github.com/wix/wix-style-react/pull/1211)
- `<DropdownLayout>` - Added long options support to dropdown [#1220](https://github.com/wix/wix-style-react/pull/1220)

## 1.1.4624 - 2017-11-29
### Changed
- use node 8.9.1
- remove `module` from package.json, no more `dist/es` folder
- `<MessageBoxFunctionalLayout>` - confirmText & cancelText proptype now node [1202](https://github.com/wix/wix-style-react/pull/1202)


### Fixed
- `<Input>` - correct autofocus cursor position [1208](https://github.com/wix/wix-style-react/pull/1208)


## 1.1.4623 - 2017-11-28
### Added
- New icons: Code, Facebook, Google & Yandex [1197](https://github.com/wix/wix-style-react/pull/1197)

### Changed
- `<PageHeader>` - general improvements [1196](https://github.com/wix/wix-style-react/pull/1196)

### Fixed
- `<Notification.TextLabel/>` - correct style & ellipsed text behaviour [1180](https://github.com/wix/wix-style-react/pull/1180)
- `<Checkbox/>` - do not require `.ltr` [1199](https://github.com/wix/wix-style-react/pull/1199)


## 1.1.4262 - 2017-11-27
### Changed
- `<Page>` refactor & improve docs [1182](https://github.com/wix/wix-style-react/pull/1190), [1182](https://github.com/wix/wix-style-react/pull/1182)

### Fixed
- `<InputArea>` updated to the correct icon [1181](https://github.com/wix/wix-style-react/pull/1181)


## 1.1.4260 - 2017-11-25
### Added
- `<StatsWidget>` - Added new widget (https://github.com/wix/wix-style-react/commit/3209220357d8b8e1bd320de5f1e9512f50214342)
- `<Tooltip>` - Add reange polyfill [1178](https://github.com/wix/wix-style-react/pull/1178)
- Package.lock - [1183](https://github.com/wix/wix-style-react/pull/1183)
- Themes - huge refactor to boost performance and api. [1186](https://github.com/wix/wix-style-react/pull/1186)

### Changed
- `<TimeInput>` + `<Search>` - Update docs [1108](https://github.com/wix/wix-style-react/pull/1108)
- `<Tooltip>` - Remove deprecated tooltip [1179](https://github.com/wix/wix-style-react/pull/1179)

### Fixed
- `<ToggleSwitch>` - disable the toggle on disable mode[1174](https://github.com/wix/wix-style-react/pull/1174)
- storybook e2e
- `<InputWithOption>` - Solved saffari issue: [387](https://github.com/wix/wix-style-react/issues/387)
- `<Tooltip>` - Remove setTimeout [1177](https://github.com/wix/wix-style-react/pull/1177)
- Terminal was cleaned from all warning printouts - [1185](https://github.com/wix/wix-style-react/pull/1185)


## 1.1.4259 - 2017-11-22
### Added
- `<Page>` Added more features [1158](https://github.com/wix/wix-style-react/pull/1158)
- Added sorting order icons [1140](https://github.com/wix/wix-style-react/pull/1140)

### Changed
- `<Breadcrumbs>` style changes [1156](https://github.com/wix/wix-style-react/pull/1156)
- `<Tag>` Fixed bug with expanding width [1159](https://github.com/wix/wix-style-react/pull/1159)


## 1.1.4258 - 2017-11-21
### Added
- `<Page>` component and friends [1145](https://github.com/wix/wix-style-react/pull/1145)

### Changed
- `<AutoExample>` e2e approach [1148](https://github.com/wix/wix-style-react/pull/1148)

### Fixed
- `<DataTable>` - missing separators in data table [1153](https://github.com/wix/wix-style-react/pull/1153)
- `<GoogleAddressInput>` remove undefined properties from result [1154](https://github.com/wix/wix-style-react/pull/1154)


## 1.1.4527 - 2017-11-20
### Changed
- Themes implementation without provider [1151](https://github.com/wix/wix-style-react/pull/1151)

### Added
- `<Page>` - additional e2e tests

- `<GoogleAddressInput>` - Allow fetching address data via Places API [1141](https://github.com/wix/wix-style-react/pull/1141)
### Fixed
- TpaThemeProvider - small bug (https://github.com/wix/wix-style-react/commit/d66bf2107f1376c5034ef835303da20716df7e82)
- `<Button>` - Fixed incorrect padding in RTL [1142](https://github.com/wix/wix-style-react/pull/1142)
- `<DropdownLayout>` - Use lodash findIndex instead of native (for IE support)[1143](https://github.com/wix/wix-style-react/pull/1143)
- `<DropdownLayout>`, `<GoogleAddressInput>`, `<MultiSelect>` - Added a selectedHightlight prop to DropdownLayout, meaning after selecting an option if it should highlight it when dropdown is reopened [1136](https://github.com/wix/wix-style-react/pull/1136)
- `<DropdownLayout>` - mouseClickOutside method was fixed [1147](https://github.com/wix/wix-style-react/pull/1147)


## 1.1.4525 - 2017-11-18
### Added
- themes: progressed with themes poc
- `<Page>` - new component (https://github.com/wix/wix-style-react/pull/1127)

### Fixed
- `<GoogleAddressInput>` - pixelated google credit picture in the footer.
  (https://github.com/wix/wix-style-react/pull/1128)
- `<Tooltip>` - Popover jumping problem(https://github.com/wix/wix-style-react/pull/1137)


## 1.1.4524 - 2017-11-14
### Added
- `<ToogleSwitch/>` - Added support for colors, in order to add component to Wix Viewer (https://github.com/wix/wix-style-react/commit/aa4df9ceb95bd3786f812cb44831f027dbcdb2a4)

- Themes harmless side project as a POC.(https://github.com/wix/wix-style-react/commit/2d50e0a99f04fa8af7eb7566fb5b2930d36baeba)
### Fixed
- `<FieldWithSelectionComposite>` - fix-selection-input-type (https://github.com/wix/wix-style-react/pull/1126)
- release.js: run gh-pages-auto-release only when releasing(https://github.com/wix/wix-style-react/commit/d3d8035e57de0ce97c6b1c0544638a0798ec6760)


## 1.1.4523 - 2017-11-13
### Added
- `<Range/>` - now able to work with `<DatePicker/>`s to create date
  range component (https://github.com/wix/wix-style-react/commit/9b32f2a397eec268052036be5230e5b67ea3eda6)

### Fixed
- `<InputWithOptions/>` - do not hide dropdown if `options.length === 0` (https://github.com/wix/wix-style-react/pull/1116)


## 1.1.4252 - 2017-11-10
### Added
- `<Tooltip/>` `shouldUpdatePosition` prop (https://github.com/wix/wix-style-react/commit/da9c496396e7395de53dfb9a8bacbd7520c61012)

### Changed
- `<Tooltip/>` (https://github.com/wix/wix-style-react/commit/5b3fa3b0367bffe512b7ed44b11932b4d456e6ae):
    - default `maxWidth` now `204px`
    - default `textAlign` now `left`
