import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import styles from './RichTextArea.st.css';
import {hasCssState} from '../stylable-has-css-state';

const richTextAreaDriverFactory = ({element, wrapper, component, componentInstance}) => {
  const getButtons = () => [...element.querySelectorAll('[data-hook*="rich-text-area-button"]')];
  const getEditorWrapper = () => element.querySelector('[data-hook=editor-wrapper]');
  const getButtonType = button => button.getAttribute('data-hook').replace(/^rich-text-area-button-/, '');
  const getImage = () => element.querySelector('[data-hook=editor-image]');
  const getButtonByType = type => getButtons().find(button => getButtonType(button) === type);
  const clickButtonByType = type => () => ReactTestUtils.Simulate.mouseDown(getButtonByType(type));
  const getDefaultBlock = () => element.querySelector('[data-key=\'defaultBlock\']');

  return {
    exists: () => !!element,
    getButtonTypes: () => getButtons().map(getButtonType),
    clickBoldButton: clickButtonByType('bold'),
    clickItalicButton: clickButtonByType('italic'),
    clickUnderlineButton: clickButtonByType('underline'),
    clickImageButton: clickButtonByType('image'),
    clickUnorderedListButton: clickButtonByType('unordered-list'),
    clickOrderedListButton: clickButtonByType('ordered-list'),
    getContent: () => element.childNodes[1].textContent,
    enterText: text => {
      const editorState = componentInstance.state.editorState;
      const newEditorState = editorState
        .transform()
        .insertText(text)
        .apply();

      componentInstance.setEditorState(newEditorState);
    },
    isErrorIndicatorVisible: () => hasCssState(element, styles, {withError: true}),
    isDisabled: () => (
      getButtons().every(button => hasCssState(button, styles, {disabled: true})) &&
      hasCssState(element.childNodes[1], styles, {disabled: true})
    ),
    isImageExist: () => !!getImage(),
    isAddImageButtonExist: () => !!getButtonByType('image'),
    isResizable: () => hasCssState(getEditorWrapper(), styles, {resizable: true}),
    isDefaultBlockExist: () => getDefaultBlock(),
    setProps: props => {
      const ClonedWithProps = React.cloneElement(component, Object.assign({}, component.props, props), ...(component.props.children || []));
      ReactDOM.render(<div ref={r => element = r}>{ClonedWithProps}</div>, wrapper);
    }
  };
};

export default richTextAreaDriverFactory;
