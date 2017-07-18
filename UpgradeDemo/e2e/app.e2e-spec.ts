import { UpgradeDemoPage } from './app.po';

describe('upgrade-demo App', () => {
  let page: UpgradeDemoPage;

  beforeEach(() => {
    page = new UpgradeDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
