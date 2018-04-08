import inputAreaWithLabelCompositeDriverFactory from '../Composite/InputAreaWithLabelComposite/InputAreaWithLabelComposite.driver';

const autocompleteDriverFactory = ({element, wrapper}) => {
  const input = element.querySelector('input');

  return {
    ...inputAreaWithLabelCompositeDriverFactory({element, wrapper}),
    hasAutocomplete: () => !!input
  };
};

export default autocompleteDriverFactory;
