# Migration to the new AutocompleteComposite component

`AutoCompleteComposite` has been renamed to `AutocompleteComposite`.\
The main change is the creation of the Options, which gives you more control of how each Option looks like.

## New props

`options` - Array of the options to display, this prop is required and has no default value

## Testkit Deprecations (e2e & unit)

The testkits name has changed: `autoCompleteCompositeTestkitFactory` => `autocompleteCompositeTestkitFactory`\

## Option creation

The options needs to implement a certain interface.\
To make it easy to use, 2 static functions were added on the `Autocomplete`:

* `Autocomplete.createOption()` - receives an object with optional properties of: id, value, isDisabled, isSelectable, render
* `Autocomplete.createDivider()` - receives an optional textual value parameter

A more ellaborate documentation can be found in the <a target="_blank" rel="noopener noreferrer" href="https://wix.github.io/wix-ui-backoffice/?selectedKind=Components&selectedStory=Autocomplete">storybook</a>.
