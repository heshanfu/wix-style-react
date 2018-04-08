import ReactTestUtils from 'react-dom/test-utils';
import {testkitFactoryCreator} from '../test-common';
import loaderDriverFactory from '../Loader/Loader.driver';
import buttonDriverFactory from '../Backoffice/Button/Button.driver';
import selectorDriverFactory from '../Selector/Selector.driver';
import searchDriverFactory from '../Search/Search.driver';
import textDriverFactory from '../Text/deprecated/Text.driver';
import {dataHooks} from './ModalSelectorLayout.helpers';
import checkboxDriverFactory from '../Checkbox/Checkbox.driver';

const textTestkitFactory = testkitFactoryCreator(textDriverFactory);
const loaderTestkitFactory = testkitFactoryCreator(loaderDriverFactory);
const buttonTestkitFactory = testkitFactoryCreator(buttonDriverFactory);
const searchTestkitFactory = testkitFactoryCreator(searchDriverFactory);
const checkboxTestkitFactory = testkitFactoryCreator(checkboxDriverFactory);

const modalSelectorLayoutDriverFactory = ({element}) => {
  const findInModalbyDataHook = dataHook => element.querySelector(`[data-hook="${dataHook}"]`);
  const mainLoaderDriver = () => loaderTestkitFactory({
    wrapper: element,
    dataHook: dataHooks.mainLoader
  });
  const nextPageLoaderDriver = () => loaderTestkitFactory({
    wrapper: element,
    dataHook: dataHooks.nextPageLoader
  });
  const cancelButtonDriver = () => buttonTestkitFactory({
    wrapper: element,
    dataHook: 'cancellation-button'
  });
  const okButtonDriver = () => buttonTestkitFactory({
    wrapper: element,
    dataHook: 'confirmation-button'
  });
  const subtitleTextDriver = () => textTestkitFactory({
    wrapper: element,
    dataHook: dataHooks.subtitle
  });
  const searchDriver = () => searchTestkitFactory({
    wrapper: element,
    dataHook: dataHooks.search
  });
  const getList = () => findInModalbyDataHook(dataHooks.list);
  const getModalBody = () => findInModalbyDataHook(dataHooks.modalBody);
  const getSelectors = () => getList().querySelectorAll(`[data-hook="${dataHooks.selector}"]`);
  const selectorDriverAt = i => selectorDriverFactory({element: getSelectors()[i]});
  const emptyState = () => findInModalbyDataHook(dataHooks.emptyState);
  const noResultsFoundState = () => findInModalbyDataHook(dataHooks.noResultsFoundState);
  const footerSelector = checkboxTestkitFactory({wrapper: element, dataHook: 'footer-selector'});

  return {
    exists: () => !!element,
    mainLoaderDriver,
    nextPageLoaderDriver,
    cancelButtonDriver,
    okButtonDriver,
    searchDriver,
    subtitleTextDriver,
    getTitle: () => findInModalbyDataHook('header-layout-title').textContent,
    clickOnClose: () => ReactTestUtils.Simulate.click(findInModalbyDataHook('header-close-button')),
    showsEmptyState: () => !!emptyState(),
    getEmptyState: () => emptyState().childNodes[0],
    showsNoResultsFoundState: () => !!noResultsFoundState(),
    getNoResultsFoundState: () => noResultsFoundState().childNodes[0],
    listExists: () => !!getList(),
    numberOfItemsInList: () => getSelectors().length,
    getSelectorDriverAt: i => selectorDriverAt(i),
    scrollDown: () => getModalBody().dispatchEvent(new Event('scroll')),
    footerSelector: () => footerSelector
  };
};

export default modalSelectorLayoutDriverFactory;
