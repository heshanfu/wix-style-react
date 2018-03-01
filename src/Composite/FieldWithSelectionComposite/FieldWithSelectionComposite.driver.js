import React from 'react';
import FieldWithSelectionComposite from './FieldWithSelectionComposite';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';

const fieldWithSelectionCompositeDriverFactory = ({element, wrapper}) => {
  const label = element.querySelector('.label>label');
  const textInput = element.querySelector('input.input') || element.querySelector('textarea');
  const deprecatedSelectionInput = element.querySelector('input');

  return {
    exists: () => !!element,
    getLabel: () => label && label.textContent,
    /** @deprecated it is for internal testing and should not be exposed to users */
    hasLabel: () => !!label,
    /** @deprecated it is for internal testing and should not be exposed to users */
    hasInput: () => !!textInput,
    getInput: () => textInput,
    triggerInputBlur: () => ReactTestUtils.Simulate.blur(textInput),
    /** @deprecated it is for internal testing and should not be exposed to users */
    hasSelectionInput: () => !!deprecatedSelectionInput.tagName,
    getAttr: attrName => element.getAttribute(attrName),
    /** @deprecated it is for internal testing and should not be exposed to users */
    getNumberOfChildren: () => element.childElementCount,
    hasFieldLabelAttributes: () => !!element.querySelectorAll('[data-hook="field-label-attributes"]').length,
    setProps: props => {
      ReactDOM.render(<div ref={r => element = r}><FieldWithSelectionComposite {...props}/></div>, wrapper);
    }
  };
};

export default fieldWithSelectionCompositeDriverFactory;
