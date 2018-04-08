import React from 'react';
import ReactDOM from 'react-dom';
import {isClassExists} from '../../test/utils';
import Loader from './Loader';
import {testkitFactoryCreator} from '../test-common';
import textDriverFactory from '../Text/deprecated/Text.driver';

const textTestkitFactory = testkitFactoryCreator(textDriverFactory);

const loaderDriverFactory = ({element, wrapper}) => {
  const textDriver = element && textTestkitFactory({wrapper: element, dataHook: 'loader-text'});

  return {
    component: () => element,
    exists: () => !!element,
    getColor: () => isClassExists(element, 'blue') ? 'blue' : 'white',
    getText: () => textDriver.getText(),
    hasText: () => textDriver.exists(),
    isLarge: () => isClassExists(element, 'large'),
    isMedium: () => isClassExists(element, 'medium'),
    isSmall: () => isClassExists(element, 'small'),
    setProps: props => {
      ReactDOM.render(<div ref={r => element = r}><Loader {...props}/></div>, wrapper);
    }
  };
};

export default loaderDriverFactory;
