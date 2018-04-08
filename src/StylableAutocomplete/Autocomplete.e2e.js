import eyes from 'eyes.it';
import {autocompleteTestkitFactory, getStoryUrl, waitForVisibilityOf} from '../../testkit/protractor';

describe('Autocomplete', () => {
  const storyUrl = getStoryUrl('4. Selection', '4.1 + Autocomplete');
  const dataHook = 'story-autocomplete';

  beforeEach(() => browser.get(storyUrl));

  eyes.it('should render autocomplete', async () => {
    const driver = autocompleteTestkitFactory({dataHook});
    await waitForVisibilityOf(driver.element(), 'Cannot find Autocomplete');
    expect(driver.element()).toBeDefined();
  });
});
