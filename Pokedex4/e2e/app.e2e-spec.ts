import { Pokedex4Page } from './app.po';

describe('pokedex4 App', () => {
  let page: Pokedex4Page;

  beforeEach(() => {
    page = new Pokedex4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
